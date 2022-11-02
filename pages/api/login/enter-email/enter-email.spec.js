import EnterEmailController from './enter-email/enter-email'
import { describe, expect, it } from 'vitest'
import { testApiHandler } from 'next-test-api-route-handler'

describe.concurrent('enterEmailController', () => {
  it('should to throw if request body not exist', async () => {
    await testApiHandler({
      handler: EnterEmailController,
      test: async ({ fetch }) => {
        const res = await fetch({ method: 'POST' })
        const json = await res.json()

        expect(json).toStrictEqual({ error: 'Email parameter is required' }) // ◄ Passes!
        expect(res.status).toBe(400)
      }
    })
  })

  it.each([
    'abc@',
    'abc@abc',
    'abc@abc.',
    'abc@abc.c'
  ])('should to throw if email is not valid', async (args) => {
    await testApiHandler({
      handler: EnterEmailController,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          body: JSON.stringify({ email: args }),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
        // @ts-ignore
        const res = await fetch(config)
        const json = await res.json()

        expect(json).toStrictEqual({ error: 'Email parameter is not valid' })
        expect(res.status).toBe(400)
      }
    })
  })

  it('should to throw if email not exist', async () => {
    await testApiHandler({
      handler: EnterEmailController,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          body: JSON.stringify({ email: 'abc@abc.abc' }),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(json).toStrictEqual({ error: "User from email don't exist" })
      }
    })
  })
})
