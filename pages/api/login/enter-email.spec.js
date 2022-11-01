import EnterEmailController from './enter-email'
import { describe, expect, it } from 'vitest'
import { testApiHandler } from 'next-test-api-route-handler'

const handler = EnterEmailController

describe('enterEmailController', () => {
  it('to throw', () => {
    expect(() => { throw new Error() }).toThrow()
  })

  it('should to throw 2', async () => {
    await testApiHandler({
      handler,
      requestPatcher: (req) => (req.headers = { key: process.env.SPECIAL_TOKEN }),
      test: async ({ fetch }) => {
        const res = await fetch({ method: 'POST', body: 'data' })
        await expect(res.json()).resolves.toStrictEqual({ error: 'Email parameter is required' }) // ◄ Passes!
      }
    })
  })
})
