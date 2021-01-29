import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../components/layouts/Container'
import Footer from '../components/layouts/Footer'
import Layout from '../components/layouts/Layout'
import Navigation from '../components/Navigation'
import CardEventDashboard from '../components/CardEventDashboard'
import axios from 'axios'

const CreateAcara = (props) => {
  const { className: style } = props
  const router = useRouter()
  const { email } = router.query
  React.useEffect(() => {
    console.log(email)
  }, [])
  return (
    <Layout>
      <header className={`shadow-md relative z-auto`}>
        <Container>
          <Navigation className={`flex justify-between items-center`}>
            <div className={`flex justify-between items-center //bg-green-300`}>
              {/* Logo */}
              <Link href='/'>
                <div className={`flex justify-between items-center mr-6 cursor-pointer`}>
                  <img className={`mr-2`} src='/images/icons/logo.png' alt='Logo' width='28' />
                  <h1 className={`text-base font-bold text-green-400`}>Event Muslim</h1>
                </div>
              </Link>
              {/* Search Bar */}
              <div className={`flex justify-between items-center`}>
                <input className={`bg-gray-100 py-2 px-3 rounded h-8 flex-1 w-48`} type='text' placeholder='Cari acara...' />
                <button className={`bg-green-400 rounded py-2 px-4 h-8 flex-1`} type='submit'>
                  <img src='/images/icons/icon-search.png' alt='Search' width='16' />
                </button>
              </div>
            </div>
            <div className={`flex justify-between items-center //bg-red-300`}>
              {/* <select className={`w-32 mr-8 bg-white`} name='telusuri' id='telusuri'>
                <option value='acara'> Acara</option>
                <option value='organizer'> Organizer</option>
              </select> */}
              <h6 className={`mr-8`}>Bantuan</h6>
              <h6>{email}</h6>
            </div>
          </Navigation>
        </Container>
      </header>
      <main>
        <Container>
          <form className={`p-6 shadow-xl rounded-lg`}>
            <div>
              <h1 className={`text-2xl font-bold mb-2`}>Form Memasang Acara</h1>
              <h6 className={`text-sm mb-2`}>Isi form di bawah untuk memesan acara di Event Muslim</h6>
              <h1 className={`text-sm mb-6`}>
                <span className={`text-red-600 mr-1`}>(*)</span>Harus diisi
              </h1>
            </div>
            {/* Nama Acara */}
            <div className={`mb-8`}>
              <label className={`text-base font-bold block mb-1`} htmlFor='eventName'>
                Nama Acara <span className={`text-red-600`}>*</span>
              </label>
              <input
                className={`py-2 px-4 border-2 border-gray-200 text-lg w-full focus:outline-none focus:border-green-400`}
                placeholder='Masukkan nama acara'
                type='text'
              />
            </div>
            {/* Harga Tiket */}
            <div className={`mb-8`}>
              <label className={`text-base font-bold block mb-1`} htmlFor='eventName'>
                Harga Tiket <span className={`text-red-600`}>*</span>
              </label>
              <div className={`flex items-center mb-4`}>
                <input className={`mr-4`} type='radio' id='pricing' name='price_ticket' value='pricing' />
                <label htmlFor='pricing' className={`mr-4 inline-block`}>
                  Rp
                </label>
                <input
                  className={`py-2 px-4 border-2 flex-1 border-gray-200 text-lg w-full inline-block focus:outline-none focus:border-green-400`}
                  placeholder='Masukkan harga tiket (Contoh: 10000)'
                  type='text'
                />
              </div>
              <div className={`flex items-center`}>
                <input className={`mr-4`} type='radio' id='free' name='price_ticket' value='price' />
                <label htmlFor='free' className={`mr-4 inline-block`}>
                  Free
                </label>
              </div>
            </div>
            {/* Event Date */}
            <div className={`flex items-center mb-8`}>
              <div className={`flex-1 mr-2`}>
                <label className={`text-base font-bold block mb-1`} htmlFor='eventName'>
                  Tanggal Acara <span className={`text-red-600`}>*</span>
                </label>
                <input
                  className={`py-2 px-4 border-2 flex-1 border-gray-200 text-lg w-full inline-block focus:outline-none focus:border-green-400`}
                  placeholder='Hari/Bulan/Tahun'
                  type='text'
                />
              </div>
              <div className={`flex-1`}>
                <label className={`text-base font-bold block mb-1`} htmlFor='eventName'>
                  Waktu Acara <span className={`text-red-600`}>*</span>
                </label>
                <input
                  className={`py-2 px-4 border-2 flex-1 border-gray-200 text-lg w-full inline-block focus:outline-none focus:border-green-400`}
                  placeholder='--:-- WIB (Contoh: 08.30 WIB)'
                  type='text'
                />
              </div>
            </div>
            {/* Event Place */}
            <div className={`mb-8`}>
              <label className={`text-base font-bold block mb-1`} htmlFor='eventName'>
                Lokasi Acara <span className={`text-red-600`}>*</span>
              </label>
              <div className={`flex items-center mb-4`}>
                <input className={`mr-4`} type='radio' id='lokasi' name='price_ticket' value='lokasi' />
                <input
                  className={`py-2 px-4 border-2 flex-1 border-gray-200 text-lg w-full inline-block focus:outline-none focus:border-green-400`}
                  placeholder='Masukkan lokasi acara'
                  type='text'
                />
              </div>
              <div className={`flex items-center`}>
                <input className={`mr-4`} type='radio' id='online' name='price_ticket' value='price' />
                <label htmlFor='online' className={`mr-4 inline-block`}>
                  Online
                </label>
              </div>
            </div>
            {/* Jenis Acara */}
            <div className={`mb-8`}>
              <label className={`text-base font-bold block mb-1`} htmlFor='eventName'>
                Jenis Acara <span className={`text-red-600`}>*</span>
              </label>
              <select className={`w-full bg-white py-2 border-2 border-gray-200 px-4 text-lg focus:outline-none focus:border-green-400`} name='' id=''>
                <option value='kajian'>Kajian</option>
                <option value='lomba'>Lomba</option>
                <option value='seminar'>Seminar</option>
                <option value='workshop'>Workshop</option>
              </select>
            </div>
            {/* Deskripsi Acara */}
            <div className={`mb-8`}>
              <label className={`text-base font-bold block mb-1`} htmlFor='eventName'>
                Deskripsi Acara <span className={`text-red-600`}>*</span>
              </label>
              <textarea
                className={`py-2 px-4 border-2 flex-1 border-gray-200 text-lg w-full inline-block focus:outline-none focus:border-green-400`}
                name='deskripsi'
                id='deskripsi'
                cols='30'
                rows='4'
                placeholder='Deskripsi Acara'
              ></textarea>
            </div>
            {/* Cover Acara */}
            <div className={`mb-8`}>
              <label className={`text-base font-bold block mb-1`} htmlFor='eventName'>
                Cover Acara <span className={`text-red-600`}>*</span>
              </label>
              <input
                className={`py-2 px-4 border-2 flex-1 border-gray-200 text-lg w-full inline-block focus:outline-none focus:border-green-400`}
                placeholder='Masukkan lokasi acara'
                type='file'
              />{' '}
            </div>
            {/* Nomor Rekening Organizer */}
            <div className={`mb-8`}>
              <label className={`text-lg font-bold block mb-1`} htmlFor='eventName'>
                Nomor Rekening Acara <span className={`text-red-600`}>*</span>
              </label>
              <input
                className={`py-2 px-4 border-2 flex-1 border-gray-200 text-lg w-full inline-block focus:outline-none focus:border-green-400`}
                placeholder='Masukkan lokasi acara'
                type='text'
              />{' '}
            </div>
            {/* Nama Bank */}
            <div className={`mb-16`}>
              <label className={`text-lg font-bold block mb-1`} htmlFor='eventName'>
                Nama Bank <span className={`text-red-600`}>*</span>
              </label>
              <select className={`w-full bg-white py-2 border-2 border-gray-200 px-4 text-lg focus:outline-none focus:border-green-400`} name='' id=''>
                <option value='kajian'>BCA</option>
                <option value='lomba'>BRI</option>
                <option value='seminar'>BNI</option>
                <option value='workshop'>Mandiri</option>
              </select>
            </div>
            <div>
              <button className={`py-2 bg-green-400 block rounded-lg text-white w-full`}>Kirim Acara</button>
            </div>
          </form>
        </Container>
      </main>
      <footer className={`bg-green-400 mt-20`}>
        <Container className={`bg-green-400`}>
          <Footer />
        </Container>
      </footer>
    </Layout>
  )
}

export default CreateAcara
