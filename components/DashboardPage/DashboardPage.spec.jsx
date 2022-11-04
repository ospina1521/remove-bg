import { DashboardPage } from '#/components/DashboardPage/DashboardPage'
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
    screen.getByTestId('fill-circle-avatar')
  })

  it.each([
    { text: 'MI PERFIL', icon: null },
    { text: 'GESTIÓN DE PROVEEDORES', icon: 'icon-notification' },
    { text: 'NUEVOS PRODUCTOS', icon: 'icon-chart' },
    { text: 'ANÁLISIS DE MÉTRICAS', icon: 'icon-bell' }
  ])('should render bottom "%s"', (props) => {
    const { icon, text } = props
    render(<DashboardPage />)
    screen.getByText(text)
    icon && screen.getByTestId(icon)
  })
})
