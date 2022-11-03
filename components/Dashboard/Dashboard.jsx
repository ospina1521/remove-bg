import { BurgerMenu } from '#/components/global/BurgerMenu/BurgerMenu'
import { Logo } from '#/components/global/Logo/Logo'
export const routeDashboardPage = () => '/dashboard'

export function DashboardPage () {
  return (
    <div className='mainBox'>
      <Logo />
      <BurgerMenu />
      <img src="." alt="user-image" />

      <button>MI PERFIL</button>
      <button>GESTIÓN DE PROVEEDORES</button>
      <button>NUEVOS PRODUCTOS</button>
      <button>ANÁLISIS DE MÉTRICAS</button>
    </div>
  )
}
