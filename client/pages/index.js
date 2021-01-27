import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import CardEvent from '../components/CardEvent'
import CardOrganizer from '../components/CardOrganizer'
import Container from '../components/layouts/Container'
import Footer from '../components/layouts/Footer'
import Layout from '../components/layouts/Layout'
import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <Layout className={`//bg-gray-300`}>
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
      <Container>
        <main className={`//bg-green-400 flow-root`}>
          {/* Banner */}
          <section className={`flex justify-between items-center mt-9`}>
            <div className={`w-80`}>
              <h1 className={`font-bold text-2xl`}>Mempererat silaturahmi umat</h1>
              <p className={`my-6 text-gray-500`}>
                Ikuti kajian-kajian serta event yang tersedia di Event Muslim dengan mudah sehingga mempererat tali silaturahmi antar umat muslim di penjuru
                Tanah Air
              </p>
              <a className={`bg-green-400 rounded py-2 px-4 box-border inline-block text-white`} type='submit'>
                Telusuri Event
              </a>
            </div>
            <div>
              <img src='/images/pictures/banner.png' alt='Banner' width='360' />
            </div>
          </section>
          <section className={`mt-40`}>
            <div className={`mb-8`}>
              <h1 className={`font-bold text-2xl`}>Acara yang dinanti</h1>
            </div>
            <div>
              <ul className={`flex items-center mb-7`}>
                <li className={`cursor-pointer mr-9 underline text-green-400`}>All</li>
                <li className={`cursor-pointer mr-9`}>Hari ini</li>
                <li className={`cursor-pointer mr-9`}>Kajian</li>
                <li className={`cursor-pointer mr-9`}>Lomba</li>
                <li className={`cursor-pointer mr-9`}>Seminar</li>
                <li className={`cursor-pointer`}>Workshop</li>
              </ul>
            </div>
            <div className={`mt-10 flex flex-wrap`}>
              <Link href='/details-event' passHref>
                <CardEvent
                  className={`mr-4 mt-4`}
                  imgSrc='/images/pictures/img01.png'
                  title='Muslim Hackfest'
                  date='5 Februari, 13.00 WIB'
                  place='Online'
                  price='Rp 10.000'
                />
              </Link>
              <Link href='/details-event' passHref>
                <CardEvent
                  className={`mr-4 mt-4`}
                  imgSrc='/images/pictures/img01.png'
                  title='Muslim Hackfest'
                  date='5 Februari, 13.00 WIB'
                  place='Online'
                  price='Rp 10.000'
                />
              </Link>
              <Link href='/details-event' passHref>
                <CardEvent
                  className={`mr-4 mt-4`}
                  imgSrc='/images/pictures/img01.png'
                  title='Muslim Hackfest'
                  date='5 Februari, 13.00 WIB'
                  place='Online'
                  price='Rp 10.000'
                />
              </Link>
              <Link href='/details-event' passHref>
                <CardEvent
                  className={`mr-4 mt-4`}
                  imgSrc='/images/pictures/img01.png'
                  title='Muslim Hackfest'
                  date='5 Februari, 13.00 WIB'
                  place='Online'
                  price='Rp 10.000'
                />
              </Link>
              <Link href='/details-event' passHref>
                <CardEvent
                  className={`mr-4 mt-4`}
                  imgSrc='/images/pictures/img01.png'
                  title='Muslim Hackfest'
                  date='5 Februari, 13.00 WIB'
                  place='Online'
                  price='Rp 10.000'
                />
              </Link>
            </div>
            <div className={`mt-16`}>
              <button className={`block mx-auto bg-white border-2 py-2 px-6 rounded-md border-green-400 text-green-400`}>Lihat Semua</button>
            </div>
          </section>
          <section className={`mt-32`}>
            <div className={`mb-8`}>
              <h1 className={`font-bold text-2xl`}>Organizer Unggulan</h1>
            </div>
            <div className={`flex flex-wrap`}>
              <CardOrganizer className={`mr-3`} imgSrc='/images/pictures/organizer01.png' title='Pemuda Hijrah' />
              <CardOrganizer className={`mr-3`} imgSrc='/images/pictures/organizer01.png' title='Pemuda Hijrah' />
              <CardOrganizer className={`mr-3`} imgSrc='/images/pictures/organizer01.png' title='Pemuda Hijrah' />
              <CardOrganizer imgSrc='/images/pictures/organizer01.png' title='Pemuda Hijrah' />
            </div>
          </section>
        </main>
      </Container>
      <footer className={`bg-green-400 mt-20`}>
        <Container className={`bg-green-400`}>
          <Footer />
        </Container>
      </footer>
    </Layout>
  )
}

export default Home
