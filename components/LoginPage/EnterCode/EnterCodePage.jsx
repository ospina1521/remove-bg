import { useRouter } from 'next/router'
import { useState } from 'react'
import { CircleAvatarLarge } from '../../global/CircleAvatar/CircleAvatarLarge'
import style from '../Login.module.css'
import { enterCodeService } from './provider/enterCode.front.service'
import { setCookie } from '#/utils/cookies'
import { routeDashboardPage } from '#/components/DashboardPage/DashboardPage'
import { Header } from '#/components/global/Header/Header'
import { Loading } from '#/components/global/Loading/Loading'
import { delay } from '#/utils/delay'

/** @param {string} email */
export const routeEnterCodePage = (email) => `/login/code?email=${email}`

export const EnterCodePage = () => {
  const route = useRouter()
  const { email } = route?.query ?? {}
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  /** @param { import('react').FormEvent<HTMLFormElement>} e */
  const submitHandler = async (e) => {
    setIsLoading(true)

    e?.preventDefault()

    try {
      if (typeof email !== 'string') throw new Error('Email to be string')

      const { token } = await enterCodeService({ code, email })

      setCookie({ key: 'token', value: token, days: 10000 })

      route.push(routeDashboardPage())
      await delay(1000)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error('🚀 ~ Error Service: EnterCodePage.jsx ~ line 26 ~ submitHandler ~ error', error.message)
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
          Verificar
        </button>
      </form>
    </div>
  )
}
