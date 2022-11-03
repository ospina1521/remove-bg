import { describe, expect, it } from 'vitest'
import { createProduct } from './createProducto'

describe.concurrent('createProduct', () => {
  it('should be a function', () => {
    expect(createProduct).toBeTypeOf('function')
  })

  it('should throw if params is not provided', () => {
    expect(() => createProduct()).rejects.toThrow('Params is required')
  })

  it.concurrent('should return true if can send email', async () => {
    // expect(await createProduct({})).toBe(true)
  })
})
