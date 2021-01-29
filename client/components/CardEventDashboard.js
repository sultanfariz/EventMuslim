import React from 'react'

const CardEventDashboard = (props) => {
  const { className: style } = props
  return (
    <di className={`flex //justify-between items-center rounded-md overflow-hidden p-6 shadow-xl //bg-green-400 ${style}`}>
      <div className={`rounded-md overflow-hidden`}>
        <img src='/images/pictures/event_hackfest.png' alt='Muslim Hackfest' />
      </div>
      <div className={`p-6 flex justify-between items-center`}>
        <div className={`mr-56`}>
          <h className={`font-bold text-3xl mb-12`}>Muslim Hackfest</h>
          <h6>23 Januari, 01.00 PM</h6>
          <h6 className={`text-gray-400`}>Online</h6>
        </div>
        <div>
          <h6 className={`text-gray-400 mb-2`}>Status Acara</h6>
          <h6>
            <span className={`inline-block h-3 w-3 rounded-full bg-green-400 mr-2`}></span> Berjalan
          </h6>
        </div>
      </div>
    </di>
  )
}

export default CardEventDashboard
