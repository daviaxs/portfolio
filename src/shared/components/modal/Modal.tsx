import MuiAlert, { AlertProps } from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"
import Stack from "@mui/material/Stack"
import React, { useCallback, useContext, useEffect, useState } from "react"
import styled from "styled-components"

import userErrorLoading from "@/shared/assets/userErrorLoading.svg"
import { Container } from "@/shared/components/container/Container"
import { Icon } from "@/shared/components/icone/Icone"
import { IconButton } from "@/shared/components/icone/IconeButton"
import { useLanguageContext } from "@/shared/contexts/LanguageContext"
import { useModalContext } from "@/shared/contexts/ModalContext"
import { WindowDimensionsContext } from "@/shared/contexts/WindowDimensionsContext"
import { TTitleSecondary } from "@/shared/fonts"
import { languageTexts } from "@/shared/language"
import { theme, themeConstants } from "@/shared/theme"
import config from "../../../../config.json"
import { ButtonModal } from "./utils/buttonModal"

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
    z-index: 9999;
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
  padding: 1rem 5.063rem;
  margin-inline: 2rem;

  background: ${theme.bg.tertiary};
  border: 1px solid ${theme.buttons.bg_default_secondary};
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.5);
  border-radius: 15px;

  .happyFaceIcon {
    position: absolute;
    margin-left: ${(props) => props.iconMarginLeft}rem;
    margin-top: ${(props) => props.iconMarginTop}rem;
  }

  .avatar {
    border-radius: 999px;
    height: 94px;
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
  const { currentLanguage } = useLanguageContext()

  const [user, setUser] = useState({ username: "", avatar: "" })
  const [shouldRender, setShouldRender] = useState(expandedModal)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  useEffect(() => {
    if (expandedModal) {
      setShouldRender(true)
    }
  }, [expandedModal])

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
          })
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  if (user.username && user.avatar) {
    var userName = user.username
    var avatarUrl = `https://cdn.discordapp.com/avatars/${config.id}/${user.avatar}.png`
  } else {
    var userName = currentLanguage ? languageTexts["pt-br"].homePage.texts.modal.loading : languageTexts["en"].homePage.texts.modal.loading
    var avatarUrl = userErrorLoading
  }

  const handleSnackbarClick = () => {
    setOpenSnackbar(true)
  }

  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
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
    navigator.clipboard.writeText(`${userName}`)
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
        iconMarginLeft={
          currentLanguage
            ? windowWidth <= 600 && windowWidth >= 360
              ? 16
              : windowWidth < 360
                ? 11
                : 18
            : windowWidth <= 600 && windowWidth >= 360
              ? 13.5
              : windowWidth < 360
                ? 9
                : 15
        }
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
          {currentLanguage ? languageTexts["pt-br"].homePage.texts.modal.title : languageTexts["en"].homePage.texts.modal.title} <br />{" "}
          {currentLanguage ? languageTexts["pt-br"].homePage.texts.modal.title2 : languageTexts["en"].homePage.texts.modal.title2}
          <Icon name="happyFace" size={windowWidth <= 600 && windowWidth >= 360 ? 28 : windowWidth < 360 ? 24 : 34} className="happyFaceIcon" />
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
          paddingTop={0.5}
          paddingBottom={0.5}
          bg={theme.alert.primary}
        >
          <img src={avatarUrl} alt="Foto de perfil do discord" className="avatar" />
          <TTitleSecondary fontSize={windowWidth <= 600 && windowWidth >= 360 ? 1.5 : windowWidth < 360 ? 1.2 : 2}>
            {userName}
          </TTitleSecondary>
        </Container>

        <ButtonModal.Root>
          <ButtonModal.Actions>
            <ButtonModal.Action onClick={handleButtonCopy} iconName="copy" />
            <span className="separator"/>
            <ButtonModal.Action onClick={() => window.open("https://discord.com/users/852904928166281248", '_blank')} iconName="redirect" />
          </ButtonModal.Actions>
        </ButtonModal.Root>
      </ModalStyle>
      <Stack spacing={2} sx={{ width: "100%" }} className="snackbar">
        <Snackbar open={openSnackbar} autoHideDuration={1000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
            {currentLanguage ? languageTexts["pt-br"].homePage.texts.modal.copied : languageTexts["en"].homePage.texts.modal.copied}
          </Alert>
        </Snackbar>
      </Stack>
    </ModalBoxStyle>
  )
}
