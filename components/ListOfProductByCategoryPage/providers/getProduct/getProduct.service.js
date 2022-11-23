import { credentials } from '#/credentials'

/** @param {import('./types').ReqGetProduct} props */
export const getProductService = async (props) => {
  if (credentials.isDevMode) {
    return [{
      name: 'camiseta',
      price: '30.000'
    },
    {
      name: 'camiseta',
      price: '30.000'
    },
    {
      name: 'camiseta',
      price: '30.000'
    },
    {
      name: 'camiseta',
      price: '30.000'
    },
    {
      name: 'camibuso',
      price: '35.000'
    }]
  }

  throw new Error('Function getProductService not implemented in production')
}
