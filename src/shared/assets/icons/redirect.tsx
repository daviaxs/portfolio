const redirect = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 26.0002V38.0002C36 39.0611 35.5786 40.0785 34.8284 40.8287C34.0783 41.5788 33.0609 42.0002 32 42.0002H10C8.93913 42.0002 7.92172 41.5788 7.17157 40.8287C6.42143 40.0785 6 39.0611 6 38.0002V16.0002C6 14.9394 6.42143 13.922 7.17157 13.1718C7.92172 12.4217 8.93913 12.0002 10 12.0002H22M30 6.00024H42M42 6.00024V18.0002M42 6.00024L20 28.0002"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  )
}

export default redirect
