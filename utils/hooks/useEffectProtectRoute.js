import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getCookie } from '../cookies'
import { decodeToken } from '../jsonWebToken'

export const useEffectProtectRoute = () => {
  const router = useRouter()
  useEffect(() => {
    const token = getCookie('token')

    const { email } = decodeToken(token) ?? {}

    // En caso de que no haya un token, redirigir a la página de login
    if (!email) router.push('/')
  }, [])
}
