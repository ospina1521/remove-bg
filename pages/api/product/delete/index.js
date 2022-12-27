import { ENV } from '#/env'
import { sendMail } from '#/providers/Mail/Mail'
import { copyEliminarProducto } from '#/providers/Mail/templates/eliminarProducto'
import { deleteProduct } from '#/service/Products/delete/deleteProducto'
import { getCookie } from '#/utils/cookies'
import { decodeToken, verifyToken } from '#/utils/jsonWebToken'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    if (req.method !== 'DELETE') throw new Error('Method should be DELETE')

    const token = getCookie('token', req.headers.cookie)
    verifyToken(token)

    const { email } = decodeToken(token)

    // @ts-ignore
    const resp = await deleteProduct(req.query.id)

    if (resp.error?.message) throw new Error(resp.error?.message)

    await sendMail({
      email: ENV.adminEmail,
      subject: 'Eliminación de producto',
      message: copyEliminarProducto({ email, id: req.query.id })
    })

    res.status(200).json({ ...resp })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
