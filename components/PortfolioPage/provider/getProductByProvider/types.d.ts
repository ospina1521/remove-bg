export interface Props {
  provider: string
}

export interface RespGetProductByIdService {
  error: any
  data: Product[]
  count: any
  status: number
  statusText: string
}

export interface Product {
  id: string
  created_at: string
  images: string[]
  code: string
  name: string
  price: string
  category: string
  quantity: string
  provider: string
}
