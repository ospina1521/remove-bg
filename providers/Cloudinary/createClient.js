import { ENV } from '#/env'
import { v2 } from 'cloudinary'

v2.config({
  cloud_name: ENV.cluodinary.cloud_name,
  api_key: ENV.cluodinary.api_key,
  api_secret: ENV.cluodinary.api_secret
})
// example to upload image
// return cloudinary.uploader.upload('data:image/png;base64,' + e.base64img)

export const cloudinary = v2
