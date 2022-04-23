import { FC } from 'react'

const Layout: FC = ({ children }) => (
  <div className="bg-slate-50 h-screen w-full flex justify-center align-middle items-center px-3 flex-col">
    <main>{children}</main>
  </div>
)

export default Layout
