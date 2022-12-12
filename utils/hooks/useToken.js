import { useEffect, useState } from 'react'
import { getCookie } from '../cookies'
import { decodeToken } from '../jsonWebToken'

export const useToken = () => {
  const [token, setToken] = useState({
    email: '',
    /** @type {null | 'admin' | 'provider'} */
    rol: null
  })

  useEffect(() => {
    if (!window) return
    const token = getCookie('token')

    const { email, rol } = decodeToken(token)

    setToken({ email, rol })
  }, [])

  return token
}
