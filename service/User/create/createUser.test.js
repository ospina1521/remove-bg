import { describe, expect, it } from 'vitest'
import { createUser } from './createUser'

describe.concurrent('createUser', () => {
  it('should be a function', () => {
    expect(createUser).toBeTypeOf('function')
  })

  it('should throw if parameters is not provided', async () => {
    // @ts-ignore
    await expect(async () => createUser()).rejects.toThrow('Parameters is required')
  })

  it('should throw if user is not Super Admin', async () => {
    // @ts-ignore
    await expect(async () => createUser({})).rejects.toThrow()
  })
})
