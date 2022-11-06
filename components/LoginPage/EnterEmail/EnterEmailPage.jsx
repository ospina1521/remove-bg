import { Button } from '#/components/global/Button/Button'
import { Header } from '#/components/global/Header/Header'
import { Loading } from '#/components/global/Loading/Loading'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CircleAvatarLarge } from '../../global/CircleAvatar/CircleAvatarLarge'
import { routeEnterCodePage } from '../EnterCode/EnterCodePage'
import style from '../Login.module.css'
import { enterEmailService } from './provider/enterEmail.front.service'
export const routeEnterEmailPage = () => '/login/email'

export const EnterEmailPage = () => {
  const route = useRouter()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  /** @param { import('react').FormEvent<HTMLFormElement | HTMLButtonElement>} e */
  const submitHandler = async (e) => {
    setIsLoading(true)

    e?.preventDefault()

    try {
      route.push(routeEnterCodePage(email))
      await enterEmailService(email)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error('🚀 ~ Error Service: EnterEmailPage.jsx ~ line 24 ~ submitHandler ~ error', error.message)
    }
  }

  return (
    <div className={style.mainBox}>
      {isLoading && <Loading />}

      <Header />

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

        <Button text='Entrar' type='submit' />
      </form>

    </div>
  )
}
