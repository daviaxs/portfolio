import styled from "styled-components"

import { useSettingsContext } from "../../contexts/SettingsContext"
import { Container } from "../container/Container"
import { TTitleSecondary } from "../../fonts"
import { Icon } from "../icon/Icon"
import { theme } from "../../theme"

const SettingsStyle = styled.div``

export const Settings = () => {
  const { settings } = useSettingsContext()

  return (
    <SettingsStyle>
      {settings.map((option) => (
        <Container display="flex" flexDir="row" height="3.375" width="100%" bg={theme.alert.secondary}>
          <Icon name={option.icon} size={22} />
          <TTitleSecondary fontSize={1.25}>{option.label}</TTitleSecondary>
          {option.description && <p>{option.description}</p>}
        </Container>
      ))}
    </SettingsStyle>
  )
}
