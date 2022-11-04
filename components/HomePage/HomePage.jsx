import { getCookie } from '#/utils/cookies'
import { useRouter } from 'next/router'
import { routeDashboardPage } from '../DashboardPage/DashboardPage'
import { BurgerMenu } from '../global/BurgerMenu/BurgerMenu'
import { CategoryProductCard } from '../global/CategoryProductCard/CategoryProductCard'
import { CircleAvatar } from '../global/CircleAvatar/CircleAvatar'
import { PlaceholderImage } from '../global/icons/PlaceholderImage/PlaceholderImage'
import { Logo } from '../global/Logo/Logo'
import { routeEnterEmailPage } from '../LoginPage/EnterEmail/EnterEmailPage'
import style from './HomePage.module.css'
export const routeToHomePage = () => '/'

export const HomePage = () => {
  const router = useRouter()

  const onClickHandler = () => {
    const token = getCookie('token')
    if (!token) return router.push(routeEnterEmailPage())
    return router.push(routeDashboardPage())
  }

  return (
    <div className={style.mainBox} >
      <header className={style.header}>
        <BurgerMenu />
        <CircleAvatar onClick={onClickHandler} />
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Logo size='m' />
        <h1 className={style.name} >SOROPA</h1>
      </div>

      <h2 className={style.textNewCollection}>Nueva Colección</h2>

      <div className={style.rowNewCollection}>
        <PlaceholderImage size='m' data-testid='new-collection-image' />
        <PlaceholderImage size='m' data-testid='new-collection-image' />
      </div>

      <div className={style.rowCategories}>
        <CategoryProductCard title='Mujer' />
        <CategoryProductCard title='Hombre' />
        <CategoryProductCard title='Marcas' />
        <CategoryProductCard title='Rebajas' />
      </div>
    </div>
  )
}
