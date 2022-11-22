import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { NewProductPage } from './NewProductPage'

describe.concurrent('NewProductPage', () => {
  beforeEach(() => {
    cleanup()
    render(<NewProductPage />)
  }
  )

  it('should be a function', () => {
    expect(NewProductPage).toBeTypeOf('function')
  })

  it('should render FAB if to create new product', () => {
    screen.getByTestId('fab-icon')
  })

  it('should render back arrow button', () => {
    screen.getByTestId('backArrow')
  })

  it('should render slider of 3 part', () => {
    const carrousel = screen.getAllByTestId('product-img')

    expect(carrousel.length).toBe(3)
  })

  it.each([
    'Código',
    'Nombre',
    'Precio',
    'Cantidad'
  ])('should render input "%s" ', (props) => {
    screen.getByLabelText(props)
  })
})
