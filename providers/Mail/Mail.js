// @ts-check
import { createTransport } from 'nodemailer'

/** @param {import('./types').SendMailProps} props */
export const sendMail = async (props) => {
  const { email, message, subject = 'No responder a este email' } = props

  try {
    const transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'automail.noresponder@gmail.com',
        pass: 'puhhfdrqhhefcjwj'
      }
    })

    const isSend = await transporter.verify()

    transporter.sendMail({
      from: 'automail.noresponder@gmail.com',
      to: email,
      html: message,
      subject
    })

    return isSend
  } catch (error) {
    console.log('🚀 ~ Error Email: Mail.js ~ line 30 ~ sendMail ~ error', error.message)
    return false
  }
}
