import { getCookie } from '#/utils/cookies'
import { useEffectProtectRoute } from '#/utils/hooks/useEffectProtectRoute'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { routeDashboardPage } from '../DashboardPage/DashboardPage'
import { BurgerMenu } from '../global/BurgerMenu/BurgerMenu'
import { CategoryProductCard } from '../global/CategoryProductCard/CategoryProductCard'
import { CircleAvatar } from '../global/CircleAvatar/CircleAvatar'
import { PlaceholderImage } from '../global/icons/PlaceholderImage/PlaceholderImage'
import { Loading } from '../global/Loading/Loading'
import { Logo } from '../global/Logo/Logo'
import { routeToListOfProductByCategory } from '../ListOfProductByCategoryPage/ListOfProductByCategoryPage'
import { routeEnterEmailPage } from '../LoginPage/EnterEmail/EnterEmailPage'
import style from './HomePage.module.css'

export const routeToHomePage = () => '/home'

export const HomePage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffectProtectRoute()

  const onClickHandler = async () => {
    setIsLoading(true)
    try {
      const token = getCookie('token')
      if (!token) return await router.push(routeEnterEmailPage())

      return router.push(routeDashboardPage())
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <div className={style.mainBox} >

      <Loading canShow={isLoading}/>

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
        <Link href={routeToListOfProductByCategory('new-collection')}>
          <a><PlaceholderImage size='m' data-testid='new-collection-image' style={{ borderRadius: '4px' }} /></a>
        </Link>

        <Link href={routeToListOfProductByCategory('new-collection')}>
          <a><PlaceholderImage size='m' data-testid='new-collection-image' style={{ borderRadius: '4px' }} /></a>
        </Link>
      </div>

      <div className={style.rowCategories}>
        <Link href={routeToListOfProductByCategory('mujer')}>
          <a ><CategoryProductCard title='Mujer' /></a>
        </Link>

        <Link href={routeToListOfProductByCategory('hombre')}>
          <a ><CategoryProductCard title='Hombre' /></a>
        </Link>

        <Link href={routeToListOfProductByCategory('marcas')}>
          <a ><CategoryProductCard title='Marcas' /></a>
        </Link>

        <Link href={routeToListOfProductByCategory('rebajas')}>
          <a ><CategoryProductCard title='Rebajas' /></a>
        </Link>

      </div>
    </div>
  )
}
