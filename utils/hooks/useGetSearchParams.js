import { useEffect, useState } from 'react'

/** @param {Array<string>} props */
export const useGetSearchParams = (props) => {
  let isActiveHook = true

  /** @type {Object<string, string | null>} */
  const initParams = {}
  const [params, setParams] = useState(initParams)

  useEffect(() => {
    if (typeof location === 'undefined') return

    /** @type {Object<string, string | null>} */
    const tempParams = {}
    props
      .forEach(
        (e) => {
          tempParams[e] = new URL(location.href).searchParams.get(e)
        }
      )

    if (!isActiveHook) return

    setParams(tempParams)

    return () => {
      isActiveHook = false
    }
  }, [])

  return params
}
