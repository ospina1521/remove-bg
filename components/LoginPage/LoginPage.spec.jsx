import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, it } from 'vitest'
import { EnterEmailPage } from './EnterEmailPage'

describe('Login Page', () => {
  beforeEach(cleanup)

  it('should render EnterEmailPage', () => {
    render(<EnterEmailPage />)
  })

  it('EnterEmailPage should render BurgerMenu', () => {
    render(<EnterEmailPage />)
    screen.getByTestId('burgerMenu')
  })

  it('EnterEmailPage should render Logo', () => {
    render(<EnterEmailPage />)
    screen.getByTestId('logo')
  })

  it('EnterEmailPage should render CircleAvatar', () => {
    render(<EnterEmailPage />)
    screen.getByTestId('circle-avatar-large')
  })

  it('EnterEmailPage should render input from email', () => {
    render(<EnterEmailPage />)
    screen.getByRole('textbox')
  })

  it('EnterEmailPage should render button submit', () => {
    render(<EnterEmailPage />)
    screen.getByRole('button')
  })
})
