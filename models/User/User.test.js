import { describe, expect, it } from 'vitest'
import { validateUser } from './User'

describe.concurrent('User Model', () => {
  it('should be function', () => {
    expect(validateUser).toBeTypeOf('function')
  })

  it('should throw if name, rol and id props is not provided', () => {
    // @ts-ignore
    expect(() => validateUser({})).toThrow('User.name is required')
    // @ts-ignore
    expect(() => validateUser({ name: 'a' })).toThrow('User.rol is required')
    // @ts-ignore
    expect(() => validateUser({ name: 'a', rol: 'a' })).toThrow('User.id is required')
  })
})
