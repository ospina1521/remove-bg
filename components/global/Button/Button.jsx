import style from './Button.module.css'

/** @param {import('./types').PropsButton} props */
export const Button = (props) => {
  const { text, type, ...others } = props

  return (
    <button type={type} className={style.button} {...others}>
      {text}
    </button>
  )
}
