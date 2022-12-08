import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Header } from '../global/Header/Header'
import { routeToNewProductPage } from '../NewProductPage/NewProductPage'
import style from './PortfolioPage.module.css'
import { useGetAllProducts } from './provider/getAllProduct/useGetAllProducts'

export const routeToReadOnlyPortfolioPage = () => '/all-portfolio'

export const ReadOnlyPortfolioPage = () => {
  const { getAllProducts, product } = useGetAllProducts()

  useEffect(() => {
    getAllProducts()
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

    </div>
  )
}
