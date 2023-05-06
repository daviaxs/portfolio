import styled from "styled-components"

import { useSettingsContext } from "../../contexts/SettingsContext"
import { Container } from "../container/Container"
import { TTextSecondary, TTitleSecondary } from "../../fonts"
import { Icon } from "../icon/Icon"
import { theme } from "../../theme"

const SettingsStyle = styled.div`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${theme.bg.secondary};
  border-radius: 1.125rem;

  padding: 0.625rem;
  gap: 0.625rem;

  width: 18.75rem;

  .icon {
    background-color: ${theme.buttons.bg_default_secondary};
    border-radius: 0.25rem;
    padding: 0.188rem 0.313rem;
  }
`

export const Settings = () => {
  const { settings } = useSettingsContext()

  return (
    <SettingsStyle>
      <Container display="flex" flexDir="column" height="" width="100%" gap={0.5}>
        {settings.map((option) => (
          <Container
            display="flex"
            flexDir="row"
            align="center"
            justifyContent="space-between"
            height="3.375rem"
            width="100%"
            paddingInline={0.625}
            bg={theme.alert.secondary}
            borderRadius={0.75}
          >
            <Container display="flex" align="center" height="" width="" gap={0.5}>
              <Icon name={option.icon} size={28} />
              <TTitleSecondary fontSize={1.25}>{option.label}</TTitleSecondary>
            </Container>
            {option.description && (
              <TTextSecondary fontSize={1} txtColor={theme.text.quaternary}>
                {option.description}
              </TTextSecondary>
            )}
          </Container>
        ))}
      </Container>
    </SettingsStyle>
  )
}
