import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { NewProductPage } from './NewProductPage'

describe.concurrent('NewProductPage', () => {
  beforeEach(cleanup)

  it('should be a function', () => {
    expect(NewProductPage).toBeTypeOf('function')
  })

  it('should render FAB if to create new product', () => {
    render(<NewProductPage />)

    screen.getByTestId('fab-icon')
  })
})
