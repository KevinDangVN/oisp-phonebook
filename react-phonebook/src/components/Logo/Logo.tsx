import Tilt from 'react-parallax-tilt'

export const Logo = () => {
  return (
    <Tilt transitionSpeed={300} perspective={400}>
      <div className="flex justify-center">
        <img src="/logo-oisp.png" alt="Logo OISP" width="128" height="128" />
      </div>
    </Tilt>
  )
}
