// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createUser } from '#/services/createUser'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default function handler (req, res) {
  const b = createUser()

  res.status(200).json({ name: b })
}
