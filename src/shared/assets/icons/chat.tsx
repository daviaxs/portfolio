const chat = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size + 1} height={size} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.26227 11.055H16.8178M6.26227 7.03055H12.5956M2.04004 19.3951V4.01222C2.04004 2.9009 2.98522 2 4.15115 2H18.9289C20.0949 2 21.04 2.9009 21.04 4.01222V14.0733C21.04 15.1847 20.0949 16.0855 18.9289 16.0855H7.27691C6.63559 16.0855 6.02905 16.3634 5.62841 16.8407L3.16792 19.7722C2.79393 20.2178 2.04004 19.9658 2.04004 19.3951Z"
        stroke={fill}
        strokeWidth="2.25725"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default chat
