import style from './style.module.css'
/**
 * @param {Object} props
 * @param {boolean} [props.isEditable]
 */
export const FillCircleAvatar = (props) => {
  const { isEditable = false } = props

  const EditableIcon = () => (<svg
    className={style.isEditable}
    data-testid='editableIcon'
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
                              >
    <path
      d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14z"
      fill="#606060"
    />
    <path
      d="M7.2 20.845v-6.273h.207c.528 0 1.056.005 1.584 0a.605.605 0 00.411-.166.556.556 0 00.174-.394.57.57 0 00-.56-.578 38.36 38.36 0 00-1.92.004 1.15 1.15 0 00-1.095 1.073c-.002.054 0 .108 0 .161v6.088c0 .764.494 1.24 1.286 1.24h14.12c.792 0 1.287-.476 1.287-1.24v-6.088c0-.774-.492-1.243-1.3-1.244h-1.62c-.383 0-.652.233-.657.563-.005.338.267.578.658.58h1.718v6.274H7.2z"
      fill="#F7F7F7"
    />
    <path
      d="M13.75 7.998V19.006c-.004.1.006.201.03.3.037.127.12.237.234.311a.604.604 0 00.757-.078.566.566 0 00.168-.359c.005-.064 0-.13 0-.195V7.96c.078.07.128.113.174.157l2.348 2.247c.184.176.398.242.647.163a.546.546 0 00.398-.473c.028-.204-.06-.367-.21-.51a993.234 993.234 0 01-2.675-2.562c-.272-.26-.543-.524-.817-.782-.283-.267-.623-.27-.905 0a1416.043 1416.043 0 00-3.508 3.355c-.271.26-.282.606-.035.842.248.236.606.223.879-.038l2.33-2.234a1.94 1.94 0 00.131-.152l.054.024z"
      fill="#F7F7F7"
    />
  </svg>)

  return (
    <div className={style.img} >
      <svg
        data-testid='fill-circle-avatar'
        width={125}
        height={125}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M65.656 118.25h-6.552a4.374 4.374 0 00-.854-.182 51.68 51.68 0 01-19.6-5.123c-17.149-8.397-27.648-22.057-31.316-40.854-.406-2.127-.588-4.296-.882-6.452v-6.55c.089-.306.15-.62.182-.938a50.865 50.865 0 015.138-19.44C21.753 18.893 37.867 8.046 60.028 6.633a51.64 51.64 0 0130.799 7.753c16.967 10.47 26.151 25.767 27.327 45.669a51.983 51.983 0 01-6.538 28.608 55.077 55.077 0 01-39.66 28.72c-2.044.391-4.186.587-6.3.867zm-3.234-48.902v-.196H51.838A18.636 18.636 0 0033.22 84.31c-.518 2.645-.826 5.402.966 7.642a22.157 22.157 0 004.718 4.282 41.122 41.122 0 0050.09-2.42 7.755 7.755 0 002.8-6.243 18.36 18.36 0 00-16.324-18.195c-4.283-.35-8.651-.028-13.047-.028zm18.395-27.67a18.484 18.484 0 00-11.422-17.084 18.498 18.498 0 00-20.158 4.02 18.488 18.488 0 0013.115 31.553 18.51 18.51 0 0013.055-5.43 18.5 18.5 0 005.41-13.059z"
          fill="#808080"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M62.38 3.402C29.807 3.402 3.402 29.8 3.402 62.364c0 32.564 26.405 58.963 58.978 58.963s58.978-26.399 58.978-58.963c0-32.563-26.405-58.962-58.978-58.962zM.598 62.364C.598 28.252 28.26.598 62.38.598c34.12 0 61.782 27.654 61.782 61.766 0 34.113-27.661 61.767-61.782 61.767-34.12 0-61.782-27.654-61.782-61.767z"
          fill="#808080"
        />
      </svg>
      {isEditable && <EditableIcon />}
    </div>
  )
}
