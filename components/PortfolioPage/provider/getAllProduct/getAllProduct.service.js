/**
 * @returns {Promise<import("./types").RespGetAllProductsService>}
 */
export const getAllProductsService = async () => {
  /** @type {RequestInit} */
  const config = {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  }

  const url = new URL(location.origin + '/api/product/get-by-criteria')

  const resp = await fetch(url, config)

  const json = await resp.json()

  if (resp.status >= 400) throw new Error(`Ocurrió un error al hacer la petición: ${json.error}`)

  return json
}
