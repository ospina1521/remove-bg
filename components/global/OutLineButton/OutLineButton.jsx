import style from './OutLineButton.module.css'

/** @param {import('./types').Props} props */
export const OutLineButton = (props) => {
  const { icon = <></>, text = '', ...others } = props

  return (
    <div className={style.button} {...others}>
      <span>{icon}</span>
      <p>{text}</p>
      <svg
        width={4}
        height={7}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity={0.45}
          d="M2.735 3.118s-.098 0-.126-.098C1.643 2.07 1.503 1.985.537 1.02a.532.532 0 01.27-.95.532.532 0 01.388.11l.126.112c1.092 1.092 1.4 1.288 2.45 2.38a.56.56 0 010 .895c-.56.56-1.932 1.862-2.492 2.407a.518.518 0 01-.812 0 .532.532 0 010-.671L.58 5.19l2.044-1.974.112-.098z"
          fill="#000"
        />
      </svg>
    </div>
  )
}
