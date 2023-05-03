const email = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.1429 11.4286V17.7143C27.1429 22.1143 24.6286 24 20.8571 24H8.28571C4.51429 24 2 22.1143 2 17.7143V8.91429C2 4.51429 4.51429 2.62857 8.28571 2.62857H17.0857M8.28571 9.54286L12.2206 12.6857C13.5154 13.7166 15.64 13.7166 16.9349 12.6857L18.4183 11.504M24 8.28571C25.7357 8.28571 27.1429 6.87861 27.1429 5.14286C27.1429 3.40711 25.7357 2 24 2C22.2643 2 20.8571 3.40711 20.8571 5.14286C20.8571 6.87861 22.2643 8.28571 24 8.28571Z"
        stroke={fill}
        strokeWidth="2.65"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default email
