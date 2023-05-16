import { useContext } from "react"
import styled from "styled-components"

import { WindowDimensionsContext } from "@/shared/contexts/WindowDimensionsContext"
import { ButtonSecondary } from "@/shared/components/buttons/ButtonSecondary"
import { useLanguageContext } from "@/shared/contexts/LanguageContext"
import { THeadingLinearPrimary, TTextPrimary } from "@/shared/fonts"
import { Container } from "@/shared/components/container/Container"
import { theme, themeConstants } from "@/shared/theme"
import { LayoutBaseDePagina } from "@/shared/layout"
import { Icon } from "@/shared/components/icone/Icone"
import { languageTexts } from "@/shared/language"

interface IVTextFieldProps {
  height: number
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-top: 2rem;
  gap: 2.5rem;

  .title {
    margin-top: -0.625rem;
    margin-bottom: 2rem;
  }
`

const VTextField = styled.div<IVTextFieldProps>`
  position: relative;
  width: 100%;

  & > input {
    outline: none;
    border: 0.094rem solid ${theme.buttons.bg_default_secondary};
    border-radius: ${themeConstants.sizes.md}rem;

    width: 100%;
    height: ${(props) => props.height}rem;
    padding-inline: 2.5rem;

    background-color: transparent;
    transition: background 0.2s ease-out;

    &:-webkit-autofill {
      box-shadow: 0 0 0 1000px ${theme.bg.tertiary} inset;
      -webkit-text-fill-color: ${theme.text.fifth};
    }

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
      border: 0.094rem solid ${theme.buttons.border_focus_visible};
      color: ${theme.text.fifth};
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

    transition: all 0.3s ease-out;
  }

  .icon {
    height: fit-content;
    width: fit-content;

    position: absolute;
    top: 1.1rem;
    left: 0.5rem;
    z-index: 1;
  }
`

const VTextFieldMessage = styled.div`
  position: relative;
  width: 100%;

  & > textarea {
    outline: none;
    border: 0.094rem solid ${theme.buttons.bg_default_secondary};
    border-radius: ${themeConstants.sizes.md}rem;

    max-width: 100%;
    min-width: 100%;
    max-height: 15rem;
    min-height: 3.75rem;
    padding: 1.1rem 2.5rem;

    background-color: transparent;
    transition: background 0.2s ease-out;

    &:-webkit-autofill {
      box-shadow: 0 0 0 1000px ${theme.bg.tertiary} inset;
      -webkit-text-fill-color: ${theme.text.fifth};
    }

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
      border: 0.094rem solid ${theme.buttons.border_focus_visible};
      color: ${theme.text.fifth};
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

    transition: all 0.3s ease-out;
  }

