import jwt from 'jsonwebtoken'

/**
 * @param {Object} payload
 * @param {string} payload.rol
 * @param {string} payload.email
 */
export const getToken = (payload) => {
  // @ts-ignore
  return jwt.sign(payload, process.env.JWT_SIGN)
}
