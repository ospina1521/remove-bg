import Head from 'next/head'
import '#/styles/normalize.css'
import '#/styles/global.css'

import { useEffect } from 'react'

export default function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Soropa</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icon.svg"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icon.svg"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#000000" />
      </Head>
      <div className='appBox' >
        <Component {...pageProps} />
      </div>
    </>
  )
}
