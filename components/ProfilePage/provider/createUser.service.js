/**
 * @param {Object} props
 * @param {string} props.email
 * @param {string} props.name
 * @param {import("#/types").UserRol} props.rol
 * @returns
 */
export const createUserService = async (props) => {
  const { email = '', name = '', rol = '' } = props ?? {}
  if (!email || !name || !rol) throw new Error(`All props is required: ${JSON.stringify({ email, name, rol }, null, 2)}`)

  /** @return {RequestInit} */
  const config = {
    method: 'POST',
    headers: {

      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      rol,
      name,
      email
    })

  }

  const resp = await fetch('/api/user/create', config)
  const json = await resp.json()

  if (resp.status >= 400) throw new Error(json.error)

  return json
}
