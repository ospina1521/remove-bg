import { BurgerMenu } from '../global/BurgerMenu/BurgerMenu'
import { CircleAvatarLarge } from '../global/CircleAvatar/CircleAvatarLarge'
import { Logo } from '../global/Logo/Logo'
import style from './Login.module.css'
export const routeEnterEmailPage = () => '/login/email'

export const EnterEmailPage = () => {
  return (
    <div className={style.mainBox}>
      <header className={style.header} >
        <BurgerMenu/>
        <Logo />
      </header>

      <CircleAvatarLarge className={style.circleAvatarLarge} />

      <input type="email" className={style.input} placeholder='ejemplo@gmail.com' />

      <button type='submit' className={style.button} >Entrar</button>
    </div>
  )
}
