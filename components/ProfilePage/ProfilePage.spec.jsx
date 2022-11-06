import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { ProfilePage } from './ProfilePage'

describe.concurrent('ProfilePage', () => {
  beforeEach(cleanup)

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
    'la empresa',
    'número de nit.',
    'representante legal',
    'correo electrónico',
    'número de celular'
  ])('should render input %s', (props) => {
    render(<ProfilePage />)
    screen.getByPlaceholderText(props)
  })
})
