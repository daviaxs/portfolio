import { useState } from "react"
import styled from "@emotion/styled"
import { Skeleton, Stack } from "@mui/material"

import { THeadingLinearPrimary } from "../../../shared/fonts"
import { theme, themeConstants } from "../../../shared/theme"
import Imgs from "../../../shared/assets/index"
import { Container } from "../../../shared/components/container/Container"

const CardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  width: 25rem;
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
    width: 7rem;
    height: 0.5rem;
    background: ${theme.bg.secondary};
    border-radius: 2rem;
  }
`

export const Card = () => {
  const [imgLoading, setImgLoading] = useState(false)

  return (
    <CardStyle>
      <Stack>
        {imgLoading ? (
          <img src={Imgs.ProfilePicture} alt="Foto de perfil" className="avatar" />
        ) : (
          <Skeleton variant="circular" style={{ width: "4.5rem", height: "4.5rem", background: "#292f67a1" }} />
        )}
        <img src={Imgs.ProfilePicture} alt="Foto de perfil" className="avatar" onLoad={() => setImgLoading(true)} style={{ display: "none" }} />
      </Stack>
      <Container display="flex" flexDir="column" height="" width="">
        <THeadingLinearPrimary fontSize={themeConstants.sizes["6xl"]}>Sobre mim</THeadingLinearPrimary>
        <span className="line"></span>
      </Container>
    </CardStyle>
  )
}
