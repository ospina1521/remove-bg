import { useRouter } from 'next/router'
import { useState } from 'react'
import { CircleAvatarLarge } from '../global/CircleAvatar/CircleAvatarLarge'
import { BackArrowIcon } from '../global/icons/BackArrow/BackArrow'
import { Logo } from '../global/Logo/Logo'
import { routeEnterCodePage } from './EnterCodePage'
import style from './Login.module.css'
import { enterEmailService } from './provider/enterEmail.service'
export const routeEnterEmailPage = () => '/login/email'

export const EnterEmailPage = () => {
  const route = useRouter()
  const [email, setEmail] = useState('')

  /**
   * @param { import('react').FormEvent<HTMLFormElement | HTMLButtonElement>} [e]
   */
  const submitHandler = (e) => {
    e?.preventDefault()

    enterEmailService(email)
    route.push(routeEnterCodePage())
  }
  return (
    <div className={style.mainBox}>
      <header className={style.header} >
        <BackArrowIcon
          onClick={() => route.back()}
        />
        <Logo />
      </header>

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

        <button type='submit' className={style.button}>Entrar</button>
      </form>

    </div>
  )
}
