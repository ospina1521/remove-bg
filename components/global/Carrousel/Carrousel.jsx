import style from './Carrousel.module.css'

/** @param {import('./types').PropsCarrousel} props */
export const Carrousel = (props) => {
  const { listOfImages = [] } = props

  if (!listOfImages) throw new Error(`🚀 listOfImages is required, file: Carrousel.jsx ~ line 8 ~ Carrousel ~ listOfImages -> ${listOfImages}`)
  if (listOfImages.constructor.name !== 'Array') throw new Error('🚀 listOfImages should be a array')

  const _listOfImages = Array.from({ length: 3 }).map((e, i) => {
    return listOfImages[i] || ''
  })

  return (
    <div
      data-testid='carrousel'
      className={style.boxCarrousel}
    >
      {_listOfImages.slice(0, 3).map((e, i) => {
        return (
          <div key={i} className={style.itemCarrousel}>
            <img className={style.img} alt="product-img" src={e || 'assets/placeholder-image.svg'}/>
          </div>
        )
      })}
    </div>
  )
}
