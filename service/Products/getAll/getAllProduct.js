import { supabase } from '#/providers/SupaBase/createClient'
import { createSupabaseQuery } from '#/utils/createSupabaseQuery'

/** @param {import("./types").SearchProductByCriteria} criteria */
export const getAllProduct = async (criteria) => {
  const query = createSupabaseQuery(criteria)

  const resp = await supabase
    .from('Products')
    .select('*')
    .match(query)
    .order('created_at', { ascending: false })

  return resp
}
