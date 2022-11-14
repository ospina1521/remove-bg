import Link from 'next/link'
import { FillCircleAvatar } from '../global/CircleAvatar/FillCircleAvatar'
import { FloatingActionButton } from '../global/FloatingActionButton/FloatingActionButton'
import { Header } from '../global/Header/Header'
import { AddIcon } from '../global/icons/AddIcon/AddIcon'
import { NextIcon } from '../global/icons/NextArrow/NextArrow'
import { routeProfilePage } from '../ProfilePage/ProfilePage'
import style from './ListOfProviderPage.module.css'

export const routeToListOfProviderPage = () => '/list-of-providers'

export const ListOfProviderPage = () => {
  return (
    <div style={{ position: 'relative', flex: 1 }} >

      <Header arrowBackEnable={true} burgerMenuEnable={false} title='PROVEEDORES' />

      <div className={style.body}>

        {Array.from({ length: 10 }).map((e, i) => {
          const isLast = Array.from({ length: 10 }).length - 1 === i
          return (
            <div key={e} className={style.item} style={{ marginBottom: isLast ? '80px' : 0 }} >
              <div className={style.draw} ></div>

              <FillCircleAvatar height={50} width={50} />
              <p>Nombre de Proveedor</p>
              <NextIcon />
            </div>
          )
        })}
      </div>

      <Link href={routeProfilePage(true)}>
        <a className={style.positionFab} >
          <FloatingActionButton icon={<AddIcon />}/>
        </a>
      </Link>
    </div>
  )
}
