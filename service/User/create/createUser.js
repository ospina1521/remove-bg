import { validateUser } from '#/models/User/User'

/** @param {import("./types").CreateUserProps} props */
export const createUser = (props) => {
  if (!props) throw new Error('Parameters is not provided')

  const user = validateUser(props.user)

  if (user.rol !== 'Super Admin') throw new Error('User rol is not Super Admin')

  return 'hola mundo'
}
