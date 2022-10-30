import { useRouter } from 'next/router'
import { useState } from 'react'
import { CircleAvatarLarge } from '../global/CircleAvatar/CircleAvatarLarge'
import { BackArrowIcon } from '../global/icons/BackArrow/BackArrow'
import { Logo } from '../global/Logo/Logo'
import style from './Login.module.css'
export const routeEnterCodePage = () => '/login/code'

export const EnterCodePage = () => {
  const route = useRouter()
  const [code, setCode] = useState('')

  /**
   * @param { import('react').FormEvent<HTMLFormElement>} [e]
   */
  const submitHandler = (e) => {
    e?.preventDefault()
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

      <form onSubmit={(e) => submitHandler(e)} >
        <input
          required
          type="tel"
          className={style.input}
          placeholder='000 000'
          pattern='(\w| ){7}'
          onChange={(e) => {
            setCode(e.currentTarget.value)
          }}
        />

        <button type='submit' className={style.button}>Entrar</button>
      </form>

    </div>
  )
}
