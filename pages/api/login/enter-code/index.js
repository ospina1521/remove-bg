import { enterCodeService } from '#/service/Login/enterCode/enterCode.back.service'
import memoryCache from 'memory-cache'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function EnterCodeController (req, res) {
  /** @type {{code: string, email: string}} */
  const { code, email } = req.body || {}

  try {
    const token = await enterCodeService({ email: email?.toLowerCase(), code })

    res.status(200).json({
      token,
      error: null
    })

    memoryCache.del(`codeNumberWithFormat${email}`)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
