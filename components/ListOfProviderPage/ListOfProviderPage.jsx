import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FillCircleAvatar } from '../global/CircleAvatar/FillCircleAvatar'
import { FloatingActionButton } from '../global/FloatingActionButton/FloatingActionButton'
import { Header } from '../global/Header/Header'
import { AddIcon } from '../global/icons/AddIcon/AddIcon'
import { NextIcon } from '../global/icons/NextArrow/NextArrow'
import { Loading } from '../global/Loading/Loading'
import { routeProfilePage } from '../ProfilePage/ProfilePage'
import style from './ListOfProviderPage.module.css'
import { getAllUsersService } from './providers/getAllUsers.service'

export const routeToListOfProviderPage = () => '/list-of-providers'

export const ListOfProviderPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  /**
   * @type {Array<{
   * rol: string,
   * name: string,
   * email: string
   * }>}
   *  */
  const initListOfProviders = []
  const [listOfProviders, setListOfProviders] = useState(initListOfProviders)

  useEffect(() => {
    fetching()
  }, [])

  const fetching = async () => {
    try {
      const resp = await getAllUsersService()

      setListOfProviders(resp)

      setIsLoading(false)
    } catch (error) {
      console.error('🚀 ~ Error Service: ListOfProviderPage.jsx ~ line 35 ~ fetching ~ error', error.message)
      setIsLoading(false)
    }
  }

  return (
    <div style={{ position: 'relative', flex: 1 }} >

      <Loading canShow={isLoading}/>

      <Header arrowBackEnable={true} burgerMenuEnable={false} title='PROVEEDORES' />

      <div className={style.body}>

        {listOfProviders.map((e, i) => {
          const isLast = listOfProviders.length - 1 === i
          console.log('🚀 ~ file: ListOfProviderPage.jsx ~ line 63 ~ {listOfProviders.map ~ e', e)
          return (
            <Link key={i} href={routeProfilePage({ email: e.email })} >
              <a>
                <div className={style.item} style={{ marginBottom: isLast ? '80px' : 0 }} >
                  <div className={style.draw} ></div>

                  <FillCircleAvatar height={50} width={50} />
                  <p>{e.name}</p>
                  <NextIcon />
                </div>
              </a>
            </Link>
          )
        })}
      </div>

      <Link href={routeProfilePage({ isNewProfile: true })}>
        <a className={style.positionFab} >
          <FloatingActionButton icon={<AddIcon />}/>
        </a>
      </Link>
    </div>
  )
}
