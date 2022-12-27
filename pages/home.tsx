import { HomePage } from '#/components/HomePage/HomePage'
// import { getCookie, setCookie } from '#/utils/cookies'
// import { decodeToken } from '#/utils/jsonWebToken'

export default HomePage

// /** @type {import('next').GetServerSideProps} */
// export async function getServerSideProps (context) {
//   try {
//     const token = getCookie('token', context.req.headers.cookie)

//     const info = decodeToken(token)

//     return {
//       props: info ?? {}
//     }
//   } catch (error) {
//     context.res.setHeader('set-cookie', setCookie({
//       days: 0,
//       key: 'token',
//       value: '',
//       context: context.req.headers.cookie
//     }))

//     return {
//       notFound: true
//     }
//   }
// }
