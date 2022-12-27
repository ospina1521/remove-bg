import { DashboardPage } from '#/components/DashboardPage/DashboardPage'
import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

describe.concurrent('dashboard', () => {
  beforeEach(cleanup)

  it('should be a function', () => {
    expect(DashboardPage).toBeTypeOf('function')
  })

  it('should render logo and burger menu', () => {
    render(<DashboardPage email='hbiaser132@gmail.com' rol='admin' />)
    screen.getByTestId('logo')
    // screen.getByTestId('burgerMenu')
  })

  it('should render image of user', () => {
    render(<DashboardPage email='hbiaser132@gmail.com' rol='admin' />)
    screen.getByTestId('fill-circle-avatar')
  })

  it.each([
    { text: 'MI PERFIL', icon: null },
    { text: 'GESTIÓN DE PROVEEDORES', icon: 'icon-notification' },
    { text: 'PRODUCTOS', icon: 'icon-chart' }
  ])('should render bottom "%s" to admin rol', (props) => {
    const { icon, text } = props
    render(<DashboardPage email='hbiaser132@gmail.com' rol='admin' />)
    screen.getByText(text)
    icon && screen.getByTestId(icon)
  })

  it.each([
    { text: 'MI PERFIL', icon: null },
    { text: 'MI PORTAFOLIO', icon: 'icon-cart' },
    { text: 'FICHA DE PRODUCTO', icon: 'icon-product' }
  ])('should render bottom "%s" to provider rol', (props) => {
    const { icon, text } = props
    render(<DashboardPage email='hbiaser132@gmail.com' rol='provider' />)
    screen.getByText(text)
    icon && screen.getByTestId(icon)
  })
})
