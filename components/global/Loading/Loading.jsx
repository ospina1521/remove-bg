import { LinearProgress } from '@mui/material'
import style from './Loading.module.css'

export function Loading () {
  return (
    <div className={style.loading}>
      <LinearProgress />
    </div>
  )
}
