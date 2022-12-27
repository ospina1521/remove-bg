export const deleteProductByIdService = async (/** @type {string} */id) => {
  /** @type {RequestInit} */
  const config = {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' }
  }

  const url = new URL(location.origin + '/api/product/delete')
  url.search = new URLSearchParams({
    id: id.toString(),
    isVisible: 'false'
  }).toString()

  const resp = await fetch(url, config)

  const json = await resp.json()

  if (resp.status >= 400) throw new Error(`Ocurrió un error al hacer la petición: ${json.error}`)
}
