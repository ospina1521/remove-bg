import { useEffect, useState } from 'react'
import { getProductByProviderService } from './getProductByProvider.service'

export const useGetProductByProvider = () => {
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

  /** @param {import('./types').Props} props */
  const getProductByProvider = async (props) => {
    setProduct(s => ({ ...s, isLoading: true }))

    try {
      const resp = await getProductByProviderService(props)

      if (!isActiveHook) return
      setProduct({ isLoading: false, properties: resp })
    } catch (error) {
      setProduct({ isLoading: false, properties: null })
    }
  }

  return {
    product,
    getProductByProvider
  }
}
