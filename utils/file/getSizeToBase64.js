/** @param {string} image */
export function getSizeToBase64 (image) {
  const xSize = image.length * (3 / 4) - 4

  return (xSize / 1024).toFixed() + ' kb'
}
