
/** @param {import("./types").ReqPostCreateProductService} props */
export const postCreateProductService = async (props) => {
  console.log('🚀 ~ file: postCreateProduct.service.js ~ line 4 ~ postCreateProductService ~ props', props)
  /** @type {RequestInit} */
  const config = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(props)
  }

  const url = '/api/product'

  const resp = await fetch(url, config)

  const json = await resp.json()

  if (resp.status >= 400) throw new Error(`Ocurrió un error al hacer la petición: ${json.error}`)

  return json
}
