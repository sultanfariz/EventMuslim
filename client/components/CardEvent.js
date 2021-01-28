import React from 'react'

const CardEvent = React.forwardRef((props, ref) => {
  const { className: style, imgSrc, title, date, place, price, href, onClick } = props
  return (
    <div href={href} onClick={onClick} ref={ref} className={`w-48 shadow-lg rounded-lg overflow-hidden cursor-pointer ${style}`}>
      <div>
        <img className={`w-full`} src={imgSrc} alt='Image' />
      </div>
      <div className={`px-3 py-6`}>
        <h1 className={`font-bold text-xl mb-2`}>{title}</h1>
        <h6 className={`text-base`}>{date}</h6>
        <h6 className={`text-base text-gray-600 truncate`}>{place}</h6>
        <h1 className={`text-base text-green-400 mt-3 font-bold`}>{price}</h1>
      </div>
    </div>
  )
})

export default CardEvent
