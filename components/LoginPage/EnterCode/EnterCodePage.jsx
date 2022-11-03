import { useRouter } from 'next/router'
import { useState } from 'react'
import { CircleAvatarLarge } from '../../global/CircleAvatar/CircleAvatarLarge'
import { BackArrowIcon } from '../../global/icons/BackArrow/BackArrow'
import { Logo } from '../../global/Logo/Logo'
import style from '../Login.module.css'
import { enterCodeService } from './provider/enterCode.front.service'
import { setCookie } from '#/utils/cookies'
import { routeDashboardPage } from '#/components/Dashboard/Dashboard'

/** @param {string} email */
export const routeEnterCodePage = (email) => `/login/code?email=${email}`

export const EnterCodePage = () => {
  const route = useRouter()
  const { email } = route?.query ?? {}
  const [code, setCode] = useState('')

  /** @param { import('react').FormEvent<HTMLFormElement>} e */
  const submitHandler = async (e) => {
    e?.preventDefault()

    try {
      if (typeof email !== 'string') throw new Error('Email to be string')

      const { token } = await enterCodeService({ code, email })

      setCookie({ key: 'token', value: token, days: 10000 })
      route.push(routeDashboardPage())
    } catch (error) {
      console.error('🚀 ~ Error Service: EnterCodePage.jsx ~ line 26 ~ submitHandler ~ error', error.message)
    }
  }

  return (
    <div className={style.mainBox}>
      <header className={style.header}>
        <BackArrowIcon onClick={() => route.back()} />
        <Logo />
      </header>

      <CircleAvatarLarge className={style.circleAvatarLarge} />

      <form onSubmit={submitHandler}>
        <input
          required
          type="tel"
          className={style.input}
          placeholder="000 000"
          pattern="(\w| ){7}"
          value={code}
          onChange={(e) => {
            const { value } = e.currentTarget

            if (value.length >= 8) return

            if (value.length === 3 && value.length > code.length) return setCode(value + ' ')

            setCode(value)
          }}
        />

        <button type="submit" className={style.button}>
          Entrar
        </button>
      </form>
    </div>
  )
}
