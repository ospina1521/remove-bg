import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button } from '../global/Button/Button'
import { Carrousel } from '../global/Carrousel/Carrousel'
import { FloatingActionButton } from '../global/FloatingActionButton/FloatingActionButton'
import { UploadIcon } from '../global/icons/UploadIcon/UploadIcon'
import { ImagePicker } from '../global/ImagePicker/ImagePicker'
import { InputText } from '../global/InputText/InputText'
import { postCreateProductService } from '../global/InputText/providers/postCreateProduct.service'
import { ProductBackArrow } from '../global/ProductArrowBack'
import style from './NewProductPage.module.css'

export const routeToNewProductPage = () => '/new-product'

export const NewProductPage = () => {
  const router = useRouter()

  /** @type {import('../global/InputText/providers/types').ReqPostCreateProductService} */
  const initForm = {
    image: [],
    code: '',
    name: '',
    price: '',
    quantity: '',
    category: ''
  }
  const [form, setForm] = useState(initForm)

  /** @param {import('react').FormEvent<HTMLFormElement>} e */
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const resp = await postCreateProductService(form)
      console.log('🚀 ~ file: NewProductPage.jsx ~ line 36 ~ onSubmit ~ resp', resp)
    } catch (error) {
      console.error('🚀 ~ file: NewProductPage.jsx ~ line 34 ~ onSubmit ~ error', error.message)
    }
  }

  return (
    <div style={{ position: 'relative' }}>

      <div className={style.positionBackArrow} onClick={() => router.back()}>
        <ProductBackArrow />
      </div>

      <Carrousel listOfImages={form.image} />

      <form className={style.fields} onSubmit={onSubmit}>
        <InputText
          type='text'
          name='Código'
          placeholder='100 000 000'
          onChange={code => setForm(e => ({ ...e, code }))}
        />

        <InputText
          type='text'
          name='Nombre'
          placeholder='Camiseta'
          onChange={name => setForm(e => ({ ...e, name }))}
        />

        <InputText
          type='text'
          name='Precio'
          placeholder='30.000'
          onChange={price => setForm(e => ({ ...e, price }))}
        />

        <InputText
          type='text'
          name='Cantidad'
          placeholder='10'
          onChange={quantity => setForm(e => ({ ...e, quantity }))}
        />

        <InputText
          type='select'
          name='Categoría'
          selectOptions={['Selecciona una categoría', 'Mujer', 'Hombre', 'Marcas', 'Rebajas']}
          onChange={category => setForm(e => ({ ...e, category }))}
        />

        <Button text='Guardar' type='submit' style={{ marginTop: 16 }} />
      </form>

      <ImagePicker
        MAX_WIDTH={390}
        MAX_HEIGHT={545}
        multiple={true}
        className={style.positionFab}
        onChangeMultiFiles={(props) => {
          const _listOfImages = Array.from({ length: 3 }).map((e, i) => {
            return props[i].url || ''
          })
          setForm(e => ({ ...e, image: _listOfImages }))
        }}
        imageBuilder={(props) =>

          <FloatingActionButton icon={<UploadIcon width={28} height={28} />} />
        }
      />
    </div>
  )
}
