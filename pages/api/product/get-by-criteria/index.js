// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllProduct } from '#/service/Products/getAll/getAllProduct'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    if (req.method !== 'GET') throw new Error('Method should be GET')

    const { category, provider, id } = req.query

    const criteria = { category, provider, id }

    // @ts-ignore
    const resp = await getAllProduct(criteria)

    res.status(200).json(resp)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}