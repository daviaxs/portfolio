import styled from "@emotion/styled"

import { theme, themeConstants } from "../../../shared/theme"
import Imgs from "../../../shared/assets/index"
import { useState } from "react"
import { Skeleton, Stack } from "@mui/material"

const CardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  width: 25rem;
  height: 6rem;
  padding: ${themeConstants.sizes.lg}rem ${themeConstants.sizes["2xl"]}rem;

  background: ${theme.alert.tertiary};
  border-radius: ${themeConstants.sizes["5xl"]}rem;

  .avatar {
    height: 4.613rem;

    border-radius: 999px;
    border: 2px solid #44476a;
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
          <Skeleton variant="circular" style={{ width: "4.613rem", height: "4.613rem", background: "#292f67a1" }} />
        )}
        <img src={Imgs.ProfilePicture} alt="Foto de perfil" className="avatar" onLoad={() => setImgLoading(true)} style={{ display: "none" }} />
      </Stack>
    </CardStyle>
  )
}
