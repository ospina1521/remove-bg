// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { enterEmail } from '#/services/Login/EnterEmail'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  const { email } = req.body || {}

  const method = {
    POST: () => enterEmail(email)
  }

  try {
    await method[req.method]?.()

    res.send({})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}