import style from './Carrousel.module.css'

export const Carrousel = () => {
  return (
    <div
      data-testid='carrousel'
      className={style.boxCarrousel}
    >
      {Array.from({ length: 3 }).map((e, i) => {
        return (
          <div key={i} className={style.itemCarrousel}>
            <img className={style.img} alt="product-img" src='assets/placeholder-image.svg'/>
          </div>
        )
      })}
    </div>
  )
}
