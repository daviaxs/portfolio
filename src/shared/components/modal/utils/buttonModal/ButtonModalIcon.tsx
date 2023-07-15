import { Icon } from "@/shared/components/icone/Icone";

interface ButtonModalIconProps {
  icon: "copy" | "redirect"
}

export function ButtonModalIcon({ icon }: ButtonModalIconProps) {
  return (
    <Icon name={icon} size={48} />
  )
}