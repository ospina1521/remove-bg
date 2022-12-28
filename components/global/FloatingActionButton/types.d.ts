import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: JSX.Element
}
