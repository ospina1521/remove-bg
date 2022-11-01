// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { UserRepositorySupaBase } from '#/repository/UserRepositorySupaBase/UserRepositorySupaBase'
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  const { email = '' } = req.query || {}

  try {
    if (typeof email !== 'string') throw new Error('Email should be a string')

    const user = await new UserRepositorySupaBase().getByEmail(email)

    if (!user) throw new Error("User from email don't exist")

    res.status(200).json({ user })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}
