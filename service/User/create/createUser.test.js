import { describe, expect, it } from 'vitest'
import { createUser } from './createUser'

describe.concurrent('createUser', () => {
  it('should be a function', () => {
    expect(createUser).toBeTypeOf('function')
  })

  it('should throw parameters is not provided', () => {
    expect(() => createUser()).toThrow('')
  })

  it('should throw if user is not Super Admin', () => {
    expect(() => createUser({})).toThrow('')
  })
})
