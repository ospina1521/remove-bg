export const generateCode7D = () => {
  const numberRandom = (Math.random() * 9999999).toFixed() + ''

  const codeWithoutFormat = numberRandom.substring(0, 7).split('')

  codeWithoutFormat[3] = ' '

  const cacheCode = codeWithoutFormat.join('')

  return cacheCode
}
