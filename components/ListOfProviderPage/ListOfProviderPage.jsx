import Link from 'next/link'
import { useEffect } from 'react'
import { FillCircleAvatar } from '../global/CircleAvatar/FillCircleAvatar'
import { FloatingActionButton } from '../global/FloatingActionButton/FloatingActionButton'
import { Header } from '../global/Header/Header'
import { AddIcon } from '../global/icons/AddIcon/AddIcon'
import { NextIcon } from '../global/icons/NextArrow/NextArrow'
import { Loading } from '../global/Loading/Loading'
import { routeProfilePage } from '../ProfilePage/ProfilePage'
import style from './ListOfProviderPage.module.css'
import { useGetAllProviders } from './providers/useGetAllProviders'

export const routeToListOfProviderPage = () => '/list-of-providers'

export const ListOfProviderPage = () => {
  const { getAllProviders, provider } = useGetAllProviders()

  useEffect(() => {
    getAllProviders()
  }, [])

  return (
    <div style={{ position: 'relative', flex: 1 }} >

      <Loading canShow={provider.isLoading}/>

      <Header arrowBackEnable={true} burgerMenuEnable={false} title='PROVEEDORES' />

      <div className={style.body}>

        {provider.properties?.map((e, i) => {
          return (
            <Link key={i} href={routeProfilePage({ email: e.email })} >
              <a>
                <div className={style.item} >
                  <div className={style.draw} ></div>

                  {e.urlPhoto
                    ? <img src={e.urlPhoto} alt="" className={style.img}/>
                    : <FillCircleAvatar height={50} width={50} />
                  }
                  <p>{e.name}</p>

                  <NextIcon />
                </div>
              </a>
            </Link>
          )
        })}
      </div>

      <Link href={routeProfilePage()}>
        <a className={style.positionFab} >
          <FloatingActionButton icon={<AddIcon />}/>
        </a>
      </Link>
    </div>
  )
}
