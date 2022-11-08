import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { ListOfProviderPage } from './ListOfProviderPage'

describe.concurrent('ListOfProviderPage', () => {
  beforeEach(cleanup)

  it('should be a function', () => {
    expect(ListOfProviderPage).toBeTypeOf('function')
  })

  it('should render header', () => {
    render(<ListOfProviderPage />)
    screen.getByTestId('logo')
    screen.getByTestId('burgerMenu')
    screen.getByText('PROVEEDORES')
  })

  it('should render new providers FAB', () => {
    render(<ListOfProviderPage/>)
    screen.getByText('Nuevos Proveedores')
  })
})
