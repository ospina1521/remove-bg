import { getToken } from '#/utils/jsonWebToken'
import { testApiHandler } from 'next-test-api-route-handler'
import { describe, expect, it } from 'vitest'
import handler from './index'

describe.concurrent('Get all users Endpoint', () => {
  it('should be success', async () => {
    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        const token = getToken({ email: 'hbiaser132@gmail.com', rol: 'admin' })

        /** @type {RequestInit} */
        const config = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Cookie: `token=${token}`
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        const users = [{
          created_at: '2022-11-01T15:45:42.07595+00:00',
          email: 'hbiaser132@gmail.com',
          name: 'manu',
          urlPhoto: null,
          rol: 'admin'
        },
        {
          created_at: '2022-11-16T03:42:44.67774+00:00',
          email: 'manuellondogno132@gmail.com',
          name: 'Manuel ',
          urlPhoto: null,
          rol: 'provider'
        }]

        expect(json).toStrictEqual(users)
      }
    })
  })
})
