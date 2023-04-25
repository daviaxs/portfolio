import styled from "@emotion/styled"
import { theme, themeConstants } from "../../../shared/theme"

const CardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  width: 25rem;
  height: 6rem;

  background: ${theme.alert.tertiary};
  border-radius: ${themeConstants.sizes["5xl"]}rem;
`

export const Card = () => {
  return <CardStyle></CardStyle>
}
