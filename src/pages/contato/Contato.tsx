import styled from "styled-components"

import { THeadingLinearPrimary, TTextPrimary } from "../../shared/fonts"
import { Container } from "../../shared/components/container/Container"
import { theme, themeConstants } from "../../shared/theme"
import { LayoutBaseDePagina } from "../../shared/layout"

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-top: 2rem;
`

const VTextField = styled.div`
  position: relative;
  width: 100%;

  & > input {
    outline: none;
    border: 1.5px solid ${theme.buttons.bg_default_secondary};
    border-radius: ${themeConstants.sizes.md}rem;

    width: 100%;
    height: ${themeConstants.sizes["8xl"]}rem;
    padding-inline: 1rem;

    background-color: transparent;
    transition: background 0.2s ease-out;

    &::placeholder {
      color: ${theme.buttons.bg_default_secondary};
      font-size: 1.25rem;
      font-weight: 500;
    }

    &:hover {
      background-color: ${theme.bg.tertiary};
    }

    &:focus {
      background-color: ${theme.bg.tertiary};
      border: 1.5px solid ${theme.buttons.border_focus_visible};
      & + label {
        opacity: 1;
        top: -0.5rem;
        left: 1rem;
        transform: scale(1);
      }
    }
  }

  & > label {
    position: absolute;
    transform: scale(0);
    opacity: 1;
    z-index: 2;
    top: 1rem;
    left: 2rem;

    padding-inline: 0.625rem;
    font-size: 0.75rem;
    width: fit-content;
    height: 1.2rem;

    color: ${theme.buttons.bg_default_secondary};
    background-color: ${theme.bg.primary};
    border-radius: 0.2rem;

    transition: all .3s ease-out;
  }
`

export const Contato = () => {
  return (
    <LayoutBaseDePagina flexDir="row" paddingInline={themeConstants.sizes["5xl"]} paddingTop={themeConstants.sizes["5xl"]}>
      <Container display="flex" flexDir="column" align="center" height="100%" width="100%">
        <Container display="flex" flexDir="column" align="center" height="" width="100%">
          <THeadingLinearPrimary fontSize={2.5} textAlign="center">
            Formulário de contato
          </THeadingLinearPrimary>
          <TTextPrimary fontSize={1.25} textAlign="center" txtColor={theme.buttons.bg_default_secondary}>
            Se você tem um projeto interessante em mente ou precisa de ajuda em um projeto já existente, entre em contato comigo agora mesmo!
          </TTextPrimary>
        </Container>

        <FormContainer>
          <VTextField>
            <input type="text" name="name" placeholder="Digite seu nome" />
            <label>Nome</label>
          </VTextField>
        </FormContainer>
      </Container>
    </LayoutBaseDePagina>
  )
}
