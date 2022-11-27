import { credentials } from '#/credentials'
import { v2 } from 'cloudinary'

v2.config({
  cloud_name: credentials.cluodinary.cloud_name,
  api_key: credentials.cluodinary.api_key,
  api_secret: credentials.cluodinary.api_secret
})
// example to upload image
// return cloudinary.uploader.upload('data:image/png;base64,' + e.base64img)

export const cloudinary = v2
