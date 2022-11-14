import style from './FloatingActionButton.module.css'
/**
 * @param {Object} props
 * @param {JSX.Element} props.icon
 * @returns
 */
export const FloatingActionButton = (props) => {
  const { icon } = props

  return (
    <button className={style.fab} data-testid='fab-icon'>
      {icon}
    </button>
  )
}
