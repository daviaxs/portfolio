const arrowClose = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size + 10} height={size} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.66504 0V5.6H23.04V8.4H8.66504V14L0.0400391 6.916L8.66504 0Z" fill={fill} />
    </svg>
  )
}

export default arrowClose
