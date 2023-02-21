/** @param {import('./types').ReqGetProduct} props */
export const getProductService = async (props) => {
  const { category, provider } = props ?? {}

  /** @type {RequestInit} */
  const config = {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  }

  const url = new URL(location.origin + '/api/product/get-by-criteria')
  // @ts-ignore
  url.search = new URLSearchParams({ category, provider }).toString()

  const resp = await fetch(url, config)

  const json = await resp.json()

  if (resp.status >= 400) throw new Error(`Ocurrió un error al hacer la petición: ${json.error}`)

  return json.data
}
