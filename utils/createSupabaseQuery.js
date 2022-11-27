/**
  *__Resumen__: Esto se hace para eliminar las claves con valores "undefined"
  *
  *__Explicación__:
  *El código de ejemplo hará que supabase retorne un array vació porque la clave "provider" tiene "undefined" como valor
  *
  *Ej:
  *```js
  *const query = {
  *  category: 'hombre',
  *  provider: undefined
  *}
  ```
  *@param {Object<string, *>} criteria
*/
export const createSupabaseQuery = (criteria) => {
  const query = {}

  Object
    .entries(criteria)
    .forEach(([key, value]) => {
      if (value) query[key] = value
    })

  return query
}
