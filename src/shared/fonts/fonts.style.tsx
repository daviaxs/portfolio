import styled from "styled-components"

interface ITextProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  txtColor?: string
  txtShadow?: string
  fontSize?: number
  display?: "flex" | "none"
  className?: string
  children: React.ReactNode
}

const THeadingPrimaryStyle = styled.h1<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;

  color: ${(props) => props.txtColor};
  text-shadow: ${(props) => props.txtShadow};
`

const THeadingSecondaryStyle = styled.h2<ITextProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const THeadingTertiaryStyle = styled.h3<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTitlePrimaryStyle = styled.strong<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTitleSecondaryStyle = styled.strong<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTitleTertiaryStyle = styled.strong<ITextProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;
  display: ${(props) => props.display};

  color: ${(props) => props.txtColor};
`

const TTitleQuaternaryStyle = styled.strong<ITextProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;
  display: ${(props) => props.display};

  color: ${(props) => props.txtColor};
`

const TTextPrimaryStyle = styled.p<ITextProps>`
  font-weight: 500;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTextSecondaryStyle = styled.p<ITextProps>`
  font-weight: 500;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTextTertiaryStyle = styled.p<ITextProps>`
  font-weight: 400;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTextQuaternaryStyle = styled.p<ITextProps>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const THeadingLinearPrimaryStyle = styled.h1<ITextProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 100%;

  background: linear-gradient(270deg, #48a7ff 60%, #00fff0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const THeadingPrimary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 6.5, display, children }) => {
  return (
    <THeadingPrimaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </THeadingPrimaryStyle>
  )
}

export const THeadingSecondary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 2.5, display, children }) => {
  return (
    <THeadingSecondaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </THeadingSecondaryStyle>
  )
}

export const THeadingTertiary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 2.5, display, children }) => {
  return (
    <THeadingTertiaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </THeadingTertiaryStyle>
  )
}

export const TTitlePrimary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 2.5, display, children }) => {
  return (
    <TTitlePrimaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTitlePrimaryStyle>
  )
}

export const TTitleSecondary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 2, display, children }) => {
  return (
    <TTitleSecondaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTitleSecondaryStyle>
  )
}

export const TTitleTertiary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 1, display, children }) => {
  return (
    <TTitleTertiaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTitleTertiaryStyle>
  )
}

export const TTitleQuaternary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 1.25, display, children }) => {
  return (
    <TTitleQuaternaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTitleQuaternaryStyle>
  )
}

export const TTextPrimary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 1.5, display, children }) => {
  return (
    <TTextPrimaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTextPrimaryStyle>
  )
}

export const TTextSecondary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 1.25, display, children }) => {
  return (
    <TTextSecondaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTextSecondaryStyle>
  )
}

export const TTextTertiary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 1, display, children }) => {
  return (
    <TTextTertiaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTextTertiaryStyle>
  )
}

export const TTextQuaternary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 0.625, display, children }) => {
  return (
    <TTextQuaternaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTextQuaternaryStyle>
  )
}

export const THeadingLinearPrimary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, fontSize = 2.5, display, children }) => {
  return (
    <THeadingLinearPrimaryStyle txtColor={txtColor} txtShadow={txtShadow} fontSize={fontSize} className={className} display={display}>
      {children}
    </THeadingLinearPrimaryStyle>
  )
}