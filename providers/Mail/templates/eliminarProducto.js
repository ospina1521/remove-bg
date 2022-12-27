export const copyEliminarProducto = ({ email, id }) => {
  const url = () => `https://remove-bg-lime.vercel.app/view-product?id=${id}&isVisible=false`

  return `El usuario ${email} ha eliminado el producto ${url()}.`
}
