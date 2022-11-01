// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createProduct } from '#/service/Products/create/createProducto'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    const method = {
      GET: () => createProduct({})
    }

    const asd = await method[req.method]?.()

    res.status(200).json({ name: asd })
  } catch (error) {
    console.log('🚀 ~ file: product.js ~ line 21 ~ handler ~ error', error.message)
    res.status(200).json({ error: error.message })
  }
}
