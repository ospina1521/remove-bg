import { supabase } from '#/providers/SupaBase/createClient'

/** @param {import("./types").SearchProductByCriteria} criteria */
export const getAllProduct = async (criteria) => {
  console.log('🚀 ~ file: getAllProduct.js ~ line 5 ~ getAllProduct ~ criteria', criteria)

  // @ts-ignore
  // const resp = await supabase.from('Products').select('*').match(criteria)
  const resp = await supabase.from('Products').select('*').eq('category', criteria.category)

  return resp
}