  .icon {
    height: fit-content;
    width: fit-content;

    position: absolute;
    top: 1.1rem;
    left: 0.5rem;
    z-index: 1;
  }
`

export const Contato = () => {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const { currentLanguage } = useLanguageContext()

  return (
    <LayoutBaseDePagina flexDir="row" paddingInline={windowWidth <= 912 ? themeConstants.sizes["5xl"] : 11} paddingTop={themeConstants.sizes["5xl"]}>
      <Container display="flex" flexDir="column" align="center" height="100%" width="100%">
        <Container display="flex" flexDir="column" align="center" height="" width="100%" gap={0.625}>
          <THeadingLinearPrimary fontSize={windowWidth <= 600 ? 2 : 2.5} textAlign="center">
            {currentLanguage ? languageTexts["pt-br"].contactPage.texts.heading : languageTexts["en"].contactPage.texts.heading}
          </THeadingLinearPrimary>
          <TTextPrimary fontSize={windowWidth <= 600 ? 1 : 1.25} textAlign="center" txtColor={theme.buttons.bg_default_secondary}>
            {currentLanguage ? languageTexts["pt-br"].contactPage.texts.text1 : languageTexts["en"].contactPage.texts.text1}
          </TTextPrimary>
        </Container>

        <FormContainer action="https://formsubmit.co/cadwvk@gmail.com" method="POST">
          <input type="hidden" name="_next" value="https://portfolio-daviaxs.vercel.app/formulario-enviado" />

          <VTextField height={3.75}>
            <Icon name="person02" size={22} fill={theme.buttons.bg_default_secondary} />
            <input
              id="name"
              type="text"
              name="name"
              title=""
              placeholder={
                currentLanguage
                  ? languageTexts["pt-br"].contactPage.texts.inputs.name.placeholder
                  : languageTexts["en"].contactPage.texts.inputs.name.placeholder
              }
              required
              autoComplete="off"
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  currentLanguage
                    ? languageTexts["pt-br"].contactPage.texts.inputs.validation.alert
                    : languageTexts["en"].contactPage.texts.inputs.validation.alert
                )
              }
              onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
            />
            <label htmlFor="name">
              {currentLanguage ? languageTexts["pt-br"].contactPage.texts.inputs.name.label : languageTexts["en"].contactPage.texts.inputs.name.label}
            </label>
          </VTextField>

          <VTextField height={3.75}>
            <Icon name="email" size={22} fill={theme.buttons.bg_default_secondary} />
            <input
              id="email"
              type="email"
              name="email"
              title=""
              placeholder={
                currentLanguage
                  ? languageTexts["pt-br"].contactPage.texts.inputs.email.placeholder
                  : languageTexts["en"].contactPage.texts.inputs.email.placeholder
              }
              required
              autoComplete="off"
              onInvalid={(e) => {
                let target = e.target as HTMLInputElement
                if (target.validity.typeMismatch) {
                  target.setCustomValidity(
                    currentLanguage
                      ? languageTexts["pt-br"].contactPage.texts.inputs.validation.emailAlert
                      : languageTexts["en"].contactPage.texts.inputs.validation.emailAlert
                  )
                } else {
                  target.setCustomValidity(
                    currentLanguage
                      ? languageTexts["pt-br"].contactPage.texts.inputs.validation.alert
                      : languageTexts["en"].contactPage.texts.inputs.validation.alert
                  )
                }
              }}
              onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
            />
            <label htmlFor="email">
              {currentLanguage
                ? languageTexts["pt-br"].contactPage.texts.inputs.email.label
                : languageTexts["en"].contactPage.texts.inputs.email.label}
            </label>
          </VTextField>

          <VTextFieldMessage>
            <Icon name="message" size={22} fill={theme.buttons.bg_default_secondary} />
            <textarea
              id="message"
              name="message"
              title=""
              placeholder={
                currentLanguage
                  ? languageTexts["pt-br"].contactPage.texts.inputs.message.placeholder
                  : languageTexts["en"].contactPage.texts.inputs.message.placeholder
              }
              required
              autoComplete="off"
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  currentLanguage
                    ? languageTexts["pt-br"].contactPage.texts.inputs.validation.alert
                    : languageTexts["en"].contactPage.texts.inputs.validation.alert
                )
              }
              onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
            />
            <label htmlFor="message">
              {currentLanguage
                ? languageTexts["pt-br"].contactPage.texts.inputs.message.label
                : languageTexts["en"].contactPage.texts.inputs.message.label}
            </label>
          </VTextFieldMessage>

          <ButtonSecondary type="submit" width="100%" height={`${themeConstants.sizes["8xl"]}rem`}>
            {currentLanguage ? languageTexts["pt-br"].contactPage.texts.submit : languageTexts["en"].contactPage.texts.submit}
          </ButtonSecondary>

          <TTextPrimary fontSize={windowWidth <= 600 ? 1 : 1.25} textAlign="center" txtColor={theme.buttons.bg_default_secondary} className="title">
            {currentLanguage ? languageTexts["pt-br"].contactPage.texts.text2 : languageTexts["en"].contactPage.texts.text2}
          </TTextPrimary>
        </FormContainer>
      </Container>
    </LayoutBaseDePagina>
  )
}
