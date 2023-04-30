import styled from "styled-components"

import { THeadingLinearPrimary, THeadingPrimary, TTextPrimary } from "../../shared/fonts"
import { Container } from "../../shared/components/container/Container"
import { theme, themeConstants } from "../../shared/theme"
import { LayoutBaseDePagina } from "../../shared/layout"

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  height: 40rem;
  width: fit-content;

  gap: 1.625rem;
  padding: ${themeConstants.sizes["8xl"]}rem ${themeConstants.sizes["2xl"]}rem;

  border-radius: 0.625rem;
  background: ${theme.bg.tertiary};
`

export const Contato = () => {
  return (
    <LayoutBaseDePagina
      flexDir="row"
      paddingInline={themeConstants.sizes["5xl"]}
      paddingTop={themeConstants.sizes["5xl"]}
      paddingBottom={themeConstants.sizes["5xl"]}
    >
      <Container display="flex" flexDir="column" height="100%" width="" justifyContent="center">
        <THeadingLinearPrimary fontSize={themeConstants.sizes["6xl"]}>Contate-me</THeadingLinearPrimary>
        <TTextPrimary txtColor={theme.text.secondary} fontSize={themeConstants.sizes["2xl"]}>
          Se você tem um projeto interessante em mente ou precisa de ajuda em um projeto já existente, entre em contato comigo agora mesmo! Estou
          ansioso para trabalhar com você e ajudá-lo a alcançar o sucesso em seus projetos.
        </TTextPrimary>
      </Container>
      <FormContainer>
        <THeadingPrimary fontSize={2.375} whiteSpace="nowrap">Formulário de contato</THeadingPrimary>
      </FormContainer>
    </LayoutBaseDePagina>
  )
}
