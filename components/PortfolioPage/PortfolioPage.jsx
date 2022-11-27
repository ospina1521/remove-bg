import { getCookie } from '#/utils/cookies'
import { decodeToken } from '#/utils/jsonWebToken'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FloatingActionButton } from '../global/FloatingActionButton/FloatingActionButton'
import { Header } from '../global/Header/Header'
import { AddIcon } from '../global/icons/AddIcon/AddIcon'
import { routeToNewProductPage } from '../NewProductPage/NewProductPage'
import style from './PortfolioPage.module.css'
import { useGetProductByProvider } from './provider/getProductByProvider/useGetProductByProvider'

export const routeToPortfolioPage = () => '/portfolio'

export const PortfolioPage = () => {
  const token = getCookie('token')

  const [rol, setRol] = useState('')

  const { getProductByProvider, product } = useGetProductByProvider()

  useEffect(() => {
    const { rol, email } = decodeToken(token) ?? {}

    setRol(rol)

    getProductByProvider({ provider: email })
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header arrowBackEnable={true} burgerMenuEnable={false} title='CATÁLOGO DE PRODUCTOS'/>

      <div className={style.body}>

        {product.properties?.map((e, i) => {
          return (
            <Link href={routeToNewProductPage(e.id)} key={i}>
              <a className={style.item}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="product-img" src={e.images[0] || 'assets/placeholder-image.svg'} className={style.img} />
                <span>{e.name}</span>
              </a>
            </Link>
          )
        })}

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
    </div>
  )
}
