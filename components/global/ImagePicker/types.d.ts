
export interface InitStateFile {
  url: string
  file?: null | File
  size: string
}
export interface IonChange {
  url: string
  size: string
  file?: File | null
}

export interface Prop {
  imageBuilder: (props: IonChange) => JSX.Element

  className?: string
  initialImage?: string
  reduceImage?: boolean
  MAX_HEIGHT?: number
  MAX_WIDTH?: number
  accept?: string // type only images extensions, doc -> https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
  multiple?: boolean // doc -> https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple
  onChangeMultiFiles?: (props: Array<IonChange>) => void
  onChangeSingleFiles?: (props: IonChange) => void
}
