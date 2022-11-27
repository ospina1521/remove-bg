import { setCookie } from '#/utils/cookies'
import { getToken } from '#/utils/jsonWebToken'
import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { PortfolioPage } from './PortfolioPage'

describe.concurrent('PortafolioPage', () => {
  beforeEach(() => {
    const token = getToken({ email: 'manuellondogno132@gmail.com', rol: 'provider' })
    setCookie({
      days: 10000,
      value: token,
      key: 'token'
    })
    cleanup()
  })

  it('should be a function', () => {
    expect(PortfolioPage).toBeTypeOf('function')
  })

  it('should be render header', () => {
    render(<PortfolioPage />)

    screen.getByTestId('backArrowIcon')
    screen.getByTestId('logo')
    screen.getByText('CATÁLOGO DE PRODUCTOS')
  })

  it('should render FAB if rol is Provider', () => {
    const token = getToken({ email: 'manuellondogno132@gmail.com', rol: 'provider' })
    setCookie({
      days: 10000,
      value: token,
      key: 'token'
    })

    render(<PortfolioPage />)

    screen.getByTestId('fab-icon')
  })

  it('should not render FAB if rol is Admin', () => {
    const token = getToken({ email: 'hbiaser132@gmail.com', rol: 'admin' })
    setCookie({
      days: 10000,
      value: token,
      key: 'token'
    })

    render(<PortfolioPage />)
    expect(() => screen.getByTestId('fab-icon')).toThrow()
  })
})
