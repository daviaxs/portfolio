import icons from "../../assets/icons" 

interface IIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: keyof typeof icons
  size?: number
}

export const Icon: React.FC<IIconProps> = ({
  name,
  className = "icon",
  size = 1,
  ...rest
}) => {
  const iconSVG = icons[name]

  if (!iconSVG) {
    return null
  }

  return (
    <img
      className={className}
      src={iconSVG}
      alt={`${name} icone`}
      style={{ transform: `scale(${size})` }}
      {...rest}
    />
  )
}
