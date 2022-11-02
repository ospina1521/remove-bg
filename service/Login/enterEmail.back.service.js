import { credentials } from '#/credentials'
import { sendMail } from '#/providers/Mail/Mail'
import { UserRepositorySupaBase } from '#/repository/UserRepositorySupaBase/UserRepositorySupaBase'
import { generateCode7D } from '#/utils/generateCode7D'
import { validate } from 'email-validator'
import memoryCache from 'memory-cache'

/**
 * @param {string} email
 */
export const enterEmailBackService = async (email) => {
  if (!email) throw new Error('Email parameter is required')

  const isEmailValid = validate(email)

  if (!isEmailValid) throw new Error('Email parameter is not valid')

  const user = await new UserRepositorySupaBase().getByEmail(email)

  if (!user) throw new Error("User from email don't exist")

  const code = generateCode7D()

  memoryCache.put(
    `codeNumberWithFormat${email}`,
    code,
    5 /** 5 min */ * 60 /** 1 min */ * 1000 /** 1 seg */
  )

  const message = `pega este código <b>${code}</b> de verificación.`

  await sendMail({
    email,
    message,
    subject: `${code} - código de verificación de SOROPA`
  })

  // El código solo debe ser visible en modo desarrollo y en modo de pruebas
  // con la finalidad de que los test unitarios pasen exitosamente
  return credentials.isDev ? code : null
}
