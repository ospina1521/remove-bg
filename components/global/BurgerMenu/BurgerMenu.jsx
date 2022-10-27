export const BurgerMenu = (props) => {
  return (
    <svg
      data-testid='burgerMenu'
      width={26}
      height={19}
      viewBox="0 0 26 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={26} height={3} rx={1.5} fill="#000" />
      <rect y={8} width={22} height={3} rx={1.5} fill="#000" />
      <rect y={16} width={14} height={3} rx={1.5} fill="#000" />
    </svg>
  )
}
