import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, it } from 'vitest'
import { EnterCodePage } from './EnterCodePage'

describe.concurrent('EnterCodePage', () => {
  beforeEach(cleanup)

  it('should render', () => {
    render(<EnterCodePage />)
  })

  it(' should render BurgerMenu', () => {
    render(<EnterCodePage />)
    screen.getByTestId('backArrowIcon')
  })

  it(' should render Logo', () => {
    render(<EnterCodePage />)
    screen.getByTestId('logo')
  })

  it(' should render CircleAvatar', () => {
    render(<EnterCodePage />)
    screen.getByTestId('circle-avatar-large')
  })

  it(' should render input from email', () => {
    render(<EnterCodePage />)
    screen.getByRole('textbox')
  })

  it(' should render button submit', () => {
    render(<EnterCodePage />)
    screen.getByRole('button')
  })
})
