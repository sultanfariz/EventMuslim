import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import CardEvent from '../components/CardEvent'
import CardOrganizer from '../components/CardOrganizer'
import Container from '../components/layouts/Container'
import Footer from '../components/layouts/Footer'
import Layout from '../components/layouts/Layout'
import Navigation from '../components/Navigation'
import axios from 'axios'

const initTabItems = [
  {
    name: 'All',
    state: true,
  },
  {
    name: 'Hari ini',
    state: false,
  },
  {
    name: 'Kajian',
    state: false,
  },
  {
    name: 'Lomba',
    state: false,
  },
  {
    name: 'Seminar',
    state: false,
  },
  {
    name: 'Workshop',
    state: false,
  },
]
const Home = (props) => {
  const { data, dataOrganizer } = props
  // React.useEffect(() => {
  //   console.log(data)
  //   console.log(dataOrganizer)
  // }, [])
  const [tabItems, setTabItems] = React.useState(initTabItems)
  const [activeEvents, setActiveEvents] = React.useState(data)
  const handleTabItems = (el) => {
    setActiveEvents(el.name)
    const newItems = []
    tabItems.forEach((item) => {
      if (item.name === el.name) {
        newItems.push({
          name: item.name,
          state: true,
        })
        return
      }
      newItems.push({
        name: item.name,
        state: false,
      })
    })
    const newEvents = data.filter((event) => event.tag_acara === el.name || el.name === 'All')
    setActiveEvents(newEvents)
    setTabItems(newItems)
  }

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
              <Link href='/signup'>
                <a className={`bg-green-400 rounded py-2 px-4 box-border inline-block text-white cursor-pointer`} type='submit'>
                  Daftar Akun
                </a>
              </Link>
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
                {tabItems.map((item) => {
                  return (
                    <li
                      key={item.name}
                      onClick={() => handleTabItems(item)}
                      className={`cursor-pointer mr-9 ${item.state ? 'underline text-green-400' : null}`}
                    >
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={`mt-10 flex flex-wrap`}>
              {activeEvents.map((event) => (
                <div key={event.id}>
                  <Link href='/events/[id_details]' as={`/events/${event.id}`} passHref>
                    <CardEvent
                      className={`mr-4 mt-4`}
                      imgSrc={`/images/pictures/event_akad.png`}
                      title={event.nama_acara}
                      date={event.tanggal}
                      place={event.lokasi}
                      price={event.harga ? `Rp ${event.harga}` : 'Gratis'}
                    />
                  </Link>
                </div>
              ))}
            </div>
            {activeEvents.length ? null : ( // </div> //   <button className={`block mx-auto bg-white border-2 py-2 px-6 rounded-md border-green-400 text-green-400`}>Lihat Semua</button> // <div className={`mt-16`}>
              <div className={`mt-16`}>
                <button className={`block mx-auto bg-white py-2 px-6 rounded-md  text-gray-400`}>Acara tidak ditemukan</button>
              </div>
            )}
          </section>
          <section className={`mt-32`}>
            <div className={`mb-8`}>
              <h1 className={`font-bold text-2xl`}>Organizer Unggulan</h1>
            </div>
            <div className={`flex flex-wrap`}>
              {dataOrganizer.map((organizer) => {
                return <CardOrganizer key={organizer.id} className={`mr-3`} imgSrc='/images/pictures/organizer01.png' title={organizer.nama_organizer} />
              })}
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

export async function getStaticProps() {
  let data = {}
  let dataOrganizer = {}
  const fetchData = await axios.get('http://localhost:3001/event').then(function (res) {
    data = res.data
  })
  const fetchDataOrganizer = await axios.get('http://localhost:3001/organizer').then(function (res) {
    dataOrganizer = res.data
  })
  return {
    props: {
      data,
      dataOrganizer,
    },
  }
}

export default Home
