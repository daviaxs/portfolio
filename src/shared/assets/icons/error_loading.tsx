const errorLoading = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg
      fill="#000000"
      width="19px"
      height="19px"
      viewBox="0 0 24 24"
      id="document-alert-left"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          id="primary"
          d="M4.29,4.29l2-2A1,1,0,0,1,7,2H18a2,2,0,0,1,2,2V20a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V5A1,1,0,0,1,4.29,4.29Z"
          fill="#ffffff"
        ></path>
        <path
          id="secondary"
          d="M4.29,4.29l2-2A1,1,0,0,1,7,2V4A1,1,0,0,1,6,5H4A1,1,0,0,1,4.29,4.29ZM10.5,15.5A1.5,1.5,0,1,0,12,14,1.5,1.5,0,0,0,10.5,15.5ZM12,12a1,1,0,0,0,1-1V8a1,1,0,0,0-2,0v3A1,1,0,0,0,12,12Z"
          fill="#ffffff"
        ></path>
      </g>
    </svg>
  )
}

export default errorLoading
