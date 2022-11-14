
/** @param {import("./types").CreateUserProps} [props] */
export const createUser = async (props) => {
  if (!props) throw new Error('Parameters is required')

  return 'hola mundo'
}
