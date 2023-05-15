declare module "icon" {
  import icons from "@/shared/assets/icons/index"
  import React from "react"

  type IconName = keyof typeof icons

  interface IIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    name: IconName
    fill?: string
    size: number
  }

  export const Icon: React.FC<IIconProps>
}