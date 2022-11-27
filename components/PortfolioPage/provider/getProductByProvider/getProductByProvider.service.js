/**
 * @param {import('./types').Props} props
 * @return {Promise<Array<import('./types').Product>>}
 * */
export const getProductByProviderService = async (props) => {
  const { provider } = props

  /** @type {RequestInit} */
  const config = {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  }

  const url = new URL(location.origin + '/api/product/get-by-criteria')
  url.searchParams.set('provider', provider.toString())

  const resp = await fetch(url, config)

  /** @type {import('./types').RespGetProductByIdService} */
  const json = await resp.json()

  if (resp.status >= 400) throw new Error(`Ocurrió un error al hacer la petición: ${json.error}`)

  return json.data
}
