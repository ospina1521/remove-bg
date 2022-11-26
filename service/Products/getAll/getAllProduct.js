import { supabase } from '#/providers/SupaBase/createClient'

/** @param {import("./types").SearchProductByCriteria} criteria */
export const getAllProduct = async (criteria) => {
  const resp = await supabase.from('Products').select('*').match({ ...criteria })
  // const resp = await supabase.from('Products').select('*').eq('category', criteria.category)

  return resp
}
