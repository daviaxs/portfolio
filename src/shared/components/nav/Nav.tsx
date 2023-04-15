import styled from "styled-components"

interface INavProps {
  paddingInline: number
}

export const Nav = styled.nav<INavProps>`
  padding-inline: ${(props) => props.paddingInline}rem;
  margin-top: 1.25rem;

  display: flex;
  flex: 1;
  flex-direction: column;
`
