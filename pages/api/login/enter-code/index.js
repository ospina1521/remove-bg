import memoryCache from 'memory-cache'
import { validate as regexValidate } from '#/utils/validate'
import { UserRepositorySupaBase } from '#/repository/UserRepositorySupaBase/UserRepositorySupaBase'
import { getToken } from '#/utils/jsonWebToken'
import { validate as emailValidator } from 'email-validator'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function EnterCodeController (req, res) {
  const { code, email } = req.body || {}

  try {
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

    res.status(200).json({
      token,
      error: null
    })

    memoryCache.del(`codeNumberWithFormat${email}`)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
