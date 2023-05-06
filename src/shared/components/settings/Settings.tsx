import styled from "styled-components"

import { Container } from "../container/Container"
import { TTitleSecondary } from "../../fonts"
import icons from "../../assets/icons"
import { Icon } from "../icon/Icon"
import { theme } from "../../theme"

type IconName = keyof typeof icons

interface ISetting {
  icon: IconName
  label: string
  description?: string
  onClick: () => void
}

interface ISettingsProps {
  options: ISetting[]
}

const SettingsStyle = styled.div``

export const Settings: React.FC<ISettingsProps> = ({ options }) => {
  return (
    <SettingsStyle>
      {options.map((option) => (
        <Container display="flex" flexDir="row" height="3.375" width="100%" bg={theme.alert.secondary}>
          <Icon name={option.icon} size={22} />
          <TTitleSecondary fontSize={1.25}>{option.label}</TTitleSecondary>
          {option.description && <p>{option.description}</p>}
        </Container>
      ))}
    </SettingsStyle>
  )
}
