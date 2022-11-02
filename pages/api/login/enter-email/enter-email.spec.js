import EnterEmailController from '.'
import { describe, expect, it } from 'vitest'
import { testApiHandler } from 'next-test-api-route-handler'
import { validate } from '#/utils/validate'

describe.concurrent('EnterEmailController', () => {
  it('should to throw if request body not exist', async () => {
    await testApiHandler({
      handler: EnterEmailController,
      test: async ({ fetch }) => {
        const res = await fetch({ method: 'POST' })
        const json = await res.json()

        expect(json).toStrictEqual({ error: 'Email parameter is required' })
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

  it.runIf(process.env.NODE_ENV === 'test')('should be status 200 and "error: null and code: ... ..." if request is success', async () => {
    await testApiHandler({
      handler: EnterEmailController,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          body: JSON.stringify({ email: 'hbiaser132@gmail.com' }),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(resp.status).toBe(200)
        expect(json.error).toBeNull()
        const isValid = validate({
          regExp: /\d{3}\s{1}\d{3}/,
          stringToValidate: json.code
        })

        expect(isValid).toBe(true)
      }
    })
  })

  it.runIf(process.env.NODE_ENV !== 'test')('only prod -> should be status 200 and "error: null and code: null" if request is success', async () => {
    await testApiHandler({
      handler: EnterEmailController,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          body: JSON.stringify({ email: 'hbiaser132@gmail.com' }),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(resp.status).toBe(200)
        expect(json).toStrictEqual({ error: null, code: null })
      }
    })
  })

  it.runIf(process.env.NODE_ENV === 'test')('should be status 200 and "error: null" if request is success', async () => {
    await testApiHandler({
      handler: EnterEmailController,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          body: JSON.stringify({ email: 'hbiaser132@gmail.com' }),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()
        const isValid = validate({
          regExp: /\d{3}\s{1}\d{3}/,
          stringToValidate: json.code
        })

        expect(resp.status).toBe(200)
        expect(json.error).toBeNull()
        expect(isValid).toBe(true)
      }
    })
  })
})
