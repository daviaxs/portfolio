import styled from "styled-components"

import { theme, themeConstants } from "../../shared/theme"
import Imgs from "../../shared/assets/index"
import { Container } from "../../shared/components/container/Container"
import { THeadingLinearPrimary, TTitlePrimary, TTitleSecondary } from "../../shared/fonts"
import { ButtonSecondary } from "../../shared/components/buttons/ButtonSecondary"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { WindowDimensionsContext } from "../../shared/contexts/WindowDimensionsContext"

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
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <FormSentStyle>
      <img
        src={Imgs.WorldImage}
        alt="Imagem ilustrativa do planeta"
        className="worldImg"
        style={{
          height: `${windowWidth <= 950 ? "30rem" : "35rem"}`,
          bottom: `${windowWidth <= 780 ? "-4rem" : 0}`,
          right: `${windowWidth <= 400 ? "-5rem" : 0}`,
          transform: `scale(${windowWidth <= 400 ? 0.8 : 1})`,
        }}
      />
      <span className="light" style={{ right: `${windowWidth <= 780 ? "5rem" : "18rem"}` }}></span>

      <Container
        display="flex"
        flexDir="column"
        zIndex={2}
        width="100%"
        height="100%"
        gap={2}
        justifyContent="center"
        align={windowWidth <= 400 ? "center" : "start"}
        marginBottom={windowWidth <= 850 ? 20 : 0}
      >
        <THeadingLinearPrimary fontSize={windowWidth <= 600 && windowWidth > 400 ? 2 : windowWidth <= 400 ? 1.8 : 2.5} whiteSpace="nowrap">
          Formulário entregue!
        </THeadingLinearPrimary>
        <TTitleSecondary
          fontSize={windowWidth <= 600 ? 1.3 : 1.5}
          txtColor={theme.text.secondary}
          textAlign={windowWidth <= 400 ? "center" : "start"}
          className="text"
        >
          Seu formulário foi entregue com sucesso! <br /> Aguarde minha resposta em breve.
        </TTitleSecondary>
        <NavLink to={"/pagina-inicial"}>
          <ButtonSecondary width="11.25rem" height="3.125rem">
            <TTitlePrimary fontSize={2}>Voltar</TTitlePrimary>
          </ButtonSecondary>
        </NavLink>
      </Container>
    </FormSentStyle>
  )
}
