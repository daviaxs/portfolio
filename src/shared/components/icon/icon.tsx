import icons from "../../assets/icons" 

interface IIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: keyof typeof icons
}

export const Icon: React.FC<IIconProps> = ({
  name,
  className = "icon",
  ...rest
}) => {
  const iconSVG = icons[name]

  if (!iconSVG) {
    return <img className="icon" src={icons.errorLoading} alt="Error ao carregar icone" />
  }

  return (
    <img
      className={className}
      src={iconSVG}
      alt={`${name} icone`}
      {...rest}
    />
  )
}
