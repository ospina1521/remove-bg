import { useEffect, useState } from 'react'
import { getProductByIdService } from './getProductByIdService.service'

export const useGetProduct = () => {
  let isActiveHook = true

  const [product, setProduct] = useState({
    isLoading: true,
    /** @type {null | import('./types').Product} */
    properties: null
  })

  useEffect(() => {
    return () => {
      isActiveHook = false
    }
  }, [])

  /** @param {import('./types').Props} props */
  const getProductById = async (props) => {
    setProduct(s => ({ ...s, isLoading: true }))

    try {
      const resp = await getProductByIdService(props)

      if (!isActiveHook) return
      setProduct({ isLoading: false, properties: resp })
    } catch (error) {
      setProduct({ isLoading: false, properties: null })
    }
  }

  return {
    product,
    getProductById
  }
}
