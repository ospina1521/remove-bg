import { getCookie } from '#/utils/cookies'
import { delay } from '#/utils/delay'
import { decodeToken } from '#/utils/jsonWebToken'
import { Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button } from '../global/Button/Button'
import { FillCircleAvatar } from '../global/CircleAvatar/FillCircleAvatar'
import { Header } from '../global/Header/Header'
import { ImagePicker } from '../global/ImagePicker/ImagePicker'
import { InputText } from '../global/InputText/InputText'
import { Loading } from '../global/Loading/Loading'
import style from './Profile.module.css'

export const routeProfilePage = (isNewProfile = '') => `/profile?isNewProfile=${isNewProfile}`

export const ProfilePage = () => {
  const route = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [save, setSave] = useState({
    canShow: false,
    message: ''
  })
  const [form, setForm] = useState({
    email: '',
    nombre: '',
    nombreEmpresa: '',
    numeroCelular: '',
    numeroNit: ''
  })

  useEffect(() => {
    const token = getCookie('token')
    const payload = decodeToken(token) ?? {}
    const { isNewProfile } = route?.query ?? {}

    if (isNewProfile) return setForm(e => ({ ...e, email: '' }))

    const { email } = payload
    setForm(e => ({ ...e, email }))
  }, [route])

  /** @param {import('react').FormEvent<HTMLFormElement>} e */
  const onSubmit = async (e) => {
    e?.preventDefault()
    setIsLoading(true)

    await delay(1000)
    try {
      // -> send data

      //
      setSave({
        canShow: true,
        message: 'Guardado exitoso'
      })
      setIsLoading(false)
    } catch (error) {
      setSave({
        canShow: true,
        message: 'Error al guardar'
      })
      setIsLoading(false)
    }
  }

  return (
    <>
      <Loading canShow={isLoading} />
      <Snackbar
        open={save.canShow}
        autoHideDuration={6000}
        onClose={() => setSave({ canShow: false, message: '' })}
        message={save.message}
      />
      <Header />

      <form className={style.body} onSubmit={onSubmit}>

        <div className={style.row}>
          <ImagePicker className={style.img} imageBuilder={(props) => {
            const { url } = props

            if (!url) return <FillCircleAvatar isEditable={true} />
            return <img src={url} alt='123' className={style.img}/>
          }}
          />

          <div className={style.col}>
            <InputText type='text' value={form.nombre} placeholder='Mengano' name='Nombre' onChange={nombre => setForm(s => ({ ...s, nombre }))} />
            <InputText type='text' value={form.numeroNit} placeholder='1.000.000-1' name='Número de nit.' onChange={numeroNit => setForm(s => ({ ...s, numeroNit }))}/>
          </div>
        </div>

        <InputText type='text' value={form.nombreEmpresa} placeholder='Proveedor S.A.A' name='Nombre de empresa' onChange={nombreEmpresa => setForm(s => ({ ...s, nombreEmpresa }))}/>
        <InputText type='text' value={form.email} placeholder='Franken@Luna.com' name='Correo electrónico' isDisable={Boolean(!route?.query?.isNewProfile)} onChange={email => setForm(s => ({ ...s, email }))}/>
        <InputText type='text' value={form.numeroCelular} placeholder='300 000 00 00' name='Número de celular' onChange={numeroCelular => setForm(s => ({ ...s, numeroCelular }))}/>

        <div style={{ marginTop: '16px' }}>
          <Button text='Guardar' type='submit' />
        </div>

      </form>
    </>
  )
}
