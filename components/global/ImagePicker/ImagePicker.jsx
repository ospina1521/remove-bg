// @ts-check
import { fileToBase64 } from '#/utils/file/fileToBase64'
import { getSizeToBase64 } from '#/utils/file/getSizeToBase64'
import { reduceSizeImageAsBase64 } from '#/utils/file/reduceSizeImageAsBase64'
import { useState } from 'react'
import { v4 } from 'uuid'

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
  const id = v4()
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
  // const initUrl = initialImage?.toString()
  // const [url, setUrl] = useState(initUrl)
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
        try {
          /** @type {File} */
          // @ts-ignore
          const file = e.target.files[0]
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
      }}
    >

      <ImageBuilder url={_url.url} file={_url.file} size={_url.size}/>

      <input
        multiple={multiple}
        id={id}
        type="file"
        style={{ display: 'none' }}
        accept={accept}
      />
    </label>
  )
}