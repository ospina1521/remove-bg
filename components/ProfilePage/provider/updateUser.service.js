/** @param {import("./types").IUserService} props */
export const updateUserService = async (props) => {
  const { email = '', company = '', name = '', rol = '', nit = '', phone = '' } = props ?? {}
  console.log('🚀 ~ file: updateUser.service.js ~ line 4 ~ updateUserService ~ props', props)
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
