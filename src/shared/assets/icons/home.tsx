const home = ({ fill = "white", size }: { fill?: string; size: number }) => {
  return (
    <svg width={size + 2} height={size} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.54004 0L0.0400391 7.71428H2.41504V18H7.16504V12.8571H11.915V18H16.665V7.63714L19.04 7.71428L9.54004 0Z" fill={fill} />
    </svg>
  )
}

export default home
