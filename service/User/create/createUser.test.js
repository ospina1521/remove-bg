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

  it('should throw if email and name is empty', async () => {
    await expect(async () => createUser({
      name: '',
      email: '',
      rol: 'provider'
    })).rejects.toThrow('rol, name and email param is required')
  })

  it('should throw if email is not valid', async () => {
    // @ts-ignore
    await expect(async () => createUser({})).rejects.toThrow('name and email param is required')
  })
})
