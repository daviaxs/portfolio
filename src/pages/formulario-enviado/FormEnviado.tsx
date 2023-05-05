import styled from "styled-components"

import { theme, themeConstants } from "../../shared/theme"
import Imgs from "../../shared/assets/index"
import { Container } from "../../shared/components/container/Container"
import { THeadingLinearPrimary, TTitleSecondary } from "../../shared/fonts"
import { ButtonSecondary } from "../../shared/components/buttons/ButtonSecondary"

const FormSentStyle = styled.main`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-image: url(${Imgs.BgFormSent});
  background-repeat: no-repeat;
  background-size: cover;

  padding: ${themeConstants.sizes["6xl"]}rem;

  overflow: hidden;

  .worldImg {
    position: fixed;
    bottom: 0%;
    right: 0;

    height: 35rem;
  }

  .light {
    position: fixed;
    background-color: #c0a1fd;
    border-radius: 9999px;
    filter: blur(165px);

    height: 18rem;
    width: 18rem;

    right: 18rem;
    bottom: 10rem;
  }
`

export const FormEnviado = () => {
  return (
    <FormSentStyle>
      <img src={Imgs.WorldImage} alt="Imagem ilustrativa do planeta" className="worldImg" />
      <span className="light"></span>

      <Container display="flex" flexDir="column" width="100%" height="100%">
        <THeadingLinearPrimary fontSize={2.5}>Formulário entregue com sucesso!</THeadingLinearPrimary>
        <TTitleSecondary fontSize={1.5} txtColor={theme.text.secondary}>
          Seu formulário foi entregue com sucesso! Aguarde minha resposta em breve.
        </TTitleSecondary>
        <ButtonSecondary>
          Voltar
        </ButtonSecondary>
      </Container>
    </FormSentStyle>
  )
}
