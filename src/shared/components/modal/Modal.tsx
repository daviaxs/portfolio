import React, { useCallback, useContext, useEffect, useState } from "react"
import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"
import config from "../../../../config.json"
import Stack from "@mui/material/Stack"
import styled from "styled-components"

import userErrorLoading from "../../assets/userErrorLoading.svg"
import { useModalContext } from "../../contexts/ModalContext"
import { ButtonPrimary } from "../buttons/ButtonPrimary"
import { theme, themeConstants } from "../../theme"
import { Container } from "../container/Container"
import { IconButton } from "../icon/IconButton"
import { TTitleSecondary } from "../../fonts"
import { Icon } from "../icon/Icon"

interface IModalBoxProps {
  width: string | number

  iconMarginLeft: number
  iconMarginTop: number
}

const ModalBoxStyle = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  z-index: 9999;

  backdrop-filter: blur(3px);

  .buttonClose {
    position: absolute;
    top: 0;
    right: 0;

    margin-right: 1rem;
    margin-top: 1.5rem;
  }

  .snackbar {
    position: fixed;
  }

  &.openModalBG {
    animation: openModalBG 0.3s forwards ease-out;
  }

  @keyframes openModalBG {
    0% {
      backdrop-filter: blur(0px);
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(3px);
    }
  }

  &.closeModalBG {
    animation: closeModalBG 0.3s forwards ease-out;
  }

  @keyframes closeModalBG {
    0% {
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(3px);
    }
    100% {
      backdrop-filter: blur(0px);
      background-color: rgba(0, 0, 0, 0);
      visibility: hidden;
    }
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
    margin-left: ${(props) => props.iconMarginLeft}rem;
    margin-top: ${(props) => props.iconMarginTop}rem;
  }

  .avatar {
    border-radius: 999px;
    height: 94px;
  }

  .buttonCopy {
    margin-top: ${themeConstants.sizes.lg}rem;
  }

  &.openModal {
    animation: openModal 0.3s forwards ease-out;
  }

  @keyframes openModal {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  &.closeModal {
    animation: closeModal 0.3s forwards ease-out;
  }

  @keyframes closeModal {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export function Modal() {
  const url = `https://server-portfolio-jet.vercel.app/user/${config.id}`

  const { width: windowWidth, height: windowHeight } = useContext(WindowDimensionsContext)
  const { toggleModal, expandedModal } = useModalContext()

  const [user, setUser] = useState({ username: "", avatar: "", discriminator: "" })
  const [shouldRender, setShouldRender] = useState(expandedModal)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  useEffect(() => {
    if (expandedModal) {
      setShouldRender(true)
    }
  }, [expandedModal])

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(url)

  //       if (response.ok) {
  //         var data = await response.json()
  //       } else {
  //         console.error(response.status, response.statusText)
  //       }

  //       if (data) {
  //         setUser({
  //           username: data.username,
  //           avatar: data.avatar,
  //           discriminator: data.discriminator,
  //         })
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  if (user.username && user.discriminator && user.avatar) {
    var userName = user.username
    var userTag = user.discriminator
    var avatarUrl = `https://cdn.discordapp.com/avatars/${config.id}/${user.avatar}.png`
  } else {
    var userName = "Carregando..."
    var userTag = "0000"
    var avatarUrl = userErrorLoading
  }

  const handleSnackbarClick = () => {
    setOpenSnackbar(true)
  }

  const handlesnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }

    setOpenSnackbar(false)
  }

  const handleAnimationEnd = useCallback(() => {
    if (!expandedModal) {
      setShouldRender(false)
    }
  }, [expandedModal])

  if (!shouldRender) {
    return null
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`${userName}#${userTag}`)
  }

  const handleButtonCopy = () => {
    handleCopy()
    handleSnackbarClick()
  }

  return (
    <ModalBoxStyle className={expandedModal ? "openModalBG" : "closeModalBG"}>
      <IconButton height={3} width={3} className={`buttonClose ${expandedModal ? "animation-scale" : "animation-scale-out"}`} onClick={toggleModal}>
        <Icon name="xClose" size={23} fill={theme.text.fifth} />
      </IconButton>

      <ModalStyle
        width={windowWidth <= 600 ? "calc(100% - 2rem)" : ""}
        iconMarginLeft={windowWidth <= 600 && windowWidth >= 360 ? 16 : windowWidth < 360 ? 11 : 18}
        iconMarginTop={windowWidth < 360 ? 1.3 : 2}
        className={expandedModal ? "openModal" : "closeModal"}
        onAnimationEnd={handleAnimationEnd}
      >
        <TTitleSecondary
          textAlign="center"
          display="flex"
          whiteSpace="nowrap"
          fontSize={windowWidth <= 600 && windowWidth >= 360 ? 1.8 : windowWidth < 360 ? 1.2 : 2}
        >
          Entre em contato comigo <br /> pelo Discord
          <Icon name="happyFace" size={windowWidth <= 600 && windowWidth >= 360 ? 28 : windowWidth < 360 ? 24 : 34} />
        </TTitleSecondary>

        <Container
          display="flex"
          flexDir={windowWidth < 450 ? "column" : "row"}
          height=""
          width={windowWidth < 360 ? "calc(100% + 8rem)" : "calc(100% + 5rem)"}
          align="center"
          justifyContent="center"
          gap={themeConstants.sizes["4xl"]}
          marginTop={windowHeight < 350 ? themeConstants.sizes["2xl"] : themeConstants.sizes["8xl"]}
          borderRadius={themeConstants.sizes["3xl"]}
          paddingIncolumn={0.5}
          bg={theme.alert.primary}
        >
          <img src={avatarUrl} alt="Foto de perfil do discord" className="avatar" />
          <TTitleSecondary fontSize={windowWidth <= 600 && windowWidth >= 360 ? 1.5 : windowWidth < 360 ? 1.2 : 2}>
            {userName}#{userTag}
          </TTitleSecondary>
        </Container>

        <ButtonPrimary className="buttonCopy" onClick={handleButtonCopy} disabled={user.username ? false : true}>
          <TTitleSecondary txtColor={theme.text.fifth} fontSize={windowWidth <= 600 ? 1.5 : 2}>
            Copiar
          </TTitleSecondary>
        </ButtonPrimary>
      </ModalStyle>
      <Stack spacing={2} sx={{ width: "100%" }} className="snackbar">
        <Snackbar open={openSnackbar} autoHideDuration={1000} onClose={handlesnackbarClose}>
          <Alert onClose={handlesnackbarClose} severity="success" sx={{ width: "100%" }}>
            Copiado!
          </Alert>
        </Snackbar>
      </Stack>
    </ModalBoxStyle>
  )
}
