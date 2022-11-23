import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { Product } from './Product'

describe('Product', () => {
  beforeEach(() => {
    cleanup()
    render(<Product name='camiseta' price='30.000' />)
  })

  it('should render heading title', () => {
    screen.getByRole('heading', { name: 'camiseta' })
  })

  it('should render text price', () => {
    const price = screen.getByTestId('product-price')
    expect(price.textContent).toBe('30.000')
  })
})
