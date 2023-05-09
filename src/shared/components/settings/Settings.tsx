import styled from "styled-components"

import { useSettingsContext } from "../../contexts/SettingsContext"
import { TTextSecondary, TTitleSecondary } from "../../fonts"
import { Container } from "../container/Container"
import { Icon } from "../icon/Icon"
import { theme } from "../../theme"
import { useCallback, useEffect, useState } from "react"

const SettingsStyle = styled.div`
  position: fixed;
  right: 0;

  margin-top: 1rem;
  margin-right: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${theme.bg.secondary};
  box-shadow: 9px 11px 0px #0a0d22;
  border-radius: 1.125rem;

  padding: 0.625rem;
  gap: 0.625rem;
  width: 18.75rem;

  .icon {
    background-color: ${theme.buttons.bg_default_secondary};
    border-radius: 0.25rem;
    padding: 0.188rem 0.313rem;
  }

  .line {
    width: 100%;
    height: 0px;

    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .button {
    cursor: pointer;
    transition: background 0.2s ease-out;

    &:active {
      background: #24253d;
    }
  }

  &.openSettings {
    animation: openSettings 0.3s forwards ease-out;
  }

  @keyframes openSettings {
    0% {
      transform: translateX(25rem);
    }
    100% {
      transform: translateX(0rem);

    }
  }

  &.closeSettings {
    animation: closeSettings 0.3s forwards ease-out;
  }

  @keyframes closeSettings {
    0% {
      transform: translateX(0rem);
    }
    100% {
      transform:  translateX(25rem);
    }
  }
`

export const Settings = () => {
  const { options: settings, openSettings, handleOpenSettings } = useSettingsContext()

  const [shouldRender, setShouldRender] = useState(openSettings)

  useEffect(() => {
    if (openSettings) {
      setShouldRender(true)
    }
  }, [openSettings])

  const handleAnimationEnd = useCallback(() => {
    if (!openSettings) {
      setShouldRender(false)
    }
  }, [openSettings])

  if (shouldRender === false) {
    return null
  }

  return (
    <SettingsStyle onAnimationEnd={handleAnimationEnd} className={openSettings ? "openSettings" : "closeSettings"}>
      <Container display="flex" flexDir="column" align="center" gap={0.625} height="" width="100%">
        <TTitleSecondary fontSize={1.25}>Configurações</TTitleSecondary>
        <span className="line"></span>
      </Container>
      <Container display="flex" flexDir="column" height="" width="100%" gap={0.5}>
        {settings.map((option) => (
          <Container
            key={option.label}
            display="flex"
            flexDir="row"
            align="center"
            justifyContent="space-between"
            height="3.375rem"
            width="100%"
            paddingInline={0.625}
            bg={theme.alert.secondary}
            borderRadius={0.75}
            className="button"
            onClick={option.onClick}
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
