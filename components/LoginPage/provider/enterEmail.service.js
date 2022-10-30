/**
 * @param {string} email
 */
export const enterEmailService = async (email) => {
  /** @type {RequestInit} */
  const options = {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const resp = await fetch('/api/login/enter-email', options)

  const body = await resp.json()

  if (resp.status > 400) throw new Error(body?.error ?? 'Error desconocido')
}
