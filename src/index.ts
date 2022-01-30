const containerCalculatorValues: { [key in string]: number } = {
  A: 10,
  B: 12,
  C: 13,
  D: 14,
  E: 15,
  F: 16,
  G: 17,
  H: 18,
  I: 19,
  J: 20,
  K: 21,
  L: 23,
  M: 24,
  N: 25,
  O: 26,
  P: 27,
  Q: 28,
  R: 29,
  S: 30,
  T: 31,
  U: 32,
  V: 34,
  W: 35,
  X: 36,
  Y: 37,
  Z: 38,
}

export const isValidContainer = (containerNumber: string): boolean => {
  const containerNoLength = containerNumber.length

  if (containerNoLength !== 11) return false

  const withoutLastChar = containerNumber.slice(0, -1)
  const lastChar = containerNumber.charAt(containerNoLength - 1)

  let multiplier = 1

  const valueSum = withoutLastChar.split('').reduce((a, b) => {
    const equivalentFactor =
      (containerCalculatorValues[b] || parseInt(b, 10)) * multiplier
    multiplier *= 2
    return a + equivalentFactor
  }, 0)

  const subTotal = Math.floor(valueSum / containerNoLength) * containerNoLength
  const checkDifference = valueSum - subTotal
  const checkDigit = checkDifference === 10 ? 0 : checkDifference
  return checkDigit === Number(lastChar)
}
