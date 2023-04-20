import icons from "../../assets/icons"

interface IIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: keyof typeof icons
  fill?: string
  size: number
}

export const Icon: React.FC<IIconProps> = ({ name, fill, size, className = "icon", ...rest }) => {
  const IconSVG = icons[name]

  if (!IconSVG) {
    return <icons.errorLoading size={19} />
  }

  return (
    <div className={className} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <IconSVG size={size} fill={fill} />
    </div>
  )
}
