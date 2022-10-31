export interface CreateUserRepositoryInterface {
    email: string
    name: string
    urlPhoto?: string
}

export type CreateUserRepositoryType = (props: CreateUserRepositoryInterface) => Promise<boolean>

export type GetByEmailUserRepositoryType = (email: string) => Promise<Array<CreateUserRepositoryInterface>>