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
    category: '',
    quantityAvailable: '',
    priceCost: '',
    priceSale: '',
    brand: '',
    size: ''
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

        <form className={style.fields}>
          <InputText
            readOnly
            value={form.code}
            type='text'
            name='Código'
            placeholder='100 000 000'
            onChange={code => setForm(e => ({ ...e, code }))}
          />

          <InputText
            readOnly
            value={form.name}
            type='text'
            name='Nombre de artículo'
            placeholder='Camiseta'
            onChange={name => setForm(e => ({ ...e, name }))}
          />

          <InputText
            readOnly
            value={form.name}
            type='text'
            name='Marca'
            placeholder='BLOW UP'
            onChange={brand => setForm(e => ({ ...e, brand }))}
          />

          <InputText
            readOnly
            type='text'
            value={form.priceSale}
            name='Precio'
            placeholder='20.000'
            onChange={priceSale => setForm(e => ({ ...e, priceSale }))}
          />

          <InputText
            readOnly
            value={form.size}
            type='text'
            name='Talla'
            placeholder='s, m, l, xl, xxl'
            onChange={size => setForm(e => ({ ...e, size }))}
          />

        </form>

      </div>

      <div className={style.positionBackArrow} onClick={() => router.back()}>
        <ProductBackArrow />
      </div>
    </div>
  )
}
