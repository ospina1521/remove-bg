import { UserI } from "#/models/User/types"
import { UserRol } from "#/types"

export interface CreateUserProps  {
    name: string
    email: string
    rol: UserRol
}