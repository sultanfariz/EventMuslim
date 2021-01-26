import React from 'react'

const CardOrganizer = (props) => {
  const { className: style, imgSrc, title } = props
  return (
    <div className={`shadow-lg rounded-lg py-6 px-9 w-48 ${style}`}>
      <div className={`rounded-full text-center`}>
        <img className={`inline-block`} src={imgSrc} alt='Img' width='24' />
      </div>
      <div className={`mt-5`}>
        <h1 className={`text-center`}>{title}</h1>
      </div>
    </div>
  )
}

export default CardOrganizer
