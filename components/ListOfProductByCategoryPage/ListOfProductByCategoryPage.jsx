import { ENV } from '#/env'
import { useEffect } from 'react'
import { Product } from '../global/Product/Product'
import { useGetProduct } from './providers/getProduct/useGetProduct'
import style from './ListOfProductByCategoryPage.module.css'
import { BackArrowIcon } from '../global/icons/BackArrow/BackArrow'
import { Logo } from '../global/Logo/Logo'
import { useRouter } from 'next/router'
import { useGetSearchParams } from '#/utils/hooks/useGetSearchParams'
import { useToken } from '#/utils/hooks/useToken'
export const routeToListOfProductByCategory = (category = '') => `/list-of-product?category=${category}`

/** @param {import('./types').Props} props */
export const ListOfProductByCategory = (props) => {
  const { testListProducts } = props
  const router = useRouter()

  const { category } = useGetSearchParams(['category'])

  let { products, getProduct } = useGetProduct()
  products = ENV.isTestMode ? testListProducts : products

  const { email } = useToken() ?? {}

  useEffect(() => {
    if (!category && !email) return
    getProduct({ category, provider: email })
  }, [category, email])

  return (
    <>
      <div className={style.body} >
        {products.map((e, i) => {
          return (
            <div key={i} >
              <Product id={e.id} name={e.name} price={e.price} images={e.images}/>
            </div>
          )
        })}
      </div>

      <header className={style.header}>
        <BackArrowIcon
          theme='light'
          onClick={() => router.back()}
        />

        <p>{category}</p>

        <Logo theme='light'/>
      </header>
    </>
  )
}
