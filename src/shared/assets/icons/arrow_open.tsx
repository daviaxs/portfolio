const arrowOpen = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size + 10} height={size} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.415 0V5.6H0.0400391V8.4H14.415V14L23.04 6.916L14.415 0Z" fill={fill}/>
</svg>
  )
}

export default arrowOpen
