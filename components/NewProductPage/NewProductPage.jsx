import { useRouter } from 'next/router'
import { Carrousel } from '../global/Carrousel/Carrousel'
import { FloatingActionButton } from '../global/FloatingActionButton/FloatingActionButton'
import { UploadIcon } from '../global/icons/UploadIcon/UploadIcon'
import { ImagePicker } from '../global/ImagePicker/ImagePicker'
import { InputText } from '../global/InputText/InputText'
import { ProductBackArrow } from '../global/ProductArrowBack'
import style from './NewProductPage.module.css'

export const routeToNewProductPage = () => '/new-product'

export const NewProductPage = () => {
  const router = useRouter()

  return (
    <div style={{ position: 'relative' }}>

      <div className={style.positionBackArrow} onClick={() => router.back()}>
        <ProductBackArrow />
      </div>

      <Carrousel />

      <div className={style.fields}>
        <InputText
          type='text'
          name='Código'
          placeholder='100 000 000'
          onChange={numeroCelular => {}}
        />

        <InputText
          type='text'
          name='Nombre'
          placeholder='Camiseta'
          onChange={numeroCelular => {}}
        />

        <InputText
          type='text'
          name='Precio'
          placeholder='30.000'
          onChange={numeroCelular => {}}
        />

        <InputText
          type='text'
          name='Cantidad'
          placeholder='10'
          onChange={numeroCelular => {}}
        />
      </div>

      <ImagePicker
        MAX_WIDTH={390}
        MAX_HEIGHT={545}
        multiple={true}
        className={style.positionFab}
        imageBuilder={(props) => {
          const { url, file } = props
          console.log('🚀 ~ file: NewProductPage.jsx ~ line 66 ~ NewProductPage ~ url', file)

          if (!url) return <FloatingActionButton icon={<UploadIcon width={28} height={28} /> }/>

          return <FloatingActionButton icon={<UploadIcon width={28} height={28} /> }/>
        }}
      />
    </div>
  )
}

/**
 * @param {import('react').SVGProps<SVGSVGElement>} props
 */
export const PlaceholderImage = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 360 502"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M360 0H0v501.578h360V0z" fill="#5E0000" />
      <path
        d="M276.29 461.189H79.433c-.987-.328-1.974-.493-3.125-.821-11.183-2.627-19.735-8.702-25.655-18.553-4.276-7.06-5.427-14.94-5.427-22.985V87.017c0-2.955.164-5.746.328-8.702C47.364 58.942 64.138 43.18 83.71 43.18h188.47c4.275 0 8.551.821 12.663 2.299 16.117 6.075 25.82 20.522 25.82 38.747v330.499c0 3.612 0 7.224-.329 10.836-1.48 13.956-8.223 24.299-20.393 31.195-4.44 2.298-9.045 3.284-13.65 4.433zM177.779 60.091h-92.59c-12.992 0-22.53 9.358-22.53 22v195.542c0 3.283.328 3.448 3.288 1.642 20.722-11.986 41.608-23.971 62.495-35.956 5.92-3.448 9.045-2.956 13.814 1.806 6.25 6.239 12.499 12.313 18.584 18.552 1.645 1.806 2.96 1.97 5.263.821 16.61-9.687 33.385-19.373 50.16-28.896 5.427-3.119 8.551-2.791 13.321 1.314 20.393 17.895 40.785 35.791 61.343 53.687.658.493 1.151 1.314 1.973 1.15.987-.329.658-1.478.658-2.299V81.764c0-2.956-.493-5.911-1.809-8.703-4.276-8.866-11.512-13.134-21.38-13.134-31.082.164-61.836.164-92.59.164zm0 384.187h92.426c13.486 0 22.86-9.358 22.86-22.821V318.678c0-2.134-.658-3.612-2.303-4.925-9.209-7.881-18.419-16.09-27.464-24.135-13.321-11.657-26.478-23.15-39.799-34.807-1.974-1.806-3.618-1.97-6.085-.492-13.157 7.716-26.314 15.269-39.47 22.821-2.467 1.478-2.632 1.642-.494 3.776l15.459 15.434c.987.985 2.138 2.134 2.796 3.447 2.138 3.612 1.48 7.717-1.644 10.508-2.961 2.627-7.401 2.955-10.69.493-.987-.657-1.809-1.642-2.631-2.463l-45.556-45.479c-1.644-1.641-2.795-2.134-4.933-.821-21.709 12.643-43.582 25.12-65.455 37.762-1.644.986-2.467 2.135-2.467 4.105v119.361c0 2.955.658 5.746 1.974 8.373 4.276 8.702 11.512 12.806 21.215 12.806 30.918-.164 61.672-.164 92.261-.164z"
        fill="#FF6969"
      />
      <path
        d="M171.036 242.334c-11.018 0-19.899-9.195-19.899-20.359 0-11 9.21-19.866 20.393-19.702 10.854 0 19.899 9.194 19.899 20.03 0 11.001-9.045 20.031-20.393 20.031zm3.125-20.195c-.164-1.642-1.151-2.791-2.96-2.627-1.645.164-2.796 1.149-2.631 2.955.164 1.806 1.151 2.792 2.96 2.792 1.644-.165 2.467-1.314 2.631-3.12z"
        fill="#FF6969"
      />
    </svg>
  )
}
