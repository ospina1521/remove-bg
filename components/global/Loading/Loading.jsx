import { LinearProgress } from '@mui/material'
import style from './Loading.module.css'

/**
 * @param {Object} props
 * @param {boolean} [props.canShow]
 * @returns
 */
export function Loading (props) {
  const { canShow } = props

  if (canShow === true) {
    return (
      <div className={style.loading}>
        <LinearProgress />
      </div>
    )
  }

  if (canShow === false) return <></>

  return (
    <div className={style.loading}>
      <LinearProgress />
    </div>
  )
}
