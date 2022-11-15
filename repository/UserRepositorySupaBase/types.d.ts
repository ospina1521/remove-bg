import { UserRol } from "#/types"

export interface CreateUserRepositoryInterface {
    email: string
    name: string
    rol: UserRol
    urlPhoto?: string
}

export type CreateUserRepositoryType = (props: CreateUserRepositoryInterface) => Promise<boolean>

export type GetByEmailUserRepositoryType = (email: string) => Promise<null | CreateUserRepositoryInterface>