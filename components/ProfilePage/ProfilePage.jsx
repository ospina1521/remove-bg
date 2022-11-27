import { useGetSearchParams } from '#/utils/hooks/useGetSearchParams'
import { Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'
import { Button } from '../global/Button/Button'
import { FillCircleAvatar } from '../global/CircleAvatar/FillCircleAvatar'
import { Header } from '../global/Header/Header'
import { ImagePicker } from '../global/ImagePicker/ImagePicker'
import { InputText } from '../global/InputText/InputText'
import { Loading } from '../global/Loading/Loading'
import style from './Profile.module.css'
import { createUserService } from './provider/createUser.service'
import { updateUserService } from './provider/updateUser.service'
import { useGetUsersByEmail } from './provider/useGetUsersByEmail/useGetUsersByEmail'

/**
 * @param {Object} [props]
 * @param {string} [props.email]
 */
export const routeProfilePage = (props) => {
  const { email = '' } = props ?? {}
  return `/profile?email=${email}`
}

export const ProfilePage = () => {
  const { email } = useGetSearchParams(['email'])

  const [isLoading, setIsLoading] = useState(false)

  const { user, getUserByEmail } = useGetUsersByEmail()

  const [save, setSave] = useState({
    canShow: false,
    message: ''
  })

  const [form, setForm] = useState({
    email: '',
    nombre: '',
    nombreEmpresa: '',
    numeroCelular: '',
    numeroNit: '',
    urlPhoto: ''
  })

  useEffect(() => {
    if (!email) return
    setForm(s => ({ ...s, email: email ?? '' }))

    getUserByEmail({ email })
  }, [email])

  useEffect(() => {
    if (!user.properties) return

    setForm({
      email: user.properties.email,
      urlPhoto: user.properties.urlPhoto ?? '',
      nombre: user.properties.name ?? '',
      nombreEmpresa: user.properties.nameCompany ?? '',
      numeroCelular: user.properties.phone ?? '',
      numeroNit: user.properties.nit ?? ''
    })
  }, [email, user.properties])

  /** @param {import('react').FormEvent<HTMLFormElement>} e */
  const onSubmit = async (e) => {
    e?.preventDefault()
    setIsLoading(true)

    try {
      if (!email) {
        await createUserService({ email: form.email, name: form.nombre, rol: 'provider' })
      }

      if (email) {
        await updateUserService({
          email: form.email,
          name: form.nombre,
          rol: 'provider',
          nit: form.numeroNit,
          phone: form.numeroCelular,
          company: form.nombreEmpresa
        })
      }

      //
      setSave({
        canShow: true,
        message: 'Guardado exitoso'
      })
      setIsLoading(false)
    } catch (error) {
      console.error('🚀 ~ Error Service: ProfilePage.jsx ~ line 67 ~ onSubmit ~ error', error.message)
      setSave({
        canShow: true,
        message: error.message ?? 'Error al guardar'
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
            <InputText
              type='text'
              value={form.nombre}
              placeholder='Mengano'
              name='Nombre'
              onChange={nombre => setForm(s => ({ ...s, nombre }))}
            />
            <InputText
              type='text'
              value={form.numeroNit}
              placeholder='1.000.000-1'
              name='Número de nit.'
              onChange={numeroNit => setForm(s => ({ ...s, numeroNit }))}
            />
          </div>
        </div>

        <InputText
          type='text'
          value={form.nombreEmpresa}
          placeholder='Proveedor S.A.A'
          name='Nombre de empresa'
          onChange={nombreEmpresa => setForm(s => ({ ...s, nombreEmpresa }))}
        />
        <InputText
          type='email'
          value={form.email}
          placeholder='Franken@Luna.com'
          name='Correo electrónico'
          isDisable={Boolean(email)}
          onChange={email => setForm(s => ({ ...s, email }))}
        />
        <InputText
          type='text'
          value={form.numeroCelular}
          placeholder='300 000 00 00'
          name='Número de celular'
          onChange={numeroCelular => setForm(s => ({ ...s, numeroCelular }))}
        />

        <Button text='Guardar' type='submit' style={{ marginTop: '16px' }}/>

      </form>
    </>
  )
}
