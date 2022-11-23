import { useEffect, useState } from 'react'
import { getProductService } from './getProduct.service'

export const useGetProduct = () => {
  let isActiveHook = true

  /** @type {Array<import('#/components/global/Product/types').PropsProduct>} */
  const initProduct = []
  const [products, setProduct] = useState(initProduct)

  useEffect(() => {
    return () => {
      isActiveHook = false
    }
  }, [])

  /** @param {import('./types').ReqGetProduct} props */
  const getProduct = async (props) => {
    try {
      const data = await getProductService(props)
      if (!isActiveHook) return

      setProduct(data)
    } catch (error) {
      console.error('🚀 ~ file: useGetProduct.js ~ line 22 ~ getProduct ~ error', error.message)

      if (!isActiveHook) return
      setProduct([])
    }
  }

  return {
    products,
    getProduct
  }
}
