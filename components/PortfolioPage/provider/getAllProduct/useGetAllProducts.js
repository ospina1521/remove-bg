import { useEffect, useState } from 'react'
import { getAllProductsService } from './getAllProduct.service'

export const useGetAllProducts = () => {
  let isActiveHook = true

  const [product, setProduct] = useState({
    isLoading: true,
    /** @type {null | Array<import('./types').Product>} */
    properties: null
  })

  useEffect(() => {
    return () => {
      isActiveHook = false
    }
  }, [])

  const getAllProducts = async (props) => {
    setProduct(s => ({ ...s, isLoading: true }))

    try {
      const resp = await getAllProductsService()

      if (!isActiveHook) return
      setProduct({ isLoading: false, properties: resp.data })
    } catch (error) {
      setProduct({ isLoading: false, properties: null })
    }
  }

  return {
    product,
    getAllProducts
  }
}
