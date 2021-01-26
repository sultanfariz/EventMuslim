import React from 'react'

const Footer = (props) => {
  const { className: style } = props
  return (
    <section className={`flex justify-between flex-wrap text-white`}>
      <div>
        <div className={`mb-6`}>
          <h1 className={`font-bold text-lg`}>Tentang Kami</h1>
        </div>
        <ul>
          <li className={`text-base`}>Tentang Event Muslim</li>
        </ul>
      </div>
      <div>
        <div className={`mb-6`}>
          <h1 className={`font-bold text-lg`}>Penggunaan</h1>
        </div>
        <ul>
          <li className={`text-base`}>Memasang Acara</li>
          <li className={`text-base`}>Biaya Pertiket</li>
        </ul>
      </div>
      <div>
        <div className={`mb-6`}>
          <h1 className={`font-bold text-lg`}>Temukan Event</h1>
        </div>
        <ul>
          <li className={`text-base`}>Telusuri Acara</li>
          <li className={`text-base`}>Telusuri Organizer</li>
        </ul>
      </div>
      <div>
        <div className={`mb-6`}>
          <h1 className={`font-bold text-lg`}>Bantuan</h1>
        </div>
        <ul>
          <li className={`text-base`}>Pusat Bantuan</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer
