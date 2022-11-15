import { supabase } from '#/providers/SupaBase/createClient'

export class UserRepositorySupaBase {
  tableNameUser = 'Users'

  /** @type {import('./types').CreateUserRepositoryType} */
  create = async (props) => {
    const { name, email, rol } = props || {}
    if (!name || !email || !rol) throw new Error('rol, name and email param is required')

    const { status } = await supabase
      .from(this.tableNameUser)
      .insert({
        rol,
        email,
        name
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

    return data?.[0]
  }
}
