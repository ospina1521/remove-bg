// @ts-check
import { fileToBase64 } from '#/utils/file/fileToBase64'
import { getSizeToBase64 } from '#/utils/file/getSizeToBase64'
import { reduceSizeImageAsBase64 } from '#/utils/file/reduceSizeImageAsBase64'
import { useId, useState } from 'react'

/** @param {import('./types').Prop} props */
export function ImagePicker (props) {
  const id = useId()

  const {
    className = '',
    accept = '',
    MAX_WIDTH = 512,
    MAX_HEIGHT = 512,
    multiple = false,
    initialImage = '',
    reduceImage = true,
    imageBuilder: ImageBuilder = () => <></>,
    onChangeMultiFiles = () => {}
  } = props

  /** @type {import('./types').InitStateFile} */
  const initSingleStateFile = { url: initialImage?.toString(), file: null, size: '0' }
  const [singleFile, setSingleFile] = useState(initSingleStateFile)

  return (
    <label
      className={className}
      htmlFor={id}
      onChange={async (e) => {
        /** @type {{files: Array<File>}} */
        // @ts-ignore
        const { files: filesPrimitive } = e.target

        if (!multiple) {
          try {
            const file = filesPrimitive[0]
            const originBase64 = await fileToBase64(file)
            const originSize = getSizeToBase64(originBase64)

            const reducedBase64 = await reduceSizeImageAsBase64({
              MAX_HEIGHT,
              MAX_WIDTH,
              base64: originBase64
            })
            const reducedSize = getSizeToBase64(reducedBase64)

            const base64 = reduceImage ? reducedBase64 : originBase64

            const size = reduceImage ? reducedSize : originSize

            setSingleFile({
              file,
              size,
              url: base64
            })
          } catch (error) {
            console.log({ error: error.message })
          }
        }

        if (multiple) {
          const filesPromise = Object.values(filesPrimitive).map(async e => {
            const originBase64 = await fileToBase64(e)
            const originSize = getSizeToBase64(originBase64)

            const reducedBase64 = await reduceSizeImageAsBase64({
              MAX_HEIGHT,
              MAX_WIDTH,
              base64: originBase64
            })
            const reducedSize = getSizeToBase64(reducedBase64)

            const base64 = reduceImage ? reducedBase64 : originBase64

            const size = reduceImage ? reducedSize : originSize
            return { base64, size, file: e }
          })

          const files = (await Promise.all(filesPromise))
            .map(e => ({ size: e.size, file: e.file, url: e.base64 }))

          onChangeMultiFiles(files)
        }
      }}
    >

      <ImageBuilder url={singleFile.url} file={singleFile.file} size={singleFile.size}/>

      <input
        max={3}
        multiple={multiple}
        id={id}
        type="file"
        style={{ display: 'none' }}
        accept={accept}
      />
    </label>
  )
}
