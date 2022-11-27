import { supabase } from '#/providers/SupaBase/createClient'

/**
 * @param {string} id
 * @param {import('./types').ProductProp} props
 * */
export const updateProduct = async (id, props) => {
  const resp = await supabase
    .from('Products')
    .update(props)
    .eq('id', id)

  return resp
}
