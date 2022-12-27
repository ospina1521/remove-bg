// @ts-ignore
import { Modal, Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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
import { Button } from '../global/Button/Button'
import { deleteProductByIdService } from './providers/deleteProduct/deleteProduct'

export const routeToNewProductPage = (id = '') => `/new-product?id=${id}`

export const NewProductPage = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [snackBar, setSnackBar] = useState({
    canShow: false,
    message: ''
  })

  const [modal, setModal] = useState({
    canShow: false,
    message: ''
  })

  /** @type {import('./providers/postCreateProduct/types').ReqPostCreateProductService} */
  const initForm = {
    images: [],
    code: '',
    name: '',
    category: '',
    //
    quantityAvailable: '',
    priceCost: '',
    priceSale: '',
    brand: '',
    size: ''
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

      setSnackBar({
        canShow: true,
        message: 'Guardado exitoso'
      })

      setForm(initForm)
    } catch (error) {
      console.error('🚀 ~ Error Service: NewProductPage.jsx ~ line 34 ~ onSubmit ~ error', error.message)
      setIsLoading(false)
      setSnackBar({
        canShow: true,
        message: error.message ?? 'Error al guardar'
      })
    }
  }

  return (
    <div style={{ position: 'relative' }} >
      <Loading canShow={isLoading} />

      <Snackbar
        open={snackBar.canShow}
        autoHideDuration={6000}
        onClose={() => setSnackBar({ canShow: false, message: '' })}
        message={snackBar.message}
      />
      <div >

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
            name='Nombre de artículo'
            placeholder='Camiseta'
            onChange={name => setForm(e => ({ ...e, name }))}
          />

          <InputText
            value={form.name}
            type='text'
            name='Marca'
            placeholder='BLOW UP'
            onChange={brand => setForm(e => ({ ...e, brand }))}
          />

          <InputText
            value={form.priceCost}
            type='text'
            name='Precio costo'
            placeholder='10.000'
            onChange={priceCost => setForm(e => ({ ...e, priceCost }))}
          />

          <InputText
            type='text'
            value={form.priceSale}
            name='Precio venta'
            placeholder='20.000'
            onChange={priceSale => setForm(e => ({ ...e, priceSale }))}
          />

          <InputText
            value={form.quantityAvailable}
            type='text'
            name='Cantidad disponible'
            placeholder='10'
            onChange={quantityAvailable => setForm(e => ({ ...e, quantityAvailable }))}
          />

          <InputText
            value={form.size}
            type='text'
            name='Talla'
            placeholder='s, m, l, xl, xxl'
            onChange={size => setForm(e => ({ ...e, size }))}
          />

          <InputText
            value={form.category}
            type='select'
            name={'Categoría'}
            selectOptions={['Selecciona una categoría', 'Mujer', 'Hombre', 'Marcas', 'Rebajas']}
            onChange={category => setForm(e => ({ ...e, category: category.toLocaleLowerCase() }))}
          />

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '16px',
            justifyContent: 'space-evenly'
          }}
          >
            {id && <Button text='Eliminar' type='button' style={{ margin: 0 }} onClick={() => setModal({ canShow: true, message: 'Por favor confirme la eliminación del producto' })}/>
            }
            <Button text='Guardar' type='submit' style={{ margin: 0 }} />
          </div>

        </form>

      </div>

      <div className={style.positionBackArrow} onClick={() => router.back()}>
        <ProductBackArrow />
      </div>

      <div
        className={style.positionFab}
      >
        <ImagePicker
          MAX_WIDTH={390}
          MAX_HEIGHT={546}
          multiple={true}
          // @ts-ignore
          imageBuilder={(props) => <FloatingActionButton icon={<UploadIcon width={28} height={28} />} />}
          onChangeMultiFiles={async (props) => {
            if (props.length === 0) {
              return setSnackBar({
                canShow: true,
                message: 'Elija 3 imágenes'
              })
            }

            if (props.length > 3) {
              return setSnackBar({
                canShow: true,
                message: '3 imágenes como máximo'
              })
            }

            setForm(e => ({ ...e, images: props.map(e => e.url) }))
          }}
        />
      </div>

      <Modal
        open={modal.canShow}
        onClose={() => setModal(s => ({ ...s, canShow: false }))}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className={style.modal}>
          <h2 >Eliminar</h2>
          <p id="parent-modal-description">
            {modal.message}
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '16px',
            justifyContent: 'space-evenly',
            gap: '16px'
          }}
          >
            <Button text='Regresar' onClick={() => setModal({ canShow: false, message: '' })}/>
            <Button text='Confirmar' onClick={async () => {
              try {
                setIsLoading(true)
                setModal({ canShow: false, message: '' })
                // @ts-ignore
                await deleteProductByIdService(id)

                setSnackBar({
                  canShow: true,
                  message: 'Eliminación exitosa'
                })

                history.back()
                setIsLoading(false)
              } catch (error) {
                setIsLoading(false)
                setSnackBar({
                  canShow: true,
                  message: error.message ?? 'Error al eliminar'
                })
              }
            }}
            />
          </div>

        </div>
      </Modal>

    </div>
  )
}
