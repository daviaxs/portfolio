const world = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3656 2.06904C17.3656 2.06904 21.5656 7.59991 21.5656 15.9999C21.5656 24.3999 17.3656 29.9308 17.3656 29.9308M14.5656 29.9308C14.5656 29.9308 10.3656 24.3999 10.3656 15.9999C10.3656 7.59991 14.5656 2.06904 14.5656 2.06904M2.84741 20.9H29.0845M2.84741 11.1H29.0845M1.96558 16C1.96558 23.7319 8.23359 30 15.9656 30C23.6975 30 29.9656 23.7319 29.9656 16C29.9656 8.26801 23.6975 2 15.9656 2C8.23359 2 1.96558 8.26801 1.96558 16Z"
        stroke={fill}
        strokeWidth="2.60646"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default world
