import { UserRepositorySupaBase } from '#/repository/UserRepositorySupaBase/UserRepositorySupaBase'
import { getByCriteria } from '#/service/User/getByCriteria/getByCriteria'
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

        const users = await getByCriteria({})

        expect(json).toStrictEqual(users)
      }
    })
  })
})
