/** @param {import('./types').UserI} props */
export const validateUser = (props) => {
  const { name, rol, id } = props
  if (!name) throw new Error('User.name is required')
  if (!rol) throw new Error('User.rol is required')
  if (!id) throw new Error('User.id is required')
  return props
}
