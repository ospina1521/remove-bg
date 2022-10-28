import { PlaceholderImage } from '../icons/PlaceholderImage/PlaceholderImage'
import style from './CategoryProductCard.module.css'
export const CategoryProductCard = ({ title = '' }) => {
  return (
    <div className={style.columnCard} >
      <h3 className={style.title} >{title}</h3>
      <PlaceholderImage data-testid='category-products-image' />
    </div>
  )
}
