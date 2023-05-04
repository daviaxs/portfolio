import styled from "styled-components"

import { themeConstants } from "../../shared/theme"
import Imgs from "../../shared/assets/index"


const FormSentStyle = styled.main`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-image: url(${Imgs.BgFormSent});
  background-repeat: no-repeat;
  background-size: cover;

  padding: ${themeConstants.sizes["6xl"]}rem;
`

export const FormEnviado = () => {
  return (
    <FormSentStyle>

    </FormSentStyle>
  )
}
