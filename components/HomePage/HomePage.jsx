import { BurgerMenu } from '../global/BurgerMenu/BurgerMenu'
import { CircularAvatar } from '../global/CircularAvatar/CircularAvatar'
import { Logo } from '../global/Logo/Logo'

export const routeToHomePage = () => '/'

export const HomePage = () => {
  return (
    <div>
      <BurgerMenu />
      <Logo />
      <CircularAvatar />

      <h2>Nueva Colección</h2>

      <img src="" alt="new collection" data-testid='new-collection-image' />
      <img src="" alt="new collection" data-testid='new-collection-image' />

      <h3>Mujer</h3>
      <h3>Hombre</h3>
      <h3>Marcas</h3>
      <h3>Rebajas</h3>

      <img src="" alt="" data-testid='category-products-image'/>
      <img src="" alt="" data-testid='category-products-image'/>
      <img src="" alt="" data-testid='category-products-image'/>
      <img src="" alt="" data-testid='category-products-image'/>
    </div>
  )
}
