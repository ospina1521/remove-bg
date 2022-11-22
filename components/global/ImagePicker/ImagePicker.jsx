// @ts-check
import { fileToBase64 } from '#/utils/file/fileToBase64'
import { getSizeToBase64 } from '#/utils/file/getSizeToBase64'
import { reduceSizeImageAsBase64 } from '#/utils/file/reduceSizeImageAsBase64'
import { useId, useState } from 'react'

/**
 * @typedef {Object} onChange
 * @prop {string} url
 * @prop {number} size
 * @prop {File} file
 */

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string | ArrayBuffer} [props.initialImage]
 * @param {boolean} [props.reduceImage]
 * @param {number} [props.MAX_HEIGHT = 512]
 * @param {number} [props.MAX_WIDTH = 512]
 * @param {string} [props.accept] type only images extensions, doc -> https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
 * @param {boolean} [props.multiple] doc -> https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple
 * @param {(props: {url: string, file: null | File, size: number }) => JSX.Element} props.imageBuilder
 */
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
    imageBuilder: ImageBuilder = () => <></>
  } = props

  // /** @type {string} */
  const [_url, _setUrl] = useState({
    url: initialImage?.toString(),
    /** @type {null | File} */
    file: null,
    size: 0
  })

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

            _setUrl({
              file,
              size,
              url: base64
            })
          } catch (error) {
            console.log({ error: error.message })
          }
        }

        if (multiple) {
          const filesPromise = filesPrimitive.map(async e => {
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

          const files = await Promise.all(filesPromise)

          // _setUrl({
          //   file: files.map(e => e.file),
          //   size:
          // })
        }
      }}
    >

      <ImageBuilder url={_url.url} file={_url.file} size={_url.size}/>

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
