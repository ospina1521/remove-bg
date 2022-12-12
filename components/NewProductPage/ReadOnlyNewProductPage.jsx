import { useEffect, useState } from 'react'
import { Carrousel } from '../global/Carrousel/Carrousel'
import { InputText } from '../global/InputText/InputText'
import { Loading } from '../global/Loading/Loading'
import { useGetProduct } from './providers/getProductById/useGetProductByIdService'
import style from './NewProductPage.module.css'
import { useGetSearchParams } from '#/utils/hooks/useGetSearchParams'
import { ProductBackArrow } from '../global/ProductArrowBack'
import { useRouter } from 'next/router'

export const routeToReadOnlyProductPage = (id = '') => `/view-product?id=${id}`

export const ReadOnlyProductPage = () => {
  const [isLoading, setIsLoading] = useState(false)

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
  const router = useRouter()
  const { id } = useGetSearchParams(['id'])

  useEffect(() => {
    setIsLoading(true)
    if (typeof location === 'undefined') return

    if (!id) return

    getProductById({ id })
  }, [id])

  useEffect(() => {
    if (!product.properties) return

    setForm(product.properties)

    setIsLoading(false)
  }, [product])

  return (
    <div style={{ position: 'relative' }} >
      <Loading canShow={isLoading} />

      <div >

        <Carrousel listOfImages={form.images} />

        <form className={style.fields} >
          <InputText
            isDisable
            value={form.code}
            type='text'
            name='Código'
            placeholder='100 000 000'
            onChange={code => setForm(e => ({ ...e, code }))}
          />

          <InputText
            isDisable
            value={form.name}
            type='text'
            name='Nombre'
            placeholder='Camiseta'
            onChange={name => setForm(e => ({ ...e, name }))}
          />

          <InputText
            isDisable
            type='text'
            value={form.price}
            name='Precio'
            placeholder='30.000'
            onChange={price => setForm(e => ({ ...e, price }))}
          />

          <InputText
            isDisable
            value={form.quantity}
            type='text'
            name='Cantidad'
            placeholder='10'
            onChange={quantity => setForm(e => ({ ...e, quantity }))}
          />

          <InputText
            isDisable
            value={form.category}
            type='select'
            name={'Categoría'}
            selectOptions={['Selecciona una categoría', 'Mujer', 'Hombre', 'Marcas', 'Rebajas']}
            onChange={category => setForm(e => ({ ...e, category: category.toLocaleLowerCase() }))}
          />

        </form>

      </div>

      <div className={style.positionBackArrow} onClick={() => router.back()}>
        <ProductBackArrow />
      </div>
    </div>
  )
}
