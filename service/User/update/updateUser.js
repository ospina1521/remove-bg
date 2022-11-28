import { supabase } from '#/providers/SupaBase/createClient'

/**
 * @param {string} email
 * @param {import('./types').UserProp} props
 * */
export const updateUser = async (email, props) => {
  const resp = await supabase
    .from('Users')
    .update(props)
    .eq('email', email)

  return resp
}
