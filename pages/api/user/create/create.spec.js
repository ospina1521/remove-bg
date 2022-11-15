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
          }
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(json).toStrictEqual({ error: 'Rol Admin is required to this endpoint' })
        expect(resp.status).toBe(400)
      }
    })
  })

  it('should throw if email from body is not valid', async () => {
    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        const token = getToken({ email: 'hbiaser132@gmail.com', rol: 'admin' })

        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Cookie: `token="${token}"`
          },
          body: JSON.stringify({
            email: 'a',
            name: 'b'
          })
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(json).toStrictEqual({ error: 'Email provided is not valid' })
        expect(resp.status).toBe(400)
      }
    })
  })

  it('should throw if email and name from body is empty', async () => {
    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        const token = getToken({ email: 'hbiaser132@gmail.com', rol: 'admin' })

        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Cookie: `token="${token}"`
          },
          body: JSON.stringify({
            email: '',
            name: ''
          })
        }

        // @ts-ignore
        const resp = await fetch(config)
        const json = await resp.json()

        expect(json).toStrictEqual({ error: 'Correo y Nombre son requeridos' })
        expect(resp.status).toBe(400)
      }
    })
  })

  it('should respond status 200 if request is success', async () => {
    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        const token = getToken({ email: 'hbiaser132@gmail.com', rol: 'admin' })

        /** @type {RequestInit} */
        const config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Cookie: `token="${token}"`
          },
          body: JSON.stringify({
            email: 'manuellodngono132@gmail.com',
            name: 'Manuel'
          })

        }

        // @ts-ignore
        const resp = await fetch(config)

        expect(resp.status).toBe(200)
      }
    })
  })
})
