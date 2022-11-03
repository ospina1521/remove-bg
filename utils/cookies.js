/**
 * @param {Object} param0
 * @param {string} param0.key
 * @param {any} param0.value
 * @param {number} param0.days
 */
export function setCookie ({ key, value, days }) {
  if (typeof window === 'undefined') return

  if (!days) throw new Error('days param is required')
  if (!key) throw new Error('key param is required')
  if (!value) throw new Error('value param is required')

  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))

  const expires = '; expires=' + date.toUTCString()
  document.cookie = key + '=' + JSON.stringify(value) + expires + '; path=/'
}

/**  @param {string} key */
export function getCookie (key) {
  if (typeof window === 'undefined') return
  if (!key) throw new Error('key param is required')

  const ca = document.cookie.split(';')

  const [, value] = ca
    .find(e => e.trim().split('=')[0] === key)
    ?.split('=') ?? []

  return JSON.parse(value ?? "Cookie don't exist")
}
