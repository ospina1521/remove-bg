import { useRouter } from 'next/router'
import { BackArrowIcon } from '../icons/BackArrow/BackArrow'
import { Logo } from '../Logo/Logo'
import style from './Header.module.css'

/**
 * @param {Object} props
 * @param {Object} [props.arrowBackEnable]
 */
export const Header = (props) => {
  const { arrowBackEnable = true } = props

  const router = useRouter()
  return (
    <header className={style.header}>
      <BackArrowIcon onClick={() => router.back()} />
      <span>{arrowBackEnable && <Logo />}</span>
    </header>
  )
}
