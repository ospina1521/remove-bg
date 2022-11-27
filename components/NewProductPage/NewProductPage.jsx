import { Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button } from '../global/Button/Button'
import { Carrousel } from '../global/Carrousel/Carrousel'
import { FloatingActionButton } from '../global/FloatingActionButton/FloatingActionButton'
import { UploadIcon } from '../global/icons/UploadIcon/UploadIcon'
import { ImagePicker } from '../global/ImagePicker/ImagePicker'
import { InputText } from '../global/InputText/InputText'
import { postCreateProductService } from './providers/postCreateProduct/postCreateProduct.service'
import { Loading } from '../global/Loading/Loading'
import { ProductBackArrow } from '../global/ProductArrowBack'
import { useGetProduct } from './providers/getProductById/useGetProductByIdService'
import style from './NewProductPage.module.css'
import { useGetSearchParams } from '#/utils/hooks/useGetSearchParams'
import { putUpdateProductService } from './providers/putUpdateProduct/putUpdateProduct.service'

export const routeToNewProductPage = (id = '') => `/new-product?id=${id}`

export const NewProductPage = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [save, setSave] = useState({
    canShow: false,
    message: ''
  })

  /** @type {import('./providers/postCreateProduct/types').ReqPostCreateProductService} */
  const initForm = {
    images: [],
    code: '',
    name: '',
    price: '',
    quantity: '',
    category: ''
  }
  const [form, setForm] = useState(initForm)
  const { product, getProductById } = useGetProduct()

  const { id } = useGetSearchParams(['id'])

  useEffect(() => {
    if (typeof location === 'undefined') return

    if (!id) return

    getProductById({ id })
  }, [id])

  useEffect(() => {
    if (!product.properties) return

    setForm(product.properties)
  }, [product])

  /** @param {import('react').FormEvent<HTMLFormElement>} e */
  const onSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      if (id) await putUpdateProductService(id, form)
      if (!id) await postCreateProductService(form)
      setIsLoading(false)

      setSave({
        canShow: true,
        message: 'Guardado exitoso'
      })

      setForm(initForm)
    } catch (error) {
      console.error('🚀 ~ file: NewProductPage.jsx ~ line 34 ~ onSubmit ~ error', error.message)
      setIsLoading(false)
      setSave({
        canShow: true,
        message: error.message ?? 'Error al guardar'
      })
    }
  }

  return (
    <div>
      <Loading canShow={isLoading} />

      <Snackbar
        open={save.canShow}
        autoHideDuration={6000}
        onClose={() => setSave({ canShow: false, message: '' })}
        message={save.message}
      />
      <div style={{ position: 'relative' }}>

        <div className={style.positionBackArrow} onClick={() => router.back()}>
          <ProductBackArrow />
        </div>

        <Carrousel listOfImages={form.images} />

        <form className={style.fields} onSubmit={onSubmit}>
          <InputText
            value={form.code}
            type='text'
            name='Código'
            placeholder='100 000 000'
            onChange={code => setForm(e => ({ ...e, code }))}
          />

          <InputText
            value={form.name}
            type='text'
            name='Nombre'
            placeholder='Camiseta'
            onChange={name => setForm(e => ({ ...e, name }))}
          />

          <InputText
            type='text'
            value={form.price}
            name='Precio'
            placeholder='30.000'
            onChange={price => setForm(e => ({ ...e, price }))}
          />

          <InputText
            value={form.quantity}
            type='text'
            name='Cantidad'
            placeholder='10'
            onChange={quantity => setForm(e => ({ ...e, quantity }))}
          />

          <InputText
            value={form.category}
            type='select'
            name={'Categoría'}
            selectOptions={['Selecciona una categoría', 'Mujer', 'Hombre', 'Marcas', 'Rebajas']}
            onChange={category => setForm(e => ({ ...e, category: category.toLocaleLowerCase() }))}
          />

          <Button text='Guardar' type='submit' style={{ marginTop: 16 }} />
        </form>

        <ImagePicker
          MAX_WIDTH={390}
          MAX_HEIGHT={546}
          multiple={true}
          reduceImage={false}
          className={style.positionFab}
          imageBuilder={(props) => <FloatingActionButton icon={<UploadIcon width={28} height={28} />} />}
          onChangeMultiFiles={async (props) => {
            if (props.length === 0) {
              return setSave({
                canShow: true,
                message: 'Elija 3 imágenes'
              })
            }

            if (props.length > 3) {
              return setSave({
                canShow: true,
                message: '3 imágenes como máximo'
              })
            }

            setForm(e => ({ ...e, images: props.map(e => e.url) }))
          }}
        />
      </div>
    </div>
  )
}
