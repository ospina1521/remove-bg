import { supabase } from '#/providers/SupaBase/createClient'

/** @param {import('./types').CreateProductProp} props */
export const createProduct = async (props) => {
  const resp = await supabase.from('Products').insert(props)

  return resp
}
