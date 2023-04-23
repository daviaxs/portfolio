import { useContext, useEffect, useState } from "react"
import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import config from "../../../../config.json"
import styled from "styled-components"

import userErrorLoading from "../../assets/userErrorLoading.svg"
import { ButtonPrimary } from "../buttons/ButtonPrimary"
import { theme, themeConstants } from "../../theme"
import { Container } from "../container/Container"
import { TTitleSecondary } from "../../fonts"
import { Icon } from "../icon/Icon"
import { IconButton } from "../icon/IconButton"

interface IModalBoxProps {
  width: string | number
}

const ModalBoxStyle = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  z-index: 9999;

  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);

  .buttonClose {
    position: absolute;
    top: 0;
    right: 0;

    margin-right: 1rem;
    margin-top: 1.5rem;
  }
`

const ModalStyle = styled.div<IModalBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width};
  padding: 1.563rem 5.063rem;
  margin-inline: 2rem;

  background: ${theme.bg.tertiary};
  border: 1px solid ${theme.buttons.bg_default_secondary};
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.5);
  border-radius: 15px;

  .icon {
    position: absolute;
    margin-left: 18rem;
    margin-top: 2rem;
  }

  .avatar {
    border-radius: 999px;
    height: 94px;
  }

  .buttonCopy {
    margin-top: ${themeConstants.sizes.lg}rem;
  }
`

export function Modal() {
  const url = `https://server-portfolio-jet.vercel.app/user/${config.id}`

  const [user, setUser] = useState({ username: "", avatar: "", discriminator: "" })
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)

        if (response.ok) {
          var data = await response.json()
        } else {
          console.error(response.status, response.statusText)
        }

        if (data) {
          setUser({
            username: data.username,
            avatar: data.avatar,
            discriminator: data.discriminator,
          })
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  if (user.username && user.discriminator && user.avatar) {
    var userName = user.username
    var userTag = user.discriminator
    var avatarUrl = `https://cdn.discordapp.com/avatars/${config.id}/${user.avatar}.png`
  } else {
    var userName = "Carregando..."
    var userTag = "0000"
    var avatarUrl = userErrorLoading
  }

  return (
    <ModalBoxStyle>
      <IconButton height={3} width={3} className="buttonClose">
        <Icon name="xClose" size={23} fill={theme.text.fifth} />
      </IconButton>
      <ModalStyle width="">

        <TTitleSecondary textAlign="center" display="flex" whiteSpace="nowrap">
          Entre em contato comigo <br /> pelo Discord
          <Icon name="happyFace" size={33} />
        </TTitleSecondary>

        <Container
          display="flex"
          height="8.563rem"
          width="calc(100% + 5rem)"
          align="center"
          justifyContent="center"
          gap={themeConstants.sizes["4xl"]}
          marginTop={themeConstants.sizes["8xl"]}
          borderRadius={themeConstants.sizes["3xl"]}
          bg={theme.alert.primary}
        >
          <img src={avatarUrl} alt="Foto de perfil do discord" className="avatar" />
          <TTitleSecondary>
            {userName}#{userTag}
          </TTitleSecondary>
        </Container>

        <ButtonPrimary className="buttonCopy" onClick={() => alert("Hello world")}>
          Copiar
        </ButtonPrimary>

      </ModalStyle>
    </ModalBoxStyle>
  )
}
