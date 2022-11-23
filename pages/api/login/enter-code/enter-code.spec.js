import { credentials } from '#/credentials'
import { testApiHandler } from 'next-test-api-route-handler'
import { describe, expect, it } from 'vitest'
import EnterCodeController from '.'
import EnterEmailController from '../enter-email'

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

  it.each([
    '1',
    '12',
    '123',
    '123 ',
    '123 4',
    '123 45',
    '123 4567',
    '123 4568'
  ])('should throw if code (%s) is not valid', async (props) => {
    await testApiHandler({
      handler: EnterCodeController,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          body: JSON.stringify({ code: props, email: 'hbiaser132@gmail.com' }),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(json).toStrictEqual({ error: 'Code parameter is not valid' })
        expect(resp.status).toBe(400)
      }
    })
  })

  it.each([
    'abc',
    'abc@',
    'abc@abc',
    'abc@abc.',
    'abc@abc.s',
    'abc@abc..',
    'abc@@.'
  ])('should throw if email (%s) is not valid', async (props) => {
    await testApiHandler({
      handler: EnterCodeController,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          body: JSON.stringify({ code: '123 456', email: props }),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(json).toStrictEqual({ error: 'Email parameter is not valid' })
        expect(resp.status).toBe(400)
      }
    })
  })

  it('should throw if code request is diff to cacheCode', async () => {
    await testApiHandler({
      handler: EnterCodeController,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          body: JSON.stringify({ code: '000 000', email: 'hbiaser132@gmail.com' }),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()
        expect(json).toStrictEqual({ error: 'Code is diff to cacheCode' })
      }
    })
  })

  it.runIf(credentials.isDevMode)('should be status 200 and return code if request is success', async () => {
    let code = ''

    await testApiHandler({
      handler: EnterEmailController,
      test: async ({ fetch }) => {
        const config = {
          method: 'POST',
          body: JSON.stringify({ email: 'hbiaser132@gmail.com' }),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        const resp = await fetch(config)
        const json = await resp.json()

        code = json.code
      }
    })

    await testApiHandler({
      handler: EnterCodeController,
      test: async ({ fetch }) => {
        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          body: JSON.stringify({ code, email: 'hbiaser132@gmail.com' }),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const { error, token } = await resp.json() ?? {}

        expect(error).toBe(null)
        expect(resp.status).toBe(200)
        expect(token).toMatch(/(^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$)/)
      }
    })
  })

  it.todo('should to throw error if duplicate same code send two time with same email')
})
