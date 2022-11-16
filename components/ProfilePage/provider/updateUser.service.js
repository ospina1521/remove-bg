/**
 * @param {Object} props
 * @param {string} props.email
 * @param {string} props.name
 * @param {string} props.nit
 * @param {string} props.phone
 * @param {string} props.company
 * @param {import("#/types").UserRol} props.rol
 * @returns
 */
export const updateUserService = async (props) => {
  const { email = '', company = '', name = '', rol = '', nit = '', phone = '' } = props ?? {}
  if (!email || !company || !name || !rol || !nit || !phone) throw new Error(`All props is required: ${JSON.stringify({ email, company, name, rol, nit, phone }, null, 2)}`)

  /** @return {RequestInit} */
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      rol,
      name,
      email
    })
  }

  const resp = await fetch('/api/user/update', config)
  const json = await resp.json()

  if (resp.status >= 400) throw new Error(json.error)

  return json
}
