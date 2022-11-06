import style from './Button.module.css'

/**
 * @param {Object} props
 * @param {string} props.text
 * @param {undefined | import('react').ButtonHTMLAttributes<HTMLButtonElement>['type']} props.type
 */

export const Button = (props) => {
  const { text, type } = props

  return (
    <button type={type} className={style.button}>
      {text}
    </button>
  )
}
