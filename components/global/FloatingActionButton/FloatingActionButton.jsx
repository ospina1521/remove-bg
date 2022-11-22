import style from './FloatingActionButton.module.css'

/** @param {import('./types').Props} props */
export const FloatingActionButton = (props) => {
  const { icon, ...others } = props

  return (
    <div className={style.fab} data-testid='fab-icon' {...others}>
      {icon}
    </div>
  )
}
