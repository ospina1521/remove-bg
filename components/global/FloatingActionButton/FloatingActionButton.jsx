import style from './FloatingActionButton.module.css'
/**
 * @param {Object} props
 * @param {JSX.Element} props.children
 * @returns
 */
export const FloatingActionButton = (props) => {
  const { children } = props

  return (
    <button className={style.fab}
      data-testid='fab-icon'
    >
      {children}
    </button>
  )
}
