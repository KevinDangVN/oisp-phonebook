import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex justify-center">
      <Image src="/logo-oisp.png" alt="Logo OISP" width="128" height="128" />
    </div>
  )
}

export default Logo
