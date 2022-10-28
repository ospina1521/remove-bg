import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<HomePage/>)
  })

  it('should render burger menu', () => {
    render(<HomePage/>)
    screen.getByTestId('burgerMenu')
  })

  it('should render logo', () => {
    render(<HomePage/>)
    screen.getByTestId('logo')
  })

  it('should render soropa title', () => {
    render(<HomePage/>)
    screen.getByRole('heading', { name: 'SOROPA' })
  })

  it('should render CircleAvatar icon', () => {
    render(<HomePage/>)
    screen.getByTestId('circle-avatar')
  })

  it('should render "Nueva Colección" text', () => {
    render(<HomePage/>)
    screen.getByText('Nueva Colección')
  })

  it('should render 2 img of "Nueva Colección"', () => {
    render(<HomePage/>)
    const arrNewCollection = screen.getAllByTestId('new-collection-image')
    expect(arrNewCollection.length).toBe(2)
  })

  it('should render category product titles "Mujer, Hombre, Marcas, Rebajas"', () => {
    render(<HomePage />)
    screen.getByText('Mujer')
    screen.getByText('Hombre')
    screen.getByText('Marcas')
    screen.getByText('Rebajas')
  })

  it('should render 4 img of "Categorías de producto"', () => {
    render(<HomePage/>)
    const arrCategoryProduct = screen.getAllByTestId('category-products-image')
    expect(arrCategoryProduct.length).toBe(4)
  })
})
