export interface IGetAllUsersService {
  email: string
}

export interface IRespGetAllUsersService {
  error: any
  data: User[]
  count: any
  status: number
  statusText: string
}

export interface User {
  created_at: string
  email: string
  name: string
  urlPhoto: string
  rol: string
  nameCompany: string
  phone: string
  nit: string
}