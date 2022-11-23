
/**
 * @param {import('react').SVGProps<SVGSVGElement>} props
 */
export const ProductBackArrow = (props) => {
  return (
    <div style={{
      borderRadius: 1000,
      background: '#0006',
      backdropFilter: 'blur(14px)',
      height: '65px',
      width: '65px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <svg
        width={34}
        data-testid='productArrowBack'
        height={34}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M19.593 26.917a1.417 1.417 0 01-1.105-.525l-6.843-8.5a1.417 1.417 0 010-1.799l7.083-8.5a1.418 1.418 0 112.182 1.814L14.578 17l6.12 7.593a1.416 1.416 0 01-1.105 2.324z"
          fill="#fff"
        />
      </svg>
    </div>
  )
}
