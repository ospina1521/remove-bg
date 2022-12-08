import { fileToBase64 } from '#/utils/file/fileToBase64'
import { getSizeToBase64 } from '#/utils/file/getSizeToBase64'
import { reduceSizeImageAsBase64 } from '#/utils/file/reduceSizeImageAsBase64'

/**
 * @param {File} file
 * @param {Object} options
 * @param {boolean} options.reduceImage
 * @param {number} options.MAX_HEIGHT
 * @param {number} options.MAX_WIDTH
 * @return  {Promise<{size: string, base64: string}>}
 * */
export const processSingleFile = async (file, options) => {
  const { MAX_HEIGHT, MAX_WIDTH, reduceImage } = options
  const originBase64 = await fileToBase64(file)
  const originSize = getSizeToBase64(originBase64)

  if (!reduceImage) {
    return {
      size: originSize,
      base64: originBase64
    }
  }

  const reducedBase64 = await reduceSizeImageAsBase64({
    MAX_HEIGHT,
    MAX_WIDTH,
    base64: originBase64
  })
  const reducedSize = getSizeToBase64(reducedBase64)

  return {
    size: reducedSize,
    base64: reducedBase64
  }
}
