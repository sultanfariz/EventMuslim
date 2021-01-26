import React from 'react'

const CardDetailsEvent = (props) => {
  const { className: style, imgSrc, description } = props
  return (
    <div className={`rounded-lg overflow-hidden shadow-2xl ${style}`}>
      {/* Banner */}
      <div>
        <img className={`w-full`} src='/images/pictures/img01.png' alt='Banner' />
      </div>
      <div className={`p-7`}>
        {/* Details */}
        <div>
          <h1 className={`mb-6 font-bold text-3xl`}>Tentang Acara</h1>
          <p className={`text-base`}>
            Muslim Hackfest merupakan festival dan hackathon muslim virtual pertama di Indonesia. <br /> <br /> Terdapat tiga mata acara dalam Muslim Hackfest
            yaitu 1) Open Source Online Discussion membahas project keumatan yang open source sehingga dapat dikembangkan secara kolaborasi (10 Jan
            2021)[daftar], 2) Hackathon ajang inovasi dan pembuatan solusi digital untuk permasalahan umat Islam di Indonesia (23-31 Jan 2021) dan 3) Grand
            Webinar dengan tema Kolaborasi Teknologi Untuk Kemaslahatan Umat (23, 24 & 31 Jan 2021). Mari menjalin relasi, berkolaborasi dan berlomba dalam
            kebaikan dengan para inovator muslim dari seluruh Indonesia dengan mengikuti Hackathon Muslim Hackfest. Dapatkan juga inspirasi dan bekal untuk
            mengoptimalkan kebermanfaatan dari pemateri nasional dan internasional dalam rangkaian sesi Grand Webinar. <br /> <br /> Acara ini terbuka untuk
            umum dan GRATIS!. Daftar sekarang dan sebarkan kabar baik ini ke sahabat muslim lainnya! <br /> <br /> Diselenggarakan oleh OpenUmma, serta didukung
            oleh Kahf dan Rumah Amal Salman.
          </p>
          <div className={`my-8`}>
            <h1 className={`font-bold text-3xl mb-6`}>Jenis Acara</h1>
            <div className={`py-2 px-6 bg-green-200 table rounded-lg mt-3`}>
              <h1>Lomba</h1>
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
