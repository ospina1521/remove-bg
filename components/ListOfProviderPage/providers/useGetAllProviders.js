import { useEffect, useState } from 'react'
import { getAllProvidersService } from './getAllProviders.service'

export const useGetAllProviders = () => {
  let isActiveHook = true

  const [provider, setProvider] = useState({
    isLoading: true,
    /** @type {Array<import('./types').User>} */
    properties: []
  })

  useEffect(() => {
    return () => {
      isActiveHook = false
    }
  }, [])

  const getAllProviders = async () => {
    setProvider(s => ({ ...s, isLoading: true }))

    try {
      const resp = await getAllProvidersService()

      if (!isActiveHook) return

      setProvider({
        isLoading: false,
        properties: resp.data
      })
    } catch (error) {
      console.error('🚀 ~ Error Service: useGetAllUsers.js:32 ~ getAllUsers ~ error', error.message)

      setProvider({
        isLoading: false,
        properties: []
      })
    }
  }

  return {
    provider,
    getAllProviders
  }
}
