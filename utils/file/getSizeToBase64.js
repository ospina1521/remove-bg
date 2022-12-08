/** @param {string} base64 */
export function getSizeToBase64 (base64) {
  const xSize = base64.length * (3 / 4) - 4

  return (xSize / 1024).toFixed() + ' kb'
}
