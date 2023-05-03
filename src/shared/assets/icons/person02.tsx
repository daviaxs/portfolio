const person02 = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 24.0594C21 19.7795 16.7421 16.3179 11.5 16.3179C6.25786 16.3179 2 19.7795 2 24.0594M11.5001 13.0001C14.554 13.0001 17.0298 10.5243 17.0298 7.47036C17.0298 4.4164 14.554 1.94067 11.5001 1.94067C8.44614 1.94067 5.97041 4.4164 5.97041 7.47036C5.97041 10.5243 8.44614 13.0001 11.5001 13.0001Z"
        stroke={fill}
        strokeWidth="2.6526"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default person02
