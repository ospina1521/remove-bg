import { Button } from '#/components/global/Button/Button'
import { Header } from '#/components/global/Header/Header'
import { Loading } from '#/components/global/Loading/Loading'
import { routeToHomePage } from '#/components/HomePage/HomePage'
import { setCookie } from '#/utils/cookies'
import { Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CircleAvatarLarge } from '../../global/CircleAvatar/CircleAvatarLarge'
import style from '../Login.module.css'
import { enterEmailService } from './provider/enterEmail.front.service'
export const routeEnterEmailPage = () => '/login/email'

export const EnterEmailPage = () => {
  const route = useRouter()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [snackBar, setSnackBar] = useState({
    canShow: false,
    message: ''
  })

  /** @param { import('react').FormEvent<HTMLFormElement | HTMLButtonElement>} e */
  const submitHandler = async (e) => {
    setIsLoading(true)

    e?.preventDefault()

    try {
      const { token } = await enterEmailService(email)

      setCookie({ key: 'token', value: token, days: 10000 })

      // TODO: redirect to home
      await route.push(routeToHomePage())
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setSnackBar({
        canShow: true,
        message: 'Correo no registrado'
      })
      console.error('🚀 ~ Error Service: EnterEmailPage.jsx ~ line 24 ~ submitHandler ~ error', error.message)
    }
  }

  return (
    <div className={style.mainBox}>
      <Loading canShow={isLoading} />

      <Snackbar
        open={snackBar.canShow}
        autoHideDuration={6000}
        onClose={() => setSnackBar(s => ({ ...s, canShow: false }))}
        message={snackBar.message}
      />

      <Header arrowBackEnable={false} title="Login" />

      <CircleAvatarLarge className={style.circleAvatarLarge} />

      <form onSubmit={submitHandler}>
        <input
          required
          type="email"
          className={style.input}
          placeholder='ejemplo@gmail.com'
          onChange={(e) => {
            setEmail(e.currentTarget.value)
          }}
        />

        <Button text='Enviar' type='submit' />
      </form>

    </div>
  )
}
