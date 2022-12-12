import { setCookie } from '#/utils/cookies'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FillCircleAvatar } from '../global/CircleAvatar/FillCircleAvatar'
import { Header } from '../global/Header/Header'
import { BellIcon } from '../global/icons/BellIcon'
import { CartIcon } from '../global/icons/CartIcon/CartIcon'
import { ChartIcon } from '../global/icons/ChartIcon/ChartIcon'
import { CloseSessionIcon } from '../global/icons/CloseSession/CloseSession'
import { NotificationIcon } from '../global/icons/NotificationIcon/NotificationIcon'
import { ProductIcon } from '../global/icons/ProductIcon'
import { OutLineButton } from '../global/OutLineButton/OutLineButton'
import { routeToListOfProviderPage } from '../ListOfProviderPage/ListOfProviderPage'
import { routeToPortfolioPage } from '../PortfolioPage/PortfolioPage'
import { routeToReadOnlyPortfolioPage } from '../PortfolioPage/ReadOnlyPortfolioPage'
import { routeProfilePage } from '../ProfilePage/ProfilePage'
import style from './DashboardPage.module.css'
import { useGetUsersByEmail } from './provider/getUsersByEmail/useGetUsersByEmail'

export const routeDashboardPage = () => '/dashboard'

/** @param  {import('#/utils/jsonWebToken').Payload} props */
export function DashboardPage (props) {
  const { rol, email } = props

  const router = useRouter()

  const { getUserByEmail, user } = useGetUsersByEmail()

  useEffect(() => {
    getUserByEmail({ email })
  }, [])

  const AdminOptions = () => {
    return (
      <div className={style.column} >
        <Link href={routeToListOfProviderPage()}>
          <a >
            <OutLineButton icon={<NotificationIcon/>} text='GESTIÓN DE PROVEEDORES'/>
          </a>
        </Link>

        <Link href={routeToReadOnlyPortfolioPage()}>
          <a >
            <OutLineButton icon={<ChartIcon/>} text='NUEVOS PRODUCTOS'/>
          </a>
        </Link>

        <OutLineButton icon={<BellIcon/>} text='ANÁLISIS DE MÉTRICAS'/>

        <OutLineButton
          text='CERRAR SESIÓN'
          icon={<CloseSessionIcon/>}
          onClick={() => {
            router.push('/')

            setCookie({
              days: 0,
              key: 'token',
              value: ''
            })
          }}
        />
      </div>
    )
  }

  const ProviderOptions = () => {
    return (
      <div className={style.column} >
        {/* TODO: change url */}
        <Link href={routeToPortfolioPage()}><a><OutLineButton icon={<CartIcon />} text='MI PORTAFOLIO'/></a></Link>

        <OutLineButton icon={<ProductIcon />} text='FICHA DE PRODUCTO'/>

        <OutLineButton
          text='CERRAR SESIÓN'
          icon={<CloseSessionIcon/>}
          onClick={() => {
            setCookie({
              days: 0,
              key: 'token',
              value: ''
            })

            router.push('/')
          }}
        />
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

          {user.properties?.urlPhoto
            ? <div className={style.img}>
              <img src={user.properties?.urlPhoto} alt="" className={style.img}/>
            </div>
            : <FillCircleAvatar />
          }

          <Link href={routeProfilePage({ email })}>
            <a style={{ width: '100%', marginTop: 'auto' }} ><OutLineButton text='MI PERFIL'/></a>
          </Link>
        </div>

        <Options />

      </div>
    </div>
  )
}
