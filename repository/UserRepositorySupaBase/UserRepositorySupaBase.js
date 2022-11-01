import { supabase } from '#/providers/SupaBase/createClient'

export class UserRepositorySupaBase {
  tableNameUser = 'Users'

  /** @type {import('./types').CreateUserRepositoryType} */
  create = async (props) => {
    const { name, email, urlPhoto } = props || {}

    if (!name) throw new Error('name param is required')
    if (!email) throw new Error('email param is required')

    const { status } = await supabase
      .from(this.tableNameUser)
      .insert({
        email,
        name,
        urlPhoto
      })

    const isSuccess = status >= 200 && status < 400

    return isSuccess
  }

  /** @type {import('./types').GetByEmailUserRepositoryType} */
  getByEmail = async (email) => {
    const { data } = await supabase
      .from(this.tableNameUser)
      .select()
      .eq('email', email)

    return data ?? []
  }
}