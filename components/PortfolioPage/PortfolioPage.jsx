import { getCookie } from '#/utils/cookies'
import { decodeToken } from '#/utils/jsonWebToken'
import Link from 'next/link'
import { FillCircleAvatar } from '../global/CircleAvatar/FillCircleAvatar'
import { FloatingActionButton } from '../global/FloatingActionButton/FloatingActionButton'
import { Header } from '../global/Header/Header'
import { AddIcon } from '../global/icons/AddIcon/AddIcon'
import { routeToNewProductPage } from '../NewProductPage/NewProductPage'
import style from './PortfolioPage.module.css'

export const routeToPortfolioPage = () => '/portfolio'

export const PortfolioPage = () => {
  const token = getCookie('token')
  const { rol } = decodeToken(token)

  return (
    <>
      <Header arrowBackEnable={true} burgerMenuEnable={false} title='CATÁLOGO DE PRODUCTOS'/>

      <div className="body">
        <FillCircleAvatar />
      </div>

      {
        rol !== 'provider'
          ? null
          : <Link href={routeToNewProductPage()}>
            <a className={style.positionFab} >
              <FloatingActionButton icon={<AddIcon />}/>
            </a>
          </Link>
      }
    </>
  )
}
