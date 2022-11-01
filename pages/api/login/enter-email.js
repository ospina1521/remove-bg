// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { enterEmailBackService } from '#/service/Login/enterEmail.back.service'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function EnterEmailController (req, res) {
  const { email } = req.body || {}

  const method = {
    POST: () => enterEmailBackService(email)
  }

  try {
    await method[req.method]?.()

    res.send({})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
