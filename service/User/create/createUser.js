import { UserRepositorySupaBase } from '#/repository/UserRepositorySupaBase/UserRepositorySupaBase'

/** @param {import("./types").CreateUserProps} props */
export const createUser = async (props) => {
  if (!props) throw new Error('Parameters is required')

  const { email, name, rol } = props

  const userRepository = new UserRepositorySupaBase()

  const user = await userRepository.create({ email, name, rol })

  return user
}
