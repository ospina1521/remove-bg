import { delay } from '#/utils/delay'
import { useState } from 'react'
import { FillCircleAvatar } from '../global/CircleAvatar/FillCircleAvatar'
import { Header } from '../global/Header/Header'
import { ImagePicker } from '../global/ImagePicker/ImagePicker'
import { InputText } from '../global/InputText/InputText'
import { Loading } from '../global/Loading/Loading'
import style from './Profile.module.css'

export const routeProfilePage = () => '/profile'

export const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(false)

  /** @param {import('react').FormEvent<HTMLFormElement>} e */
  const onSubmit = async (e) => {
    e?.preventDefault()
    setIsLoading(true)

    await delay(1000)
    try {
      // -> send data

      //
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loading />}
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
            <InputText type='text' placeholder='mengano' name='la empresa' />
            <InputText type='text' placeholder='1.000.000-1' name='número de nit.' />
          </div>
        </div>

        <InputText type='text' placeholder='mengano' name='representante legal' />
        <InputText type='text' placeholder='Franken@Luna.com' name='correo electrónico' isDisable={true} />
        <InputText type='text' placeholder='300 000 00 00' name='número de celular' />

      </form>
    </>
  )
}
