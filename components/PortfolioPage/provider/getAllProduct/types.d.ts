export interface RespGetAllProductsService {
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
  quantity?: string
  provider: string
  update_at?: string
  status: any
}
