import React from 'react'
import Link from 'next/link'
import Container from '../../components/layouts/Container'
import Layout from '../../components/layouts/Layout'
import Navigation from '../../components/Navigation'
import Footer from '../../components/layouts/Footer'
import CardDetailsEvent from '../../components/CardDetailsEvent'
import CardCheckoutEvent from '../../components/CardCheckoutEvent'
import axios from 'axios'

const DetailsEvent = (props) => {
  const { className: style, data } = props
  React.useEffect(() => {
    console.log(data)
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
              <a className={`bg-green-400 rounded py-2 px-4 box-border inline-block text-white`} type='submit'>
                Daftar Akun
              </a>
            </div>
          </Navigation>
        </Container>
      </header>
      <main>
        <Container>
          <section className={`flex`}>
            <CardDetailsEvent
              description={data.deskripsi}
              tagEvents={data.tag_acara}
              imgSrc={`/images/pictures/${data.foto_cover}.png`}
              className={`w-3/4 mr-7`}
            />
            {/* <Link href='/events/[id_checkout]' as={`/events/${id}`} passHref> */}
            <CardCheckoutEvent idEventCheckout={data.id} title={data.nama_acara} price={data.harga} date={data.tanggal} place={data.lokasi} />
            {/* </Link> */}
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

export async function getServerSideProps({ params }) {
  let data = {}
  const fetchData = await axios.get(`http://localhost:3001/events/${params.id_details}`).then(function (res) {
    data = res.data
  })
  return {
    props: {
      data,
    },
  }
}

export default DetailsEvent
