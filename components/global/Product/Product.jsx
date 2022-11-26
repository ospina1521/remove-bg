import { Carrousel } from '../Carrousel/Carrousel'
import style from './Product.module.css'

/** @param {import('./types').PropsProduct} props */
export const Product = (props) => {
  const { name, price, images: listOfImages } = props

  return (
    <>
      <Carrousel listOfImages={listOfImages} />

      <div className={style.body}>
        <h1 className={style.name}>{name}</h1>
        <p className={style.price} data-testid='product-price'>{price}</p>
      </div>
    </>
  )
}
