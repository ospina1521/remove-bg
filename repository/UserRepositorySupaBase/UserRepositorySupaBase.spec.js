import { describe, expect, it } from 'vitest'
import { UserRepositorySupaBase } from './UserRepositorySupaBase'

describe('UserRepositorySupaBase', () => {
  it.concurrent('create should throw if email, name or photoUrl is not provided', async () => {
    // @ts-ignore
    await expect(new UserRepositorySupaBase().create())
      .rejects
      .toThrow('name and email param is required')
  })

  // it.concurrent('should throw if', async () => {
  //   await expect(new UserRepositorySupaBase().create({ email: 'hbiaser132@gmail.com', name: 'manu' }))
  //     .resolves
  //     .toBe(true)
  // })
})
