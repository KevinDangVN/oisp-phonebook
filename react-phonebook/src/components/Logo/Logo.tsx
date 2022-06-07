import Tilt from 'react-parallax-tilt'
import logoImg from './logo-oisp.png'

export const Logo = () => {
  return (
    <Tilt transitionSpeed={300} perspective={400}>
      <div className="flex justify-center">
        <img src={logoImg} alt="Logo OISP" width="128" height="128" />
      </div>
    </Tilt>
  )
}
