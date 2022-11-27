import { supabase } from '#/providers/SupaBase/createClient'
import { createSupabaseQuery } from '#/utils/createSupabaseQuery'

/** @param {import("./types").SearchUserByCriteria} criteria */
export const getByCriteria = async (criteria) => {
  const query = createSupabaseQuery(criteria)

  const resp = await supabase
    .from('Users')
    .select('*')
    .match(query)
    .order('created_at', { ascending: false })

  return resp
}
