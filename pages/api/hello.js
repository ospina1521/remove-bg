// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendMail } from '#/providers/Mail/Mail'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  const b = await sendMail({
    email: 'hbiaser132@gmail.com',
    message: 'mensaje'
  })

  res.status(200).json({ name: b })
}
