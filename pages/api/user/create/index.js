import { createUser } from '#/service/User/create/createUser'
import { getCookie } from '#/utils/cookies'
import { decodeToken, verifyToken } from '#/utils/jsonWebToken'
import { validate } from 'email-validator'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    if (req.method !== 'POST') throw new Error('Method should be POST')

    const token = getCookie('token', req.headers.cookie)
    verifyToken(token)

    const { rol } = decodeToken(token)

    if (rol !== 'admin') throw new Error('Rol Admin is required to this endpoint')

    if (Object.entries(req.body).length === 0) throw new Error('Body request is required')

    const { name, email } = req.body

    if (!name || !email) throw new Error('Correo y Nombre son requeridos')

    const isValidEmail = validate(email)
    if (!isValidEmail) throw new Error('Email provided is not valid')

    const canCreate = await createUser(req.body)

    if (!canCreate) throw new Error('User already exist')

    res.status(200).json({})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
