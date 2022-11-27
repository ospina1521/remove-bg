import { describe, expect, it } from 'vitest'
import { updateProduct } from './updateProducto'

describe.concurrent('createProduct', () => {
  it('should be a function', () => {
    expect(updateProduct).toBeTypeOf('function')
  })

  it('should throw if params is not provided', () => {
    // @ts-ignore
    expect(() => updateProduct()).rejects.toThrow('Params is required')
  })

  it.concurrent('should return true if can send email', async () => {
    // expect(await createProduct({})).toBe(true)
  })
})
