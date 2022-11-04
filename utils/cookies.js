/**
 * @param {Object} param0
 * @param {string} param0.key
 * @param {any} param0.value
 * @param {number} param0.days
 */
export function setCookie ({ key, value, days }) {
  if (typeof window === 'undefined') return

  if (!days) throw new Error('setCookie - days param is required')
  if (!key) throw new Error('setCookie - key param is required')
  if (!value) throw new Error('setCookie - value param is required')

  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))

  const expires = '; expires=' + date.toUTCString()
  document.cookie = key + '=' + JSON.stringify(value) + expires + '; path=/'
}

/**  @param {string} key */
export function getCookie (key) {
  try {
    if (typeof window === 'undefined') return
    if (!key) throw new Error('key param is required')

    const ca = document.cookie.split(';')

    const [, value] = ca
      .find(e => e.trim().split('=')[0] === key)
      ?.split('=') ?? []

    return JSON.parse(value)
  } catch (error) {
    console.error('🚀 ~ Parser Error: cookies.js ~ line 36 ~ getCookie ~ error: ', '"Cookie don\'t exist"')
  }
}
