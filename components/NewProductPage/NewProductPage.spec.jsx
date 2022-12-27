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
    'Nombre de artículo',
    'Marca',
    'Precio costo',
    'Precio venta',
    'Cantidad disponible',
    'Talla'
  ])('should render input "%s" ', (props) => {
    screen.getByLabelText(props)
  })

  it('should render a button to save product', () => {
    screen.getByText('Guardar')
  })

  it('should render a button to remove product', () => {
    cleanup()
    document.location.href = 'http://localhost:3000/portfolio?id=123'
    render(<NewProductPage />)

    screen.getByText('Eliminar')
  })
})
