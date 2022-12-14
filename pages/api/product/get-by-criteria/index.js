// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getByCriteria } from '#/service/Products/getByCriteria/getByCriteria'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    if (req.method !== 'GET') throw new Error('Method should be GET')

    const { category, provider, id, isVisible } = req.query

    const _isVisible = {
      true: true,
      false: false
    }[isVisible] ?? true

    const criteria = { category, provider, id, isVisible: _isVisible }

    // @ts-ignore
    const resp = await getByCriteria(criteria)

    res.status(200).json(resp)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
