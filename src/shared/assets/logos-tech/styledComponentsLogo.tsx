import { useState } from "react"
import { Skeleton, Stack } from "@mui/material"

import styledcomponentsImg from "./styledComponentsLogo.png"

const styledcomponentsLogo = ({ size }: { size: number }) => {
  const [imgLoading, setImgLoading] = useState(false)

  return (
    <Stack>
      {imgLoading ? (
        <img src={styledcomponentsImg} alt="Styled components logo" style={{ height: `${size}rem`, width: `${size}rem`, borderRadius: "0.625rem" }} />
      ) : (
        <Skeleton variant="rounded" className="image" style={{ background: "#292f67a1", height: `${size}rem`, width: `${size}rem`, borderRadius: "0.625rem" }} />
      )}
      <img
        src={styledcomponentsImg}
        alt="Styled components logo"
        style={{ height: `${size}rem`, width: `${size}rem`, borderRadius: "0.625rem", display: "none" }}
        onLoad={() => setImgLoading(true)}
      />
    </Stack>
  )
}

export default styledcomponentsLogo
