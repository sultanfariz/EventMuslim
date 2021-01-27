import React from 'react'
import Link from 'next/link'
import Container from '../components/layouts/Container'
import Layout from '../components/layouts/Layout'
import Navigation from '../components/Navigation'
import Footer from '../components/layouts/Footer'

const DetailsEvent = (props) => {
  const { className: style } = props
  const handleMidtrans = (e) => {}
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
              <a className={`bg-green-400 rounded py-2 px-4 box-border inline-block text-white`} type='submit'>
                Daftar Akun
              </a>
            </div>
          </Navigation>
        </Container>
      </header>
      <main>
        <Container>
          <div>
            <h1 className={`font-bold text-2xl mb-9`}>Checkout</h1>
          </div>
          <section>
            <form className={`p-9 rounded-lg shadow-xl`} action=''>
              <div className={`flex justify-between items-center mb-9`}>
                <div className={`flex items-center`}>
                  <img className={`mr-6`} src='/images/icons/user.png' alt='User' width='44' />
                  <h1 className={`font-bold text-lg`}>Detail Pembeli</h1>
                </div>
                <div className={`flex items-center`}>
                  <h1 className={`text-yellow-500 text-base mr-1`}>(*)</h1>
                  <h6>Harus Diisi</h6>
                </div>
              </div>
              <div className={`mb-9`}>
                <h1 className={`font-bold text-xl mb-5`}>
                  Nama Lengkap Pembeli <span className={`text-yellow-500`}>*</span>
                </h1>
                <input className={`py-2 w-full px-4 text-lg rounded border-2 border-gray-200`} type='text' placeholder='Masukkan nama lengkap pembeli' />
              </div>
              <div className={`mb-9`}>
                <h1 className={`font-bold text-xl mb-5`}>
                  Email Pribadi <span className={`text-yellow-500`}>*</span>
                </h1>
                <input className={`py-2 w-full px-4 text-lg rounded border-2 border-gray-200`} type='email' placeholder='Masukkan nama lengkap pembeli' />
              </div>
              <div className={`mb-9`}>
                <h1 className={`font-bold text-xl mb-5`}>
                  Nama Handphone Pembeli <span className={`text-yellow-500`}>*</span>
                </h1>
                <input className={`py-2 w-full px-4 text-lg rounded border-2 border-gray-200`} type='text' placeholder='Masukkan nama lengkap pembeli' />
              </div>
            </form>
          </section>
          <section className={`mt-10`}>
            <div className={`p-9 rounded-lg shadow-xl`}>
              <div className={`mb-9`}>
                <div className={`flex items-center`}>
                  <img className={`mr-6`} src='/images/icons/shopping-bag.png' alt='User' width='44' />
                  <h1 className={`font-bold text-lg`}>Detail Pembeli</h1>
                </div>
              </div>
              <div className={`py-6 border-b-2 border-gray-200 flex justify-between`}>
                <div>
                  <h1 className={`mb-5 font-bold`}>Jmlh</h1>
                  <h6>1</h6>
                </div>
                <div>
                  <h1 className={`mb-5 font-bold`}>Jmlh</h1>
                  <h6>Muslim Hackfest</h6>
                </div>
                <div>
                  <h1 className={`mb-5 font-bold`}>Harga/Unit</h1>
                  <h6>Rp 10.000</h6>
                </div>
                <div>
                  <h1 className={`mb-5 font-bold`}>Fee/Unit</h1>
                  <h6>Rp 1.200</h6>
                </div>
                <div>
                  <h1 className={`mb-5 font-bold`}>Sub Total</h1>
                  <h6>Rp 11.200</h6>
                </div>
              </div>
              <form className={`p-4 rounded-lg bg-green-50 mt-7`} action=''>
                <label className={`font-bold text-xl`} htmlFor='infaq'>
                  Ingin Berinfaq
                </label>
                <div className={`flex items-center mt-5`}>
                  <h1 className={`font-medium text-lg mr-4`}>Rp</h1>
                  <input className={`py-2 w-full px-4 text-lg rounded border-2 border-gray-200`} type='text' placeholder='Masukkan nominal' />
                </div>
                <h6 className={`text-base mt-4`}>Contoh : 10000 (tanpa menggunakan tanda titik)</h6>
                <div className={`mt-6 flex flex-col items-end justify-end`}>
                  <div className={`flex items-center mb-8`}>
                    <h6 className={`text-base mr-20`}>Total :</h6>
                    <h1 className={`font-bold text-3xl`}>Rp 11.200</h1>
                  </div>
                  <button onClick={handleMidtrans} className={`rounded py-3 px-6 bg-green-400 text-white`}>
                    Pembayaran
                  </button>
                </div>
              </form>
            </div>
          </section>
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

export default DetailsEvent
