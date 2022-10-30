import { sendMail } from '#/providers/Mail/Mail'
import { generateCode7D } from '#/utils/generateCode7D'
import { validate } from 'email-validator'
import memoryCache from 'memory-cache'

/**
 * @param {string} email
 */
export const enterEmail = async (email) => {
  if (!email) throw new Error('Email parameter is required')

  const isEmailValid = validate(email)

  if (!isEmailValid) throw new Error('Email parameter is not valid')

  const code = generateCode7D()

  const saveCache = JSON.stringify({
    code,
    cacheEmail: email
  })

  memoryCache.put(
    'codeNumberWithFormat',
    saveCache,
    5 /** 5 min */ * 60 /** 1 min */ * 1000 /** 1 seg */
  )

  const message = `pega este código <b>${code}</b> de verificación.`

  sendMail({
    message,
    email: 'hbiaser132@gmail.com',
    subject: `${code} - código de verificación de SOROPA`
  })
}
