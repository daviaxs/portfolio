import styled from "styled-components"

interface ITextProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  txtColor?: string
  txtShadow?: string
  fontSize?: number
  display?: string
  children: React.ReactNode
}

const THeadingPrimaryStyle = styled.span<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;

  color: ${(props) => props.txtColor};
  text-shadow: ${(props) => props.txtShadow};
`

const THeadingSecondaryStyle = styled.span<ITextProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const THeadingTertiaryStyle = styled.span<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const THeadingQuaternaryStyle = styled.span<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.txtColor}px;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTitlePrimaryStyle = styled.span<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTitleSecondaryStyle = styled.span<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTitleTertiaryStyle = styled.span<ITextProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;
  display: ${(props) => props.display};

  color: ${(props) => props.fontSize};
`

const TTitleQuaternaryStyle = styled.span<ITextProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;
  display: ${(props) => props.display};

  color: ${(props) => props.txtColor};
`

const TTextPrimaryStyle = styled.span<ITextProps>`
  font-weight: 500;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTextSecondaryStyle = styled.span<ITextProps>`
  font-weight: 500;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTextTertiaryStyle = styled.span<ITextProps>`
  font-weight: 400;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const TTextQuaternaryStyle = styled.span<ITextProps>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;

  color: ${(props) => props.txtColor};
`

const THeadingLinearPrimaryStyle = styled.span<ITextProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;

  background: linear-gradient(270deg, #48a7ff 60%, #00fff0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const THeadingLinearSecondaryStyle = styled.span<ITextProps>`
  font-weight: 900;
  font-size: ${(props) => props.fontSize}px;
  line-height: 100%;

  background: linear-gradient(270deg, #48a7ff 60%, #00fff0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const THeadingPrimary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 105,
  display,
  children,
}) => {
  return (
    <THeadingPrimaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </THeadingPrimaryStyle>
  )
}

export const THeadingSecondary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 40,
  display,
  children,
}) => {
  return (
    <THeadingSecondaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </THeadingSecondaryStyle>
  )
}

export const THeadingTertiary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 40,
  display,
  children,
}) => {
  return (
    <THeadingTertiaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </THeadingTertiaryStyle>
  )
}

export const THeadingQuaternary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 38,
  display,
  children,
}) => {
  return (
    <THeadingQuaternaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </THeadingQuaternaryStyle>
  )
}

export const TTitlePrimary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 40,
  display,
  children,
}) => {
  return (
    <TTitlePrimaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </TTitlePrimaryStyle>
  )
}

export const TTitleSecondary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 32,
  display,
  children,
}) => {
  return (
    <TTitleSecondaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </TTitleSecondaryStyle>
  )
}

export const TTitleTertiary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 16,
  display,
  children,
}) => {
  return (
    <TTitleTertiaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </TTitleTertiaryStyle>
  )
}

export const TTitleQuaternary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 20,
  display,
  children,
}) => {
  return (
    <TTitleQuaternaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </TTitleQuaternaryStyle>
  )
}

export const TTextPrimary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 24,
  display,
  children,
}) => {
  return (
    <TTextPrimaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </TTextPrimaryStyle>
  )
}

export const TTextSecondary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 20,
  display,
  children,
}) => {
  return (
    <TTextSecondaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </TTextSecondaryStyle>
  )
}

export const TTextTertiary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 16,
  display,
  children,
}) => {
  return (
    <TTextTertiaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </TTextTertiaryStyle>
  )
}

export const TTextQuaternary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 10,
  display,
  children,
}) => {
  return (
    <TTextQuaternaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </TTextQuaternaryStyle>
  )
}

export const THeadingLinearPrimary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 40,
  display,
  children,
}) => {
  return (
    <THeadingLinearPrimaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </THeadingLinearPrimaryStyle>
  )
}

export const THeadingLinearSecondary: React.FC<ITextProps> = ({
  txtColor,
  txtShadow,
  fontSize = 40,
  display,
  children,
}) => {
  return (
    <THeadingLinearSecondaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </THeadingLinearSecondaryStyle>
  )
}
