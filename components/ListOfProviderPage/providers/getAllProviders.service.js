/**
 * @returns {Promise<import("./types").RespGetAllUsers>}
 */
export const getAllProvidersService = async () => {
  /** @return {RequestInit} */
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const url = new URL(`${location.origin}/api/user/get-by-criteria`, window.location.href)
  url.searchParams.set('rol', 'provider')

  const resp = await fetch(url, config)
  const json = await resp.json()

  if (resp.status >= 400) throw new Error(json.error)

  return json
}
