import memoryCache from 'memory-cache'
import { validate as regexValidate } from '#/utils/validate'
import { UserRepositorySupaBase } from '#/repository/UserRepositorySupaBase/UserRepositorySupaBase'
import { getToken } from '#/utils/jsonWebToken'
import { validate as emailValidator } from 'email-validator'

/**
 * @param {Object} param0
 * @param {string} param0.code
 * @param {string} param0.email
 * @returns
 */
export const enterCodeService = async ({ code, email }) => {
  if (!code) throw new Error('Code parameter is required')
  if (!email) throw new Error('Email parameter is required')

  const verifyEmail = emailValidator(email)
  if (!verifyEmail) throw new Error('Email parameter is not valid')

  const verifyCode = regexValidate({
    regExp: /\d{3}\s{1}\d{3}/,
    stringToValidate: code
  })
  if (!verifyCode) throw new Error('Code parameter is not valid')

  const cacheCode = memoryCache.get(`codeNumberWithFormat${email}`)

  if (code !== cacheCode) throw new Error('Code is diff to cacheCode')

  const user = await new UserRepositorySupaBase().getByEmail(email)

  if (!user) throw new Error("User from email don't exist")

  const token = getToken({
    email,
    rol: user.rol
  })

  return token
}
