export const generateCode7D = () => {
  const numberRandom = (Math.random() * 9999999999).toFixed() + ''

  const codeWithoutFormat = numberRandom.substring(0, 7).split('')

  codeWithoutFormat[3] = ' '

  const cacheCode = codeWithoutFormat.join('')

  // Habrá momentos en el que el numero no tenga 7 dígitos
  // Con esta condición nos aseguramos de que siempre retorne un string de 7 dígitos
  if (cacheCode.length !== 7) return generateCode7D()

  return cacheCode
}
