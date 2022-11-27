import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { NewProductPage } from './NewProductPage'

describe.concurrent('NewProductPage', () => {
  beforeEach(() => {
    cleanup()
    document.location.href = 'http://localhost:3000/portfolio'

    render(<NewProductPage />)
  })

  it('should be a function', () => {
    expect(NewProductPage).toBeTypeOf('function')
  })

  it('should render FAB if to create new product', () => {
    screen.getByTestId('fab-icon')
  })

  it('should render back arrow button', () => {
    screen.getByTestId('productArrowBack')
  })

  it('should render "carrousel" component', () => {
    screen.getByTestId('carrousel')
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
