import React from 'react'

const Layout = (props) => {
  const { children, className: style } = props
  return <section className={` ${style}`}>{children}</section>
}

export default Layout
