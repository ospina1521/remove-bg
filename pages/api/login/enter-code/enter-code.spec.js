import { testApiHandler } from 'next-test-api-route-handler'
import { describe, expect, it } from 'vitest'
import EnterCodeController from '.'

describe.concurrent('EnterCodeController', () => {
  it('should throw if request body is empty', async () => {
    await testApiHandler({
      handler: EnterCodeController,
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

        expect(json).toStrictEqual({ error: 'Code parameter is required' })
        expect(resp.status).toBe(400)
      }
    })
  })
})
