import styled from "styled-components"

import { THeadingLinearPrimary, THeadingPrimary, TTextPrimary, TTitleSecondary } from "../../shared/fonts"
import { Container } from "../../shared/components/container/Container"
import { theme, themeConstants } from "../../shared/theme"
import { LayoutBaseDePagina } from "../../shared/layout"

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  height: 100%;
  width: 80rem;

  gap: 1.625rem;
  padding: ${themeConstants.sizes["2xl"]}rem ${themeConstants.sizes["8xl"]}rem;

  border-radius: 0.625rem;
  background: ${theme.bg.tertiary};

  .label {
    margin-left: 0.5rem;
  }

  & {
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
`

const VTextField = styled.input`
  outline: none;
  border: none;
  border-radius: ${themeConstants.sizes.md}rem;

  width: 100%;
  height: ${themeConstants.sizes["8xl"]}rem;
  padding-inline: 1rem;

  background-color: ${theme.buttons.bg_default_secondary};

  &::placeholder {
    color: ${theme.text.quaternary};
    font-size: 1.25rem;
    font-weight: 500;
  }
`

export const Contato = () => {
  return (
    <LayoutBaseDePagina
      flexDir="row"
      paddingInline={themeConstants.sizes["5xl"]}
      paddingTop={themeConstants.sizes["5xl"]}
      paddingBottom={themeConstants.sizes["5xl"]}
    >
      <Container display="flex" flexDir="row" height="100%" width="100%" justifyContent="center" align="center" gap={1}>
        <Container display="flex" flexDir="column" height="100%" width="" justifyContent="center">
          <THeadingLinearPrimary fontSize={themeConstants.sizes["6xl"]}>Contate-me</THeadingLinearPrimary>
          <TTextPrimary txtColor={theme.text.secondary} fontSize={themeConstants.sizes["2xl"]}>
            Se você tem um projeto interessante em mente ou precisa de ajuda em um projeto já existente, entre em contato comigo agora mesmo!
            <br /> <br /> Estou ansioso para trabalhar com você e ajudá-lo a alcançar o sucesso em seus projetos.
          </TTextPrimary>
        </Container>

        <FormContainer action="https://formsubmit.co/cadwvk@email.com" method="POST">
          <THeadingPrimary fontSize={2.375} whiteSpace="nowrap">
            Formulário de contato
          </THeadingPrimary>

          <Container display="flex" flexDir="column" align="start" height="auto" width="100%" gap={0.2}>
            <TTitleSecondary fontSize={1} className="label">
              Nome
            </TTitleSecondary>
            <VTextField type="text" name="name" placeholder="Digite seu nome" required />
          </Container>

          <Container display="flex" flexDir="column" align="start" height="auto" width="100%" gap={0.2}>
            <TTitleSecondary fontSize={1} className="label">
              Email
            </TTitleSecondary>
            <VTextField type="email" name="email" placeholder="Digite seu email" required />
          </Container>

          <Container display="flex" flexDir="column" align="start" height="auto" width="100%" gap={0.2}>
            <TTitleSecondary fontSize={1} className="label">
              Messagem
            </TTitleSecondary>
            <VTextField type="text" name="message" placeholder="Digite sua mensagem..." required />
          </Container>
        </FormContainer>
      </Container>
    </LayoutBaseDePagina>
  )
}
