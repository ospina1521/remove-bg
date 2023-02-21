import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { ListOfProviderPage } from './ListOfProviderPage'

describe.concurrent('ListOfProviderPage', () => {
  beforeEach(() => {
    location.href = 'http://localhost:3000'
    cleanup()
  })

  it('should be a function', () => {
    expect(ListOfProviderPage).toBeTypeOf('function')
  })

  it('should render header', () => {
    render(<ListOfProviderPage />)
    screen.getByTestId('logo')
    screen.getByTestId('backArrowIcon')
    screen.getByText('PROVEEDORES')
  })

  it('should render FAB to add new providers ', () => {
    render(<ListOfProviderPage/>)
    screen.getByTestId('fab-icon')
  })

  // it('should render a provider item', () => {
  //   render(<ListOfProviderPage/>)
  //   screen.findAllByTestId('')
  // })
})
