import { FC } from 'react'

interface IHeading {
  title: string
}

export const Heading: FC<IHeading> = ({ title }) => {
  return (
    <div className="flex w-full uppercase justify-center text-3xl font-semibold text-sky-600 my-2">
      {title}
    </div>
  )
}
