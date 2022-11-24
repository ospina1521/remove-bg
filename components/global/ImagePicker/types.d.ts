export interface Prop {
  imageBuilder: (props: import('./types').IonChange) => JSX.Element
  
  className?: string
  initialImage?: string
  reduceImage?: boolean
  MAX_HEIGHT?: number
  MAX_WIDTH?: number
  accept?: string // type only images extensions, doc -> https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
  multiple?: boolean // doc -> https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple
  onChangeMultiFiles?: (props: Array<import('./types').IonChange>) => void
}

export interface InitStateFile {
  url: string
  file?: null | File
  size: number
}
export interface IonChange {
  url: string
  size: number
  file?: File | null
}