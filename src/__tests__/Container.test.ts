import { isValidContainer } from '../index'

describe('containerNumberValidation', () => {
  it('should be invalid', () => {
    const isValid = isValidContainer('CSQU3054390')
    expect(isValid).toBe(false)
  })

  it('should be valid', () => {
    const isValid = isValidContainer('CCLU4843216')
    expect(isValid).toBe(true)
  })
})
