/**
 * @param {Object} param0
 * @param {string} param0.code
 * @param {string} param0.email
 */
export const enterCodeService = async ({ code, email }) => {
  /** @type {RequestInit} */
  const options = {
    method: 'POST',
    body: JSON.stringify({ code, email }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const resp = await fetch('/api/login/enter-code', options)

  const { error, token } = await resp.json() ?? {}

  if (resp.status > 400) throw new Error(error ?? 'Error desconocido')

  return { token }
}
