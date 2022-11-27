
/**
 * @param {string} id
 * @param {import("./types").ReqPutUpdateProductService} props
 * */
export const putUpdateProductService = async (id, props) => {
  /** @type {RequestInit} */
  const config = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(props)
  }

  const url = `/api/product/update?id=${id}`

  const resp = await fetch(url, config)

  const json = await resp.json()

  if (resp.status >= 400) throw new Error(`Ocurrió un error al hacer la petición: ${json.error}`)

  return json
}
