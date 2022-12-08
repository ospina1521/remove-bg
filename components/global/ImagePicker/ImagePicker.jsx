import { memo, useId, useState } from 'react'
import { processSingleFile } from './func/singleFile'

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
    onChangeSingleFiles = () => {},
    imageBuilder: ImageBuilder = () => <></>,
    onChangeMultiFiles = () => {}
  } = props

  /** @type {import('./types').InitStateFile} */
  const initSingleStateFile = { url: initialImage?.toString(), file: null, size: '0' }
  const [singleFile, setSingleFile] = useState(initSingleStateFile)

  const Memo = memo(function Name () {
    return <ImageBuilder url={singleFile.url || initialImage} file={singleFile.file} size={singleFile.size}/>
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
            const { base64, size } = await processSingleFile(file, { MAX_HEIGHT, MAX_WIDTH, reduceImage: true })

            onChangeSingleFiles({
              file,
              size,
              url: base64
            })

            setSingleFile({
              file,
              size,
              url: base64
            })
          } catch (error) {
            console.error('🚀 ~ file: ImagePicker.jsx:45 ~ onChange', error.message)
          }
        }

        if (multiple) {
          try {
            const filesPromise = Object.values(filesPrimitive).map(async e => {
              const resp = await processSingleFile(e, { MAX_HEIGHT, MAX_WIDTH, reduceImage })
              return { ...resp, file: e }
            })

            const files = (await Promise.all(filesPromise))
              .map(e => ({ size: e.size, file: e.file, url: e.base64 }))

            onChangeMultiFiles(files)
          } catch (error) {
            console.error('🚀 ~ file: ImagePicker.jsx:62 ~ onChange', error.message)
          }
        }
      }}
    >

      {/* <ImageBuilder url={singleFile.url || initialImage} file={singleFile.file} size={singleFile.size}/> */}
      <Memo />

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
