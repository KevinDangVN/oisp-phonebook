import { FC } from 'react'

interface IHeading {
  title: string
}

export const Heading: FC<IHeading> = ({ title }) => {
  return (
    <div className="flex w-full uppercase justify-center lg:text-3xl sm:text-2xl font-semibold text-sky-600 mt-1 mb-4">
      {title}
    </div>
  )
}
