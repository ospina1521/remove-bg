// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { UserRepositorySupaBase } from '#/repository/UserRepositorySupaBase/UserRepositorySupaBase'
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  const { email = '' } = req.query || {}

  try {
    const abc = await new UserRepositorySupaBase().getByEmail(email)
    res.status(200).json({ abc })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}
