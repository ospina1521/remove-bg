import { supabase } from '#/providers/SupaBase/createClient'

export const deleteProduct = async (/** @type {string} */id) => {
  const resp = await supabase
    .from('Products')
    .update({ isVisible: false })
    .eq('id', id)

  return resp
}
