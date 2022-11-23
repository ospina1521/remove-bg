import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { ListOfProductByCategory } from './ListOfProductByCategoryPage'

describe.concurrent('ListOfProductByCategory', () => {
  beforeEach(() => {
    cleanup()

    const products = [{
      name: 'camiseta',
      price: '30.000'
    },
    {
      name: 'camibuso',
      price: '35.000'
    }]

    location.href = 'http://localhost:3000/list-of-product?category=new-collection'

    render(<ListOfProductByCategory testListProducts={products} />)
  })

  it('should be a function', () => {
    expect(ListOfProductByCategory).toBeTypeOf('function')
  })

  it('should render 2 "carrousel" components ', () => {
    const carrousel = screen.getAllByTestId('carrousel')
    expect(carrousel.length).toBe(2)
  })
})
