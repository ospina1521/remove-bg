/**
 * @param {Object} param0
 * @param {string} param0.key
 * @param {any} param0.value
 * @param {number} param0.days
 * @param {string | undefined | null} [param0.context]
 */
export function setCookie ({ key, value, days, context }) {
  if (days === null || days === undefined) throw new Error('setCookie - days param is required')
  if (key === null || key === undefined) throw new Error('setCookie - key param is required')
  if (value === null || value === undefined) throw new Error('setCookie - value param is required')
  if ((context === null || context === undefined) && !window) throw new Error('setCookie - context param is required in server side')

  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))

  const expires = '; expires=' + date.toUTCString()

  let cookie = context ?? document?.cookie ?? ''
  cookie = key + '=' + JSON.stringify(value) + expires + '; path=/'
  if (typeof window !== 'undefined') document.cookie = cookie

  return cookie
}

/**
 * @param {string} key
 * @param {string} [context]
 * */
export function getCookie (key, context) {
  try {
    const cookie = context ??
    (function () {
      if (typeof window.document !== 'undefined') return document?.cookie
    })()

    if (!key) throw new Error('key param is required')

    const ca = cookie?.split(';') ?? []

    const [, value] = ca
      .find(e => e.trim().split('=')[0] === key)
      ?.split('=') ?? []

    return JSON.parse(value)
  } catch (error) {
    console.error('🚀 ~ Parser Error: cookies.js ~ line 36 ~ getCookie ~ error: ', error.message)
  }
}
