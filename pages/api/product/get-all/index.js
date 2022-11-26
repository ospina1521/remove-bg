// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllProduct } from '#/service/Products/getAll/getAllProduct'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    if (req.method !== 'GET') throw new Error('Method should be GET')

    const { category } = req.query

    if (typeof category !== 'string') throw new Error('category query should be a string')

    const criteria = { category }

    const resp = await getAllProduct(criteria)

    res.status(200).json(resp)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
