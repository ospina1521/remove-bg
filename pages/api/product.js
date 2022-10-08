// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendMail } from '#/providers/Mail/Mail'
import { createProduct } from '#/services/Products/create/createProducto'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    const actions = {
      GET: createProduct
    }

    const asd = actions[req.method]?.({})

    res.status(200).json({ name: asd })
  } catch (error) {
    console.log('🚀 ~ file: product.js ~ line 21 ~ handler ~ error', error.message)
    res.status(200).json({ error: error.message })
  }
}
