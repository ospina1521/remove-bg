import { UserRepositorySupaBase } from '#/repository/UserRepositorySupaBase/UserRepositorySupaBase'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  try {
    const userRepository = new UserRepositorySupaBase()

    const users = await userRepository.getAllUsers()

    res.status(200).json(users)
  } catch (error) {
    res.status(200).json({ error: error.message })
  }
}