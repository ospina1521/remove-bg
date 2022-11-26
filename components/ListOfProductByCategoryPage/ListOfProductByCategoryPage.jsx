import { credentials } from '#/credentials'
import { useEffect } from 'react'
import { Product } from '../global/Product/Product'
import { useGetProduct } from './providers/getProduct/useGetProduct'

export const routeToListOfProductByCategory = (category = '') => `/list-of-product?category=${category}`

/** @param {import('./types').Props} props */
export const ListOfProductByCategory = (props) => {
  const { testListProducts } = props

  let { products, getProduct } = useGetProduct()
  products = credentials.isTestMode ? testListProducts : products

  useEffect(() => {
    if (typeof window === 'undefined') return
    const category = new URL(window.location.href).searchParams.get('category')
    getProduct({ category })
  }, [])

  return (
    <div >
      {products.map((e, i) => {
        return (
          <div key={i} >
            <Product name={e.name} price={e.price} images={e.images}/>
          </div>
        )
      })}
    </div>
  )
}
