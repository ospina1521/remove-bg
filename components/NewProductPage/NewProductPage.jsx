import { FloatingActionButton } from '../global/FloatingActionButton/FloatingActionButton'
import { UploadIcon } from '../global/icons/UploadIcon/UploadIcon'
import style from './NewProductPage.module.css'

export const routeToNewProductPage = () => '/new-product'

export const NewProductPage = () => {
  return (
    <>
      <div className={style.positionFab}>
        <FloatingActionButton icon={<UploadIcon /> }/>
      </div>
    </>
  )
}
