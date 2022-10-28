import style from './Logo.module.css'

export const Logo = (props) => {
  return (
    <div className={style.box}>
      <svg
        data-testid='logo'
        width={109}
        height={54}
        viewBox="0 0 109 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M65.682 27.556h-11.82c-.666 0-.714.024-.762.691-.119 1.788-.31 3.575-.715 5.338-1.143 4.909-3.55 9.079-7.124 12.558-2.026 1.954-4.242 3.645-6.744 4.932a24.264 24.264 0 01-7.005 2.335c-2.621.477-5.266.5-7.887.191a26.054 26.054 0 01-8.293-2.383A27.258 27.258 0 012.37 38.255a24.69 24.69 0 01-2.358-9.364c-.024-.31 0-.62 0-.953 0-.286.166-.43.429-.453.19-.024.357 0 .548 0h23.614c.476-.024.571-.095.595-.572.096-1.048.19-2.12.334-3.169.31-2.36.93-4.67 1.859-6.863a25.377 25.377 0 012.668-4.86c1.644-2.336 3.646-4.29 5.91-6.03a27.354 27.354 0 016.338-3.597C44.951 1.345 47.691.75 50.551.654c2.502-.071 4.98.143 7.434.715 4.242.977 8.03 2.836 11.295 5.719 2.359 2.073 4.241 4.503 5.742 7.268 1.263 2.335 2.193 4.79 2.693 7.362.31 1.669.405 3.36.572 5.052.072.691-.048.763-.739.787H65.682z"
          fill="#000"
        />
        <path
          d="M68.946 30.797H81.17c.43-.024.572-.143.572-.572-.024-1.572-.024-3.121-.095-4.694-.096-2.12-.5-4.194-1.049-6.243a28.38 28.38 0 00-2.335-5.957c-1.263-2.383-2.812-4.575-4.67-6.505-1.049-1.096-2.216-2.097-3.336-3.122-.43-.381-.429-.548.071-.834A23.81 23.81 0 0176.976.511c3.098-.62 6.243-.667 9.365-.19 1.811.286 3.55.714 5.242 1.358a26.475 26.475 0 015.243 2.669 26.525 26.525 0 015.432 4.765 26.371 26.371 0 014.576 7.41 26.383 26.383 0 011.977 10.295 26.593 26.593 0 01-1.501 8.626 26.406 26.406 0 01-5.242 8.888 26.606 26.606 0 01-6.53 5.337c-2.906 1.668-6.004 2.764-9.316 3.241a27.073 27.073 0 01-9.794-.357 26.086 26.086 0 01-8.602-3.598 26.159 26.159 0 01-6.195-5.6 27.428 27.428 0 01-3.789-6.315 24.429 24.429 0 01-1.644-5.504c-.095-.548.024-.691.572-.691 4.075-.048 8.125-.048 12.176-.048z"
          fill="#000"
        />
      </svg>
      <h1 className={style.name} >SOROPA</h1>
    </div>

  )
}
