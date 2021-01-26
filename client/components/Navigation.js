import React from 'react'

const Navigation = (props) => {
  const { children, className: style } = props
  return <nav className={` ${style}`}>{children}</nav>
}

export default Navigation
