// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { enterEmailBackService } from '#/service/Login/enterEmail/enterEmail.back.service'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function EnterEmailController (req, res) {
  /** @type {{email: string}} */
  const { email } = req.body || {}

  const services = {
    POST: () => enterEmailBackService(email?.toLowerCase())
  }

  try {
    const code = (await services[req.method]()) ?? null

    res.status(200).json({ error: null, code })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
