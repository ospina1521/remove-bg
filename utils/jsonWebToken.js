import jwt from 'jsonwebtoken'

/**
 * @typedef {Object} Payload
 * @prop {import('#/types').UserRol} rol
 * @prop {string} email
 */

/**
 * @param {Payload} payload
 */
export const getToken = (payload) => {
  // @ts-ignore
  return jwt.sign(payload, process.env.JWT_SIGN)
}

/**
 * @param {string} token
 */
export const verifyToken = (token) => {
  // @ts-ignore
  return jwt.verify(token, process.env.JWT_SIGN)
}

/**
 * @param {string} token
 * @return {Payload}
 * */
export const decodeToken = (token) => {
  // @ts-ignore
  return jwt.decode(token)
}
