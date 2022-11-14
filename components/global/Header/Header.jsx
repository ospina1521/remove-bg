import { useRouter } from 'next/router'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { BackArrowIcon } from '../icons/BackArrow/BackArrow'
import { Logo } from '../Logo/Logo'
import style from './Header.module.css'

/**
 * @param {Object} props
 * @param {Object} [props.arrowBackEnable]
 * @param {string} [props.title]
 * @param {boolean} [props.burgerMenuEnable]
 */
export const Header = (props) => {
  const { arrowBackEnable = true, burgerMenuEnable = false, title = 'PANEL' } = props

  const router = useRouter()
  return (
    <header className={style.header}>
      {arrowBackEnable && <BackArrowIcon onClick={() => router.back()} />}
      {burgerMenuEnable && <BurgerMenu />}
      <p>{title}</p>
      <span><Logo /></span>
    </header>
  )
}
