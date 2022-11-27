// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */
// export default async function handler (req, res) {
//   try {
//     const userRepository = new UserRepositorySupaBase()

//     const users = await userRepository.getAllUsers()

//     res.status(200).json(users)
//   } catch (error) {
//     res.status(200).json({ error: error.message })
//   }
// }
import { getByCriteria } from '#/service/User/getByCriteria/getByCriteria'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    if (req.method !== 'GET') throw new Error('Method should be GET')

    const { email } = req.query

    const criteria = { email }

    // @ts-ignore
    const resp = await getByCriteria(criteria)

    res.status(200).json(resp)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
