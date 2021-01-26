import React from 'react'

const Container = (props) => {
  const { children, className: style } = props
  return <div className={`bg-white sm:w-full w-container mx-auto py-5 sm:px-8 ${style}`}>{children}</div>
}

export default Container
