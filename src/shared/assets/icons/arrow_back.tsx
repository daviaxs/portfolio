const arrowBack = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size + 5} height={size} viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.9665 2L2.04004 12L10.9665 22M27.04 12.0001H2.29009"
        stroke={fill}
        stroke-width="3"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default arrowBack
