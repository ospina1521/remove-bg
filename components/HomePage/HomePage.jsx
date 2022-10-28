import { BurgerMenu } from '../global/BurgerMenu/BurgerMenu'
import { CategoryProductCard } from '../global/CategoryProductCard/CategoryProductCard'
import { CircularAvatar } from '../global/CircularAvatar/CircularAvatar'
import { PlaceholderImage } from '../global/icons/PlaceholderImage/PlaceholderImage'
import { Logo } from '../global/Logo/Logo'
import style from './HomePage.module.css'
export const routeToHomePage = () => '/'

export const HomePage = () => {
  return (
    <div className={style.paddingButton} >
      <header className={style.header}>
        <BurgerMenu />
        <CircularAvatar />
      </header>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Logo />
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
