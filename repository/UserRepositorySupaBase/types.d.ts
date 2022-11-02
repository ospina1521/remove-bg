export interface CreateUserRepositoryInterface {
    email: string
    name: string
    rol: string
    urlPhoto?: string
}

export type CreateUserRepositoryType = (props: CreateUserRepositoryInterface) => Promise<boolean>

export type GetByEmailUserRepositoryType = (email: string) => Promise<null | CreateUserRepositoryInterface>