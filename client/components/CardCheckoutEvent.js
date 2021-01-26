import React from 'react'

const CardCheckoutEvent = React.forwardRef((props, ref) => {
  const { className: style, href, onClick } = props
  return (
    <div href={href} ref={ref} onClick={onClick} className={`shadow-2xl rounded-lg overflow-hidden cursor-pointer table ${style}`}>
      <div className={`p-6`}>
        <div className={`mb-7`}>
          <h1 className={`font-bold text-2xl mb-3`}>Muslim Hackfest</h1>
          <h6 className={`mb-2`}>Oleh Muslim Hackfest</h6>
          <h6 className={`text-green-400 font-bold`}>Rp 10.000</h6>
        </div>
        <div>
          <div className={`mb-4`}>
            <h6 className={`text-gray-500 text-base`}>Tanggal :</h6>
            <h6 className={`text-xl`}>Kamis, 20 Oktober 2020</h6>
          </div>
          <div>
            <h6 className={`text-gray-500 text-base`}>Lokasi :</h6>
            <h6 className={`text-xl`}>Online</h6>
          </div>
        </div>
      </div>
      <div className={`mt-7 bg-green-400 text-center py-3 text-white`}>
        <button type='button'>Beli Tiket</button>
      </div>
    </div>
  )
})

export default CardCheckoutEvent
