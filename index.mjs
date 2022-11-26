import * as fs from 'fs'
import { removeBackgroundFromImageBase64 } from 'remove.bg'
import { base64 } from './base64.mjs'

async function removeBgFromBase64 (inputPath, outputPath) {
  try {
    const base64img = fs.readFileSync(inputPath, { encoding: 'base64' })
    // const result = await removeBackgroundFromImageBase64({
    //   base64img,
    //   apiKey: 'hFR252RG4bC6FMMMmJ7y4mTX',
    //   size: 'regular',
    //   outputFile: outputPath
    // })

    // const byteArray = Buffer.from(base64, 'base64')

    // console.log({ byteArray })

    // fs.writeFileSync(
    //   'D:\\luis_mejias\\sebas-ospina\\temp\\bites.txt',
    //   base64,
    //   { encoding: 'utf-8' }
    // )
  } catch (error) {
    console.log('🚀 ~ file: index.mjs ~ line 19 ~ removeBgFromBase64 ~ error', error.message)
  }
  return null
}

removeBgFromBase64(
  'D:\\luis_mejias\\sebas-ospina\\temp\\zapatos.jpg',
  'D:\\luis_mejias\\sebas-ospina\\temp\\zapatos-without-bg.jpg'
)
