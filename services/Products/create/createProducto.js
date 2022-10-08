import { sendMail } from '#/providers/Mail/Mail'

/** @param {import('./types').CreateProductProp} props */
export const createProduct = async (props) => {
  if (!props) throw new Error('Params is required')

  const b = await sendMail({
    email: 'hbiaser132@gmail.com',
    message: 'mensaje'
  })

  return b
}
