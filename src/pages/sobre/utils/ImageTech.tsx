import React from "react"

import logosTech from "../../../shared/assets/logos-tech"

interface IImageTechProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  img: keyof typeof logosTech
}

export const ImageTech: React.FC<IImageTechProps> = ({ img, className, ...rest }) => {
  const ImgTech = logosTech[img]

  return (
    <div className={className} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <ImgTech/>
    </div>
  )
}
