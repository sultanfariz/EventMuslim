import React from 'react'
import Link from 'next/link'

const CardCheckoutEvent = React.forwardRef((props, ref) => {
  const { className: style, href, onClick, title, price, date, place, idEventCheckout } = props
  return (
    <div href={href} ref={ref} onClick={onClick} className={`shadow-2xl rounded-lg overflow-hidden table ${style}`}>
      <div className={`p-6`}>
        <div className={`mb-7`}>
          <h1 className={`font-bold text-2xl mb-3`}>{title}</h1>
          <h6 className={`mb-2`}>Oleh Muslim Hackfest</h6>
          <h6 className={`text-green-400 font-bold`}>Rp {price}</h6>
        </div>
        <div>
          <div className={`mb-4`}>
            <h6 className={`text-gray-500 text-base`}>Tanggal :</h6>
            <h6 className={`text-xl`}>{date}</h6>
          </div>
          <div>
            <h6 className={`text-gray-500 text-base`}>Lokasi :</h6>
            <h6 className={`text-xl`}>{place}</h6>
          </div>
        </div>
      </div>
      <Link href='/checkouts/[id_checkout]' as={`/checkouts/${idEventCheckout}`}>
        <div className={`mt-7 bg-green-400 text-center py-3 text-white cursor-pointer `}>
          <button type='button'>Beli Tiket</button>
        </div>
      </Link>
    </div>
  )
})

export default CardCheckoutEvent
