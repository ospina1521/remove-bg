// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { enterEmailController } from '#/controller/Login/enterEmail.controller'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  const { email } = req.body || {}

  const method = {
    POST: () => enterEmailController(email)
  }

  try {
    await method[req.method]?.()

    res.send({})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
