import { ENV } from '#/env'
import { sendMail } from '#/providers/Mail/Mail'
import { copyNuevoProducto } from '#/providers/Mail/templates/nuevoProducto'
import { supabase } from '#/providers/SupaBase/createClient'
import { createProduct } from '#/service/Products/create/createProducto'
import { getCookie } from '#/utils/cookies'
import { decodeToken, verifyToken } from '#/utils/jsonWebToken'
import { decode } from 'base64-arraybuffer'
import { removeBackgroundFromImageBase64 } from 'remove.bg'
import { v4 } from 'uuid'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    if (req.method !== 'POST') throw new Error('Method should be POST')

    const token = getCookie('token', req.headers.cookie)
    verifyToken(token)

    const { email } = decodeToken(token)

    if (Object.entries(req.body).length === 0) throw new Error('Body request is required')

    /** @type {import('./types').ReqBody} */
    const {
      images,
      code,
      name,
      price,
      quantity,
      category
    } = req.body

    const listPromisesOfRemoveBG = images
      .map(
        e =>
          removeBackgroundFromImageBase64({
            base64img: e,
            apiKey: ENV.removeBgKey,
            size: 'regular'
          })
      )

    const imagesWithoutBG = await Promise.all(listPromisesOfRemoveBG)

    const listPromisesOfUploadImages = imagesWithoutBG
      .map(
        (e, i) => {
          return supabase.storage
            .from('products')
            .upload(
              `public/${v4()}.png`,
              decode(e.base64img),
              { contentType: 'image/png' }
            )
        }
      )

    const urlImages = await Promise.all(listPromisesOfUploadImages)

    const _img = urlImages.map(e => {
      if (e.error) throw new Error('Error al guardar una imagen')

      const urlBase = 'https://wtfzbttwmkofjtobyckk.supabase.co/storage/v1/object/public/products/'

      return urlBase + e.data?.path
    })

    const resp = await createProduct({
      images: _img,
      code,
      name,
      price,
      quantity,
      category,
      provider: email
    })

    if (resp.error?.message) throw new Error(resp.error?.message)

    await sendMail({
      email: ENV.adminEmail,
      subject: 'Nuevo producto',
      message: copyNuevoProducto({ email, name, price, id: resp.data?.[0]?.id })
    })

    res.status(200).json({ ...resp })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
