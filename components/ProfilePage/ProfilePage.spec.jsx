import { setCookie } from '#/utils/cookies'
import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { ProfilePage } from './ProfilePage'

describe.concurrent('ProfilePage', () => {
  beforeEach(() => {
    cleanup()
    location.href = 'http://localhost:3000/profile?'
    setCookie({
      key: 'token',
      value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbnVlbGxvbmRvZ25vMTMyQGdtYWlsLmNvbSIsInJvbCI6InByb3ZpZGVyIiwiaWF0IjoxNjY3NzYwMDQ2fQ.3aLKfaWFkKD4oNz3tRRChgCMonPVeIp-ZDT-EYgLsd4',
      days: 1000
    })
  })

  it('should be a function', () => {
    expect(ProfilePage).toBeTypeOf('function')
  })

  it('should render header', () => {
    render(<ProfilePage />)
  })

  it('should render BurgerMenu', () => {
    render(<ProfilePage />)
    screen.getByTestId('backArrowIcon')
  })

  it('should render Logo', () => {
    render(<ProfilePage />)
    screen.getByTestId('logo')
  })

  it('should render image', () => {
    render(<ProfilePage />)
    screen.getByTestId('fill-circle-avatar')
  })

  it('should render image with editable icon', () => {
    render(<ProfilePage />)
    screen.getByTestId('fill-circle-avatar')
    screen.getByTestId('editableIcon')
  })

  it.each([
    'Nombre',
    'Número de nit.',
    'Nombre de empresa',
    'Correo electrónico',
    'Número de celular'
  ])('should render input %s', (props) => {
    render(<ProfilePage />)
    screen.getByLabelText(props)
  })
})
