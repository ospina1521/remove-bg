import { DashboardPage } from '#/components/DashboardPage/DashboardPage'
import { getCookie, setCookie } from '#/utils/cookies'
import { verifyToken } from '#/utils/jsonWebToken'

/** @type {import('next').GetServerSideProps} */
export async function getServerSideProps (context) {
  try {
    const token = getCookie('token', context.req.headers.cookie)

    if (!token) {
      return {
        notFound: true
      }
    }

    verifyToken(token)

    return {
      props: {}
    }
  } catch (error) {
    context.res.setHeader('set-cookie', setCookie({
      days: 0,
      key: 'token',
      value: '',
      context: context.req.headers.cookie
    }))

    return {
      notFound: true

    }
  }
}

export default function Dashboard () { return <DashboardPage /> }
