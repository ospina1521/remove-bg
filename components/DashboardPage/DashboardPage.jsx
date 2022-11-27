import Link from 'next/link'
import { FillCircleAvatar } from '../global/CircleAvatar/FillCircleAvatar'
import { Header } from '../global/Header/Header'
import { BellIcon } from '../global/icons/BellIcon'
import { CartIcon } from '../global/icons/CartIcon/CartIcon'
import { ChartIcon } from '../global/icons/ChartIcon/ChartIcon'
import { NotificationIcon } from '../global/icons/NotificationIcon/NotificationIcon'
import { ProductIcon } from '../global/icons/ProductIcon'
import { OutLineButton } from '../global/OutLineButton/OutLineButton'
import { routeToListOfProviderPage } from '../ListOfProviderPage/ListOfProviderPage'
import { routeToNewProductPage } from '../NewProductPage/NewProductPage'
import { routeToPortfolioPage } from '../PortfolioPage/PortfolioPage'
import { routeProfilePage } from '../ProfilePage/ProfilePage'
import style from './DashboardPage.module.css'

export const routeDashboardPage = () => '/dashboard'

/** @param  {import('#/utils/jsonWebToken').Payload} props */
export function DashboardPage (props) {
  const { rol } = props

  const AdminOptions = () => {
    return (
      <div className={style.column} >
        <Link href={routeToListOfProviderPage()}>
          <a >
            <OutLineButton icon={<NotificationIcon/>} text='GESTIÓN DE PROVEEDORES'/>
          </a>
        </Link>

        <OutLineButton icon={<ChartIcon/>} text='NUEVOS PRODUCTOS'/>
        <OutLineButton icon={<BellIcon/>} text='ANÁLISIS DE MÉTRICAS'/>
      </div>
    )
  }

  const ProviderOptions = () => {
    return (
      <div className={style.column} >
        {/* TODO: change url */}
        <Link href={
          // routeToNewProductPage()
          routeToPortfolioPage()
        }
        ><a><OutLineButton icon={<CartIcon />} text='MI PORTAFOLIO'/></a></Link>
        <OutLineButton icon={<ProductIcon />} text='FICHA DE PRODUCTO'/>
      </div>
    )
  }

  const Options = () => {
    if (rol === 'admin') return <AdminOptions />
    if (rol === 'provider') return <ProviderOptions />
    return <h1>Opciones no definidas para el rol</h1>
  }

  return (
    <div className='mainBox'>

      <Header burgerMenuEnable={true} arrowBackEnable={false} />

      <div className={style.body}>

        <div className={style.row}>
          <FillCircleAvatar />

          <Link href={routeProfilePage()}>
            <a style={{ width: '100%', marginTop: 'auto' }} ><OutLineButton text='MI PERFIL'/></a>
          </Link>
        </div>

        <Options />
      </div>
    </div>
  )
}
