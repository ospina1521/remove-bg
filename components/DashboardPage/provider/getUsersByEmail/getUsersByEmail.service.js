/** @param {import("./types").IGetAllUsersService}  props */
export const getGetByEmailService = async (props) => {
  const { email } = props

  /** @return {RequestInit} */
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const url = new URL(`${location.origin}/api/user/get-by-criteria`)
  url.search = new URLSearchParams({ email }).toString()

  const resp = await fetch(url, config)
  /** @type {import("./types").IRespGetAllUsersService} */
  const json = await resp.json()

  if (resp.status >= 400) throw new Error(json.error)

  return json.data[0]
}
