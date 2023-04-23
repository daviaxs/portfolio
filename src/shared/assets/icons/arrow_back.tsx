const arrowBack = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size + 5} height={size} viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.99983 22.9999C10.4998 23.4999 11.6665 23.3333 11.9998 22.9999C12.7997 22.1999 12 21 12 21L5.5 13.5H27C28 13.5 28.5 12.5 28.5 12C28.5 11 27.5 10.5 27 10.4999H5.5L12 2.99977C12.3333 2.49982 12.5 1.49994 12 0.999924C11.5 0.499906 10.3333 0.833257 10 0.999924C7.33328 3.99992 1.79983 10.1999 0.999827 10.9999C0.199827 11.7999 0.666494 12.6666 0.999827 12.9999L9.99983 22.9999Z"
        fill={fill}
      />
    </svg>
  )
}

export default arrowBack