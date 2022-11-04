import { BurgerMenu } from '#/components/global/BurgerMenu/BurgerMenu'
import { Logo } from '#/components/global/Logo/Logo'
import { FillCircleAvatar } from '../global/CircleAvatar/FillCircleAvatar'
import { BellIcon } from '../global/icons/BellIcon'
import { ChartIcon } from '../global/icons/ChartIcon/ChartIcon'
import { NotificationIcon } from '../global/icons/NotificationIcon/NotificationIcon'
import style from './DashboardPage.module.css'

export const routeDashboardPage = () => '/dashboard'

export function DashboardPage () {
  return (
    <div className='mainBox'>

      <div className={style.header}>
        <BurgerMenu />
        <Logo />
      </div>

      <div className={style.body}>

        <div className={style.row}>
          <FillCircleAvatar />

          <button className={style.button}>MI PERFIL</button>
        </div>

        <div className={style.column} >
          <button className={style.button}> <NotificationIcon/> GESTIÓN DE PROVEEDORES</button>
          <button className={style.button}> <ChartIcon/> NUEVOS PRODUCTOS</button>
          <button className={style.button}> <BellIcon/> ANÁLISIS DE MÉTRICAS</button>
        </div>
      </div>
    </div>
  )
}
