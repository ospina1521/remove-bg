import { BurgerMenu } from '../global/BurgerMenu/BurgerMenu'
import { CircleAvatar } from '../global/CircularAvatar/CircularAvatar'
import { Logo } from '../global/Logo/Logo'
import style from './Login.module.css'
export const routeEnterEmailPage = () => '/login/email'

export const EnterEmailPage = () => {
  return (
    <div className={style.mainBox}>
      <header>
        <BurgerMenu/>
        <Logo />
      </header>

      <CircleAvatar />

      <input type="email" />
    </div>
  )
}
