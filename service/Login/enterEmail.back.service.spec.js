import { describe, expect, it } from 'vitest'
import { enterEmailBackService } from './enterEmail.back.service'

describe.concurrent('EnterEmail API', () => {
  it('should be a function', () => {
    expect(enterEmailBackService).toBeTypeOf('function')
  })

  it('should throw if email parameter is not provided', () => {
    // @ts-ignore
    expect(() => enterEmailBackService())
      .rejects
      .toThrow('Email parameter is required')
  })

  it.concurrent('should throw if email parameter is 123', () => {
    expect(() => enterEmailBackService('123'))
      .rejects
      .toThrow('Email parameter is not valid')
  })

  it.concurrent('should throw if email parameter is 123@', () => {
    expect(() => enterEmailBackService('123@'))
      .rejects
      .toThrow('Email parameter is not valid')
  })

  it.concurrent('should throw if email parameter is abc@abc', () => {
    expect(() => enterEmailBackService('abc@abc'))
      .rejects
      .toThrow('Email parameter is not valid')
  })

  it.concurrent('should throw if email parameter is abc@abc.c', () => {
    expect(() => enterEmailBackService('abc@abc.c'))
      .rejects
      .toThrow('Email parameter is not valid')
  })
})
