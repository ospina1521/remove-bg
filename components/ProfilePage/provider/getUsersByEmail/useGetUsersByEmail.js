import { useEffect, useState } from 'react'
import { getGetByEmailService } from './getUsersByEmail.service'

export const useGetUsersByEmail = () => {
  let isActiveHook = true

  const [user, setUser] = useState({
    isLoading: true,
    /** @type {null | import('./types').User} */
    properties: null
  })

  useEffect(() => {
    return () => {
      isActiveHook = false
    }
  }, [])

  /** @param {import("./types").IGetAllUsersService}  props */
  const getUserByEmail = async (props) => {
    setUser(s => ({ ...s, isLoading: true }))

    try {
      const resp = await getGetByEmailService(props)

      if (!isActiveHook) return
      setUser({ isLoading: false, properties: resp })
    } catch (error) {
      console.error('🚀 ~ Service Error: useGetUsersByEmail.js ~ line 29 ~ getUserByEmail ~ error', error.message)
      setUser(s => ({ ...s, isLoading: false }))
    }
  }

  return {
    user,
    getUserByEmail
  }
}
