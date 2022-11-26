import { getToken } from '#/utils/jsonWebToken'
import { testApiHandler } from 'next-test-api-route-handler'
import { describe, expect, it } from 'vitest'
import handler from './index'

describe.concurrent('Create product Endpoint', () => {
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
        const token = getToken({ email: 'manuellondogno132@gmail.com', rol: 'admin' })

        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Cookie: `token="${token}"`
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
})
