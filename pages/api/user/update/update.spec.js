import { getToken } from '#/utils/jsonWebToken'
import { testApiHandler } from 'next-test-api-route-handler'
import { describe, expect, it } from 'vitest'
import handler from './index'

describe.concurrent('Update Users Endpoint', () => {
  it('should throw if cookie rol is not Admin', async () => {
    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        const token = getToken({ email: 'hbiaser132@gmail.com', rol: 'provider' })

        /** @type {RequestInit} */
        const config = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Cookie: `token="${token}"`
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(json).toStrictEqual({ error: 'Unauthorized' })
      }
    })
  })
})
