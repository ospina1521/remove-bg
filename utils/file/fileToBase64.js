// @ts-check
/**
 * @param {File} file
 * @return {Promise<string>}
 * */
export function fileToBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = (_) => {
      const url = _?.target?.result
      // @ts-ignore
      resolve(url)
    }

    reader.onerror = () => {
      reject(new Error('Ocurrió un error al cargar la imagen'))
    }
  })
}
