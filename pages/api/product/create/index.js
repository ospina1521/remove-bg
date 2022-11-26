// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { cloudinary } from '#/providers/Cloudinary/createClient'
// import { supabase } from '#/providers/SupaBase/createClient'
import { createProduct } from '#/service/Products/create/createProducto'
import { getCookie } from '#/utils/cookies'
import { decodeToken, verifyToken } from '#/utils/jsonWebToken'
// import { decode } from 'base64-arraybuffer'
import { removeBackgroundFromImageBase64 } from 'remove.bg'

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
            apiKey: 'hFR252RG4bC6FMMMmJ7y4mTX',
            size: 'regular'
          })
      )

    const imagesWithoutBG = await Promise.all(listPromisesOfRemoveBG)

    const listPromisesOfUploadImages = imagesWithoutBG
      .map(
        (e, i) =>
          cloudinary.uploader.upload('data:image/png;base64,' + e.base64img)
      )

    const urlImages = await Promise.all(listPromisesOfUploadImages)

    const _img = urlImages.map(e => e.url)

    const resp = await createProduct({
      images: _img,
      code,
      name,
      price,
      quantity,
      category,
      provider: email
    })

    res.status(200).json({ ...resp })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
