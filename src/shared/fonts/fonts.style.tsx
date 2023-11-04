import styled from "styled-components"

interface ITextProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  txtColor?: string
  txtShadow?: string
  fontSize?: number
  textAlign?: "start" | "center" | "end"
  display?: "flex" | "none"
  className?: string
  whiteSpace?: "nowrap" | "normal"
  children: React.ReactNode
}

const THeadingPrimaryStyle = styled.h1<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.fontSize}rem;
  white-space: ${(props) => props.whiteSpace};
  line-height: 100%;
  text-align: ${(props) => props.textAlign};

  color: ${(props) => props.txtColor};
  text-shadow: ${(props) => props.txtShadow};
`

const THeadingSecondaryStyle = styled.h2<ITextProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize}rem;
  white-space: ${(props) => props.whiteSpace};
  line-height: 100%;
  text-align: ${(props) => props.textAlign};

  color: ${(props) => props.txtColor};
`

const TTitlePrimaryStyle = styled.strong<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.fontSize}rem;
  white-space: ${(props) => props.whiteSpace};
  line-height: 100%;
  text-align: ${(props) => props.textAlign};

  color: ${(props) => props.txtColor};
`

const TTitleSecondaryStyle = styled.strong<ITextProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize}rem;
  white-space: ${(props) => props.whiteSpace};
  line-height: 100%;
  text-align: ${(props) => props.textAlign};
  display: ${(props) => props.display};

  color: ${(props) => props.txtColor};
`

const TTextPrimaryStyle = styled.p<ITextProps>`
  font-weight: 500;
  font-size: ${(props) => props.fontSize}rem;
  white-space: ${(props) => props.whiteSpace};
  line-height: 1.5rem;
  text-align: ${(props) => props.textAlign};

  color: ${(props) => props.txtColor};
`

const TTextSecondaryStyle = styled.p<ITextProps>`
  font-weight: 400;
  font-size: ${(props) => props.fontSize}rem;
  white-space: ${(props) => props.whiteSpace};
  line-height: 115%;
  text-align: ${(props) => props.textAlign};

  color: ${(props) => props.txtColor};
`

const TTextTertiaryStyle = styled.p<ITextProps>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize}rem;
  white-space: ${(props) => props.whiteSpace};
  line-height: 100%;
  text-align: ${(props) => props.textAlign};

  color: ${(props) => props.txtColor};
`

const THeadingLinearPrimaryStyle = styled.h1<ITextProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize}rem;
  white-space: ${(props) => props.whiteSpace};
  line-height: 115%;
  text-align: ${(props) => props.textAlign};

  background: linear-gradient(270deg, #48a7ff 60%, #00fff0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const THeadingPrimary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, textAlign, whiteSpace = "normal", fontSize = 6.5, display, children }) => {
  return (
    <THeadingPrimaryStyle txtColor={txtColor} txtShadow={txtShadow} textAlign={textAlign} whiteSpace={whiteSpace} fontSize={fontSize} className={className} display={display}>
      {children}
    </THeadingPrimaryStyle>
  )
}

export const THeadingSecondary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, textAlign, whiteSpace = "normal", fontSize = 2.5, display, children }) => {
  return (
    <THeadingSecondaryStyle txtColor={txtColor} txtShadow={txtShadow} textAlign={textAlign} whiteSpace={whiteSpace} fontSize={fontSize} className={className} display={display}>
      {children}
    </THeadingSecondaryStyle>
  )
}

export const TTitlePrimary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, textAlign, whiteSpace = "normal", fontSize = 2.5, display, children }) => {
  return (
    <TTitlePrimaryStyle txtColor={txtColor} txtShadow={txtShadow} textAlign={textAlign} whiteSpace={whiteSpace} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTitlePrimaryStyle>
  )
}

export const TTitleSecondary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, textAlign, whiteSpace = "normal", fontSize = 2, display, children }) => {
  return (
    <TTitleSecondaryStyle txtColor={txtColor} txtShadow={txtShadow} textAlign={textAlign} whiteSpace={whiteSpace} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTitleSecondaryStyle>
  )
}

export const TTextPrimary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, textAlign, whiteSpace = "normal", fontSize = 1.5, display, children }) => {
  return (
    <TTextPrimaryStyle txtColor={txtColor} txtShadow={txtShadow} textAlign={textAlign} whiteSpace={whiteSpace} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTextPrimaryStyle>
  )
}

export const TTextSecondary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, textAlign, whiteSpace = "normal", fontSize = 1.25, display, children }) => {
  return (
    <TTextSecondaryStyle txtColor={txtColor} txtShadow={txtShadow} textAlign={textAlign} whiteSpace={whiteSpace} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTextSecondaryStyle>
  )
}

export const TTextTertiary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, textAlign, whiteSpace = "normal", fontSize = 0.625, display, children }) => {
  return (
    <TTextTertiaryStyle txtColor={txtColor} txtShadow={txtShadow} textAlign={textAlign} whiteSpace={whiteSpace} fontSize={fontSize} className={className} display={display}>
      {children}
    </TTextTertiaryStyle>
  )
}

export const THeadingLinearPrimary: React.FC<ITextProps> = ({ txtColor, className, txtShadow, textAlign, whiteSpace = "normal", fontSize = 2.5, display, children }) => {
  return (
    <THeadingLinearPrimaryStyle txtColor={txtColor} txtShadow={txtShadow} textAlign={textAlign} whiteSpace={whiteSpace} fontSize={fontSize} className={className} display={display}>
      {children}
    </THeadingLinearPrimaryStyle>
  )
}
