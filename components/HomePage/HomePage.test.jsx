import { getToken } from '#/utils/jsonWebToken'
import { setCookie } from '#/utils/cookies'
import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { HomePage } from './HomePage'

describe.concurrent('HomePage', () => {
  beforeEach(() => {
    cleanup()
    const token = getToken({ email: 'manuellondogno132@gmail.com', rol: 'provider' })

    setCookie({
      key: 'token',
      value: token,
      days: 1000
    })
    render(<HomePage/>)
  })

  it('should render logo', () => {
    screen.getByTestId('logo')
  })

  it('should render soropa title', () => {
    screen.getByRole('heading', { name: 'SOROPA' })
  })

  it('should render CircleAvatar icon', () => {
    screen.getByTestId('circle-avatar')
  })

  it('should render "Nueva Colección" text', () => {
    screen.getByText('Nueva Colección')
  })

  it('should render 2 img of "Nueva Colección"', () => {
    const arrNewCollection = screen.getAllByTestId('new-collection-image')
    expect(arrNewCollection.length).toBe(2)
  })

  it('should render category product titles "Mujer, Hombre, Marcas, Rebajas"', () => {
    screen.getByText('Mujer')
    screen.getByText('Hombre')
    screen.getByText('Marcas')
    screen.getByText('Rebajas')
  })

  it('should render 4 img of "Categorías de producto"', () => {
    const arrCategoryProduct = screen.getAllByTestId('category-products-image')
    expect(arrCategoryProduct.length).toBe(4)
  })
})
