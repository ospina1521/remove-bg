import { useGetSearchParams } from '#/utils/hooks/useGetSearchParams'
import { ListItemButton } from '@mui/material'
import Link from 'next/link'
import { useEffect } from 'react'
import { Header } from '../global/Header/Header'
import { routeToNewProductPage } from '../NewProductPage/NewProductPage'
import style from './PortfolioPage.module.css'
import { useGetProductByProvider } from './provider/getProductByProvider/useGetProductByProvider'

export const routeToReadOnlyPortfolioPage = (email = '') => `/all-portfolio?email=${email}`

export const ReadOnlyPortfolioPage = () => {
  const { getProductByProvider, product } = useGetProductByProvider()

  const { email } = useGetSearchParams(['email'])

  useEffect(() => {
    // @ts-ignore
    getProductByProvider({ provider: email })
  }, [email])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header arrowBackEnable={true} burgerMenuEnable={false} title='CATÁLOGO DE PRODUCTOS'/>

      <div className={style.body}>

        {product.properties?.map((e, i) => {
          return (
            <Link href={routeToNewProductPage(e.id)} key={i}>
              <a >
                <ListItemButton className={style.list} >
                  <img alt="product-img" src={e.images[0] || 'assets/placeholder-image.svg'} className={style.img} />

                  <div>
                    <h3>{e.name}</h3>
                    <p>{e.provider}</p>
                  </div>

                  <span>Ver más</span>
                </ListItemButton>
              </a>
            </Link>
          )
        })}

      </div>

    </div>
  )
}
