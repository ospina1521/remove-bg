import { describe, expect, it } from 'vitest'
import { enterEmail } from './EnterEmail'

describe('EnterEmail API', () => {
  it('should be a function', () => {
    expect(enterEmail).toBeTypeOf('function')
  })

  it('should throw if email parameter is not provided', () => {
  // // @ts-ignore
  //   expect(() => enterEmail())
  //     .rejects
  //     .toThrow('Email parameter is required')
  // })

  // it.concurrent('should throw if email parameter is 123', () => {
  //   expect(() => enterEmail('123'))
  //     .rejects
  //     .toThrow('Email parameter is not valid')
  // })

  // it.concurrent('should throw if email parameter is 123@', () => {
  //   expect(() => enterEmail('123@'))
  //     .rejects
  //     .toThrow('Email parameter is not valid')
  // })

  // it.concurrent('should throw if email parameter is abc@abc', () => {
  //   expect(() => enterEmail('abc@abc'))
  //     .rejects
  //     .toThrow('Email parameter is not valid')
  // })

  // it.concurrent('should throw if email parameter is abc@abc.c', () => {
  //   expect(() => enterEmail('abc@abc.c'))
  //     .rejects
  //     .toThrow('Email parameter is not valid')
  // })
})
