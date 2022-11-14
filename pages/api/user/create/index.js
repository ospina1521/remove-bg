import { createUser } from '#/service/User/create/createUser'
import { getCookie } from '#/utils/cookies'
import { decodeToken } from '#/utils/jsonWebToken'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    if (req.method !== 'POST') throw new Error('Method should be POST')

    if (Object.entries(req.body).length === 0) throw new Error('Body request is required')

    const token = getCookie('token', req.headers.cookie)
    console.log('🚀 ~ file: index.js ~ line 16 ~ handler ~ token', token)

    // decodeToken(token)

    // verifyToken()

    await createUser(req.body)

    res.status(200).json({})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
