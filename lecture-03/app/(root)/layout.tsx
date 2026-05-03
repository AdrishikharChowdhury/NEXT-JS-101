import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <p>Navbar</p>
      {children}
      <p>Footer</p>
    </div>
  )
}

export default Layout
