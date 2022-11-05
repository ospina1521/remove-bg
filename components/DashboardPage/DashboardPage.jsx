import { BurgerMenu } from '#/components/global/BurgerMenu/BurgerMenu'
import { Logo } from '#/components/global/Logo/Logo'
import { FillCircleAvatar } from '../global/CircleAvatar/FillCircleAvatar'
import { BellIcon } from '../global/icons/BellIcon'
import { ChartIcon } from '../global/icons/ChartIcon/ChartIcon'
import { NotificationIcon } from '../global/icons/NotificationIcon/NotificationIcon'
import { OutLineButton } from '../global/OutLineButton/OutLineButton'
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

          <OutLineButton text='MI PERFIL'/>
        </div>

        <div className={style.column} >
          <OutLineButton icon={<NotificationIcon/>} text='GESTIÓN DE PROVEEDORES'/>
          <OutLineButton icon={<ChartIcon/>} text='NUEVOS PRODUCTOS'/>
          <OutLineButton icon={<BellIcon/>} text='ANÁLISIS DE MÉTRICAS'/>
        </div>
      </div>
    </div>
  )
}
