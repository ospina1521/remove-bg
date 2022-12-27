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
    const { code, token } = (await services[req.method]()) ?? null

    res.status(200).json({ error: null, token, code })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
