
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function EnterCodeController (req, res) {
  const { code } = req.body || {}

  try {
    if (!code) throw new Error('Code parameter is required')
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
