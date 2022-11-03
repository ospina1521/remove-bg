import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, it } from 'vitest'
import { EnterEmailPage } from './EnterEmailPage'

describe('EnterEmailPage', () => {
  beforeEach(cleanup)

  it('should render', () => {
    render(<EnterEmailPage />)
  })

  it(' should render BurgerMenu', () => {
    render(<EnterEmailPage />)
    screen.getByTestId('backArrowIcon')
  })

  it(' should render Logo', () => {
    render(<EnterEmailPage />)
    screen.getByTestId('logo')
  })

  it(' should render CircleAvatar', () => {
    render(<EnterEmailPage />)
    screen.getByTestId('circle-avatar-large')
  })

  it(' should render input from email', () => {
    render(<EnterEmailPage />)
    screen.getByRole('textbox')
  })

  it(' should render button submit', () => {
    render(<EnterEmailPage />)
    screen.getByRole('button')
  })
})
