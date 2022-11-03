import { DashboardPage } from '#/components/Dashboard/Dashboard'
import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

describe.concurrent('dashboard', () => {
  beforeEach(cleanup)

  it('should be a function', () => {
    expect(DashboardPage).toBeTypeOf('function')
  })

  it('should render logo and burger menu', () => {
    render(<DashboardPage />)
    screen.getByTestId('logo')
    screen.getByTestId('burgerMenu')
  })

  it('should render image of user', () => {
    render(<DashboardPage />)
    screen.getByRole('img')
  })

  it.each([
    'MI PERFIL',
    'GESTIÓN DE PROVEEDORES',
    'NUEVOS PRODUCTOS',
    'ANÁLISIS DE MÉTRICAS'
  ])('should render bottom "%s"', (props) => {
    render(<DashboardPage />)
    screen.getByText(props)
  })
})
