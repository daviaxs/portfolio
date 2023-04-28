import { THeadingLinearPrimary, TTextPrimary } from "../../shared/fonts"
import { theme, themeConstants } from "../../shared/theme"
import { LayoutBaseDePagina } from "../../shared/layout"
import { Container } from "../../shared/components/container/Container"
import { Icon } from "../../shared/components/icon/Icon"
import styled from "styled-components"
import { Card, CardContainerStyle } from "./utils/Card"

const Separator = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: ${themeConstants.sizes["6xl"]}rem;
`

const Line = styled.span`
  background: ${theme.text.tertiary};
  width: 100%;
  height: 0.05rem;
`

export const Projetos = () => {
  return (
    <LayoutBaseDePagina flexDir="column" paddingInline={themeConstants.sizes["5xl"]} paddingTop={themeConstants.sizes["5xl"]}>
      <Container display="flex" flexDir="column" width="100%" height="" gap={0.5}>
        <THeadingLinearPrimary fontSize={2.5}>Bem-vindo à minha seção de Projetos!</THeadingLinearPrimary>
        <TTextPrimary fontSize={1.25} txtColor={theme.text.secondary}>
          Aqui você encontrará uma seleção de trabalhos que desenvolvi durante minha jornada como programador, com informações sobre as tecnologias e
          muito mais!
        </TTextPrimary>
      </Container>
      <Separator>
        <Line />
        <Icon name="arrowDown" size={32} />
        <Line />
      </Separator>
      <CardContainerStyle>
        <Card img="" description="" label=""/>
      </CardContainerStyle>
    </LayoutBaseDePagina>
  )
}
