import handler from './index'
import { testApiHandler } from 'next-test-api-route-handler'
import { describe, expect, it } from 'vitest'
import { getToken } from '#/utils/jsonWebToken'

describe.concurrent('Create User Endpoint', () => {
  it.each(['GET', 'PUT', 'DELETE', 'PATCH'])('should throw if method (%s) is diff to POST', async (method) => {
    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          method,
          headers: {
            'Content-Type': 'application/json'
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(json).toStrictEqual({ error: 'Method should be POST' })
        expect(resp.status).toBe(400)
      }
    })
  })

  it('should throw if body request is empty', async () => {
    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(json).toStrictEqual({ error: 'Body request is required' })
        expect(resp.status).toBe(400)
      }
    })
  })

  it('should throw if cookie token rol is diff to Admin', async () => {
    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        const token = getToken({ email: 'manuellondogno132@gmail.com', rol: 'provider' })

        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Cookie: `token="${token}"`
          },
          body: JSON.stringify({ a: 'a' })
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(json).toStrictEqual({ error: 'Rol Admin is required to this endpoint' })
        expect(resp.status).toBe(400)
      }
    })
  })

  it.skip('should be response status 200 and empty body if request is success ', async () => {
    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: 'a',
            rol: '1'
          })
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(json).toStrictEqual({})
        expect(resp.status).toBe(200)
      }
    })
  })
})
