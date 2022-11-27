import { useState } from 'react'
import style from './Carrousel.module.css'

/** @param {import('./types').PropsCarrousel} props */
export const Carrousel = (props) => {
  const { listOfImages = [] } = props

  const [indicator, setIndicator] = useState(0)

  if (!listOfImages) throw new Error(`🚀 listOfImages is required, file: Carrousel.jsx ~ line 8 ~ Carrousel ~ listOfImages -> ${listOfImages}`)
  if (listOfImages.constructor.name !== 'Array') throw new Error('🚀 listOfImages should be a array')

  const _listOfImages = Array.from({ length: 3 }).map((e, i) => {
    return listOfImages[i] || ''
  })

  return (
    <div className={style.container} >

      <div className={style.indicator} >
        <span className={ style.noActive + ' ' + (indicator === 0 ? style.active : '')} ></span>
        <span className={ style.noActive + ' ' + (indicator === 1 ? style.active : '')} ></span>
        <span className={ style.noActive + ' ' + (indicator === 2 ? style.active : '')} ></span>
      </div>

      <div
        data-testid='carrousel'
        className={style.boxCarrousel}
        onScroll={(e) => {
          const { scrollLeft, scrollWidth } = e.currentTarget

          const imageWidth = scrollWidth / 3

          if (scrollLeft > ((imageWidth * 2.5) / 2)) return setIndicator(2)
          if (scrollLeft > (imageWidth / 2)) return setIndicator(1)
          setIndicator(0)
        }}
      >
        {_listOfImages.slice(0, 3).map((e, i) => {
          return (
            <div key={i} className={style.itemCarrousel}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={style.img} alt="product-img" src={e || 'assets/placeholder-image.svg'}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}
