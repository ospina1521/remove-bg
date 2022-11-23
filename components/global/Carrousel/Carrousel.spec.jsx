import { beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Carrousel } from './Carrousel'

describe('Carrousel', () => {
  beforeEach(() => {
    cleanup()
    render(<Carrousel />)
  })

  it('should be a function', () => {
    expect(Carrousel).toBeTypeOf('function')
  })

  it('should be attr "carrousel"', () => {
    screen.getByTestId('carrousel')
  })

  it('should render a slider of 3 part', () => {
    const carrousel = screen.getAllByAltText('product-img')

    expect(carrousel.length).toBe(3)
  })
})
