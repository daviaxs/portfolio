import { Icon } from "@/shared/components/icone/Icone";
import { theme } from "@/shared/theme";

interface ButtonModalIconProps {
  icon: "copy" | "redirect"
}

export function ButtonModalIcon({ icon }: ButtonModalIconProps) {
  return (
    <Icon name={icon} size={48} fill={theme.text.fifth} />
  )
}