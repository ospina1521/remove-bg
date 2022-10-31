import { describe, expect, it } from 'vitest'
import { enterEmailController } from './enterEmail.controller'

describe('EnterEmail API', () => {
  it('should be a function', () => {
    expect(enterEmailController).toBeTypeOf('function')
  })

  it('should throw if email parameter is not provided', () => {
    // @ts-ignore
    expect(() => enterEmailController())
      .rejects
      .toThrow('Email parameter is required')
  })

  it.concurrent('should throw if email parameter is 123', () => {
    expect(() => enterEmailController('123'))
      .rejects
      .toThrow('Email parameter is not valid')
  })

  it.concurrent('should throw if email parameter is 123@', () => {
    expect(() => enterEmailController('123@'))
      .rejects
      .toThrow('Email parameter is not valid')
  })

  it.concurrent('should throw if email parameter is abc@abc', () => {
    expect(() => enterEmailController('abc@abc'))
      .rejects
      .toThrow('Email parameter is not valid')
  })

  it.concurrent('should throw if email parameter is abc@abc.c', () => {
    expect(() => enterEmailController('abc@abc.c'))
      .rejects
      .toThrow('Email parameter is not valid')
  })
})
