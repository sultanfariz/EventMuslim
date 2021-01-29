import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../../components/layouts/Container'
import Footer from '../../components/layouts/Footer'
import Layout from '../../components/layouts/Layout'
import Navigation from '../../components/Navigation'
import CardEventDashboard from '../../components/CardEventDashboard'
import axios from 'axios'

const Dashboard = (props) => {
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
        <div className={`bg-green-50`}>
          <Container className={`bg-green-50`}>
            <div className={`py-6`}>
              <h1 className={`text-center font-bold text-4xl mb-8`}>Account Profile</h1>
              <h1 className={`text-center font-bold text-2xl mb-4`}>Muslim Hackfest</h1>
              <h6 className={`text-center text-base`}>Indonesia's First Virtual Muslim Hackathon</h6>
            </div>
          </Container>
        </div>
        <div className={`mt-9`}>
          <Container>
            <div>
              <h1 className={`text-center border-b-4 border-gray-200 w-40 mx-auto pb-4`}>Acaraku</h1>
            </div>
            <div>
              <div>
                <h1 className={`font-bold text-3xl mb-6`}>Acaraku</h1>
              </div>
              <div className={`flex justify-end items-center`}>
                <Link href='/create-acara'>
                  <button className={`rounded-md py-2 w-32 block bg-green-400 text-white`} type='button'>
                    Buat Acara
                  </button>
                </Link>
              </div>
              <div className={`mt-11`}>
                <CardEventDashboard />
              </div>
            </div>
          </Container>
        </div>
      </main>
      <footer className={`bg-green-400 mt-20`}>
        <Container className={`bg-green-400`}>
          <Footer />
        </Container>
      </footer>
    </Layout>
  )
}

export default Dashboard
