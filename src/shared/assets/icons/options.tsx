const options = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size + 5} height={size} viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 0.5C1 0.5 0.5 1.5 0.5 2C0.5 3.2 1.5 3.5 2 3.5H27C27.5 3.5 28.5 3.2 28.5 2C28.5 0.8 27.5 0.5 27 0.5H2Z" fill={fill} />
      <path d="M2 10C1 10 0.5 11 0.5 11.5C0.5 12.7 1.5 13 2 13H27C27.5 13 28.5 12.7 28.5 11.5C28.5 10.3 27.5 10 27 10H2Z" fill={fill} />
      <path d="M2 20C1 20 0.5 21 0.5 21.5C0.5 22.7 1.5 23 2 23H27C27.5 23 28.5 22.7 28.5 21.5C28.5 20.3 27.5 20 27 20H2Z" fill={fill} />
    </svg>
  )
}

export default options
