// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { updateUser } from '#/service/User/update/updateUser'
import { getCookie } from '#/utils/cookies'
import { decodeToken, verifyToken } from '#/utils/jsonWebToken'
import { responsiveFontSizes } from '@mui/material'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    if (req.method !== 'PUT') throw new Error('Method should be PUT')

    const token = getCookie('token', req.headers.cookie)
    verifyToken(token)

    const userAuth = decodeToken(token)
    if (userAuth.rol !== 'admin') throw new Error('Unauthorized')

    if (Object.entries(req.body).length === 0) throw new Error('Body request is required')

    const { email } = req.query
    if (!email || typeof email !== 'string') throw new Error('email query is required')

    /** @type {import('./types').IRequestBody} */
    const { name, nameCompany, nit, phone, urlPhoto, rol } = req.body

    const user = { name, nameCompany, nit, phone, urlPhoto, rol }

    const resp = await updateUser(email, user)

    res.status(200).json({ ...resp })

    if (resp.error?.message) throw new Error(resp.error?.message)

    res.status(200).json({ ...resp })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
