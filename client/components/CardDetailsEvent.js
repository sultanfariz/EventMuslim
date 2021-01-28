import React from 'react'

const CardDetailsEvent = (props) => {
  const { className: style, imgSrc, description, tagEvents } = props
  return (
    <div className={`rounded-lg overflow-hidden shadow-2xl ${style}`}>
      {/* Banner */}
      <div>
        <img className={`w-full`} src={imgSrc} alt='Banner' />
      </div>
      <div className={`p-7`}>
        {/* Details */}
        <div>
          <h1 className={`mb-6 font-bold text-3xl`}>Tentang Acara</h1>
          <p className={`text-base`}>{description}</p>
          <div className={`my-8`}>
            <h1 className={`font-bold text-3xl mb-6`}>Jenis Acara</h1>
            <div className={`py-2 px-6 bg-green-200 table rounded-lg mt-3`}>
              <h1>{tagEvents}</h1>
            </div>
          </div>
        </div>
        {/* Organizer */}
        <div className={`mb-8`}>
          <h1 className={`font-bold text-3xl mb-6`}>Organizer</h1>
          <div className={`flex items-center`}>
            <div className={`w-16 rounded-full mr-6`}>
              <img className={`w-full`} src='/images/pictures/organizer01.png' alt='Event' />
            </div>
            <div>
              <h1 className={`font-bold text-lg`}>Muslim Hackfest</h1>
              <h6 className={`underline text-green-400`}>Lihat Profil</h6>
            </div>
          </div>
        </div>
        {/* Social Media */}
        <div>
          <h1 className={`font-bold text-3xl mb-6`}>Social Media Organizer</h1>
          <ul className={`p-0`}>
            <li className={`flex mb-4 items-center`}>
              <img className={`mr-6`} src='/images/icons/instagram.png' alt='Instagram' width='32' />
              <h6 className={`underline text-green-400`}>muslimhackfest</h6>
            </li>
            <li className={`flex mb-4 items-center`}>
              <img className={`mr-6`} src='/images/icons/facebook.png' alt='Facebook' width='32' />
              <h6 className={`underline text-green-400`}>muslimhackfest</h6>
            </li>
            <li className={`flex items-center`}>
              <img className={`mr-6`} src='/images/icons/phone.png' alt='Instagram' width='32' />
              <h6 className={`underline text-green-400`}>082789123123</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardDetailsEvent
