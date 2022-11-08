
export const CartIcon = (props) => {
  return (
    <svg
      data-testid='icon-cart'
      width={12}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#prefix__pattern0)" d="M0 0h12v12H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image0_300_368" transform="scale(.00195)" />
        </pattern>
        <image
          id="prefix__image0_300_368"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}
