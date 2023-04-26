import styledcomponentsImg from './styledComponentsLogo.png'

const styledcomponentsLogo = ({ size }: { size: number }) => {
  return (
    <img src={styledcomponentsImg} alt="Styled components logo" style={{height: `${size}rem`, width: `${size}rem`, borderRadius: "0.625rem"}}/>
  )
}

export default styledcomponentsLogo
