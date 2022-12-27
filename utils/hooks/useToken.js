import { useEffect, useState } from 'react'
import { getCookie } from '../cookies'
import { decodeToken } from '../jsonWebToken'

export const useToken = () => {
  const initToken = {
    email: '',
    /** @type {null | 'admin' | 'provider'} */
    rol: null
  }
  const [token, setToken] = useState(initToken)

  useEffect(() => {
    if (!window) return

    try {
      const token = getCookie('token')

      const { email, rol } = decodeToken(token)

      setToken({ email, rol })
    } catch (error) {
      setToken(initToken)
    }
  }, [])

  return token
}
