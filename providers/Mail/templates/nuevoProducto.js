
export const copyNuevoProducto = ({ email, name, price, id }) => {
  const url = () => `https://remove-bg-lime.vercel.app/view-product?id=${id}`

  return `El usuario ${email} ha creado un nuevo producto.

Se creo el producto *${name}* al precio de ${price}

Abre este enlace para verlo -> ${url()}
`
}
