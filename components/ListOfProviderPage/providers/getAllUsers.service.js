export const getAllUsersService = async () => {
  /** @return {RequestInit} */
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const resp = await fetch('/api/user/all-users', config)
  const json = await resp.json()

  if (resp.status >= 400) throw new Error(json.error)

  return json
}
