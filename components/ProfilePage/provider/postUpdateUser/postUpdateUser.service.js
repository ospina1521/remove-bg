/** @param {import("../postCreateUser/types").IUserService} props */
export const updateUserService = async (props) => {
  const { email = '', company: nameCompany = '', name = '', rol = '', nit = '', phone = '', urlPhoto = '' } = props ?? {}
  console.log('🚀 ~ file: updateUser.service.js ~ line 4 ~ updateUserService ~ props', props)
  if (!email) throw new Error('Email is required')

  /** @return {RequestInit} */
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nameCompany,
      name,
      rol,
      nit,
      phone,
      urlPhoto
    })
  }

  const params = new URLSearchParams({ email })

  const url = '/api/user/update?' + params.toString()

  const resp = await fetch(url, config)
  const json = await resp.json()

  if (resp.status >= 400) throw new Error(json.error)

  return json
}
