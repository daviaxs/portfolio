import { useState } from "react"
import styled from "@emotion/styled"
import { Skeleton, Stack } from "@mui/material"

import { Container } from "../../../shared/components/container/Container"
import { THeadingLinearPrimary } from "../../../shared/fonts"
import { theme, themeConstants } from "../../../shared/theme"
import Imgs from "../../../shared/assets/index"

interface ICardProfileProps {
  width: string
  label: string
  fontSize: number
  lineWidth?: number
  flexDir?: "row" | "column"
}

const CardProfileStyle = styled.div<ICardProfileProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDir};
  align-items: center;
  justify-content: start;

  width: ${(props) => props.width};
  gap: ${themeConstants.sizes["4xl"]}rem;
  padding: ${themeConstants.sizes.lg}rem ${themeConstants.sizes["2xl"]}rem;

  background: ${theme.alert.tertiary};
  border-radius: ${themeConstants.sizes["4xl"]}rem;
  border: 1px solid ${theme.buttons.bg_default_secondary};

  .avatar {
    height: 4.5rem;

    border-radius: 999px;
    border: 2px solid #44476a;
  }

  .line {
    width: ${(props) => props.lineWidth}rem;
    height: 0.5rem;
    background: ${theme.bg.secondary};
    border-radius: 2rem;
  }
`

export const CardProfile: React.FC<ICardProfileProps> = ({ flexDir, width = "25rem", label = "Label", fontSize, lineWidth = 7 }) => {
  const [imgLoading, setImgLoading] = useState(false)

  return (
    <CardProfileStyle flexDir={flexDir} width={width} label={label} fontSize={fontSize} lineWidth={lineWidth}>
      <Stack>
        {imgLoading ? (
          <img src={Imgs.ProfilePicture} alt="Foto de perfil" className="avatar" />
        ) : (
          <Skeleton variant="circular" style={{ width: "4.5rem", height: "4.5rem", background: "#292f67a1" }} />
        )}
        <img src={Imgs.ProfilePicture} alt="Foto de perfil" className="avatar" onLoad={() => setImgLoading(true)} style={{ display: "none" }} />
      </Stack>
      <Container display="flex" flexDir="column" height="" width="">
        <THeadingLinearPrimary fontSize={fontSize} whiteSpace="nowrap">
          {label}
        </THeadingLinearPrimary>
        <span className="line"></span>
      </Container>
    </CardProfileStyle>
  )
}
