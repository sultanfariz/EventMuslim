import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Container from '../../components/layouts/Container'
import Layout from '../../components/layouts/Layout'
import Navigation from '../../components/Navigation'
import Footer from '../../components/layouts/Footer'
import axios from 'axios'
import { useRouter } from 'next/router'

const DetailsEvent = (props) => {
  const { className: style, dataEvent } = props
  const router = useRouter()
  const [data, setData] = React.useState('')
  const [namaPembeli, setNamaPembeli] = React.useState('')
  const [emailPribadi, setEmailPribadi] = React.useState('')
  const [noHandphone, setNoHandphone] = React.useState('')
  const [infaq, setInfaq] = React.useState(0)
  const [fee, setFee] = React.useState(1200)
  const [totalHarga, setTotalHarga] = React.useState(dataEvent.harga + fee)
  const fetchData = async () => {
    await axios
      .post('http://localhost:3001/checkout', {
        nama_pembeli: namaPembeli,
        email_pembeli: emailPribadi,
        nomor_hp_pembeli: noHandphone,
        fk_id_acara: dataEvent.id,
        organizer: 'Default',
        jumlah: 1,
        namaAcara: dataEvent.nama_acara,
        harga: dataEvent.harga,
        fee: fee,
        infaq: infaq,
        total_pembelian: parseInt(totalHarga),
        state: false,
      })
      .then(
        await function (response) {
          setData(response.data)
        }
      )
      .catch(
        await function (error) {
          console.log(error)
        }
      )
  }
  const handleMidtrans = async (e) => {
    e.preventDefault()
    if (namaPembeli === '') {
      alert('Masukan Nama Pembeli')
      return
    }
    if (emailPribadi === '') {
      alert('Masukan Email Pribadi')
      return
    }
    if (noHandphone === '') {
      alert('Masukan No Handphone')
      return
    }
    fetchData()
    console.log(data.token)
    console.log(data.clientKey)
  }
  React.useEffect(() => {
    if (data.token === undefined) return
    snap.pay(data.token, {
      onSuccess: function (result) {
        console.log('SNAP SUCCESS', result)
        console.log(router)
      },
      onPending: function (result) {
        // console.log('SNAP Payment pending', result)
        window.location.replace(result.pdf_url)
      },
      onError: function () {
        console.log('SNAP Payment error')
      },
    })
  }, [data.token])
  // React.useEffect(() => {
  //   console.log(dataEvent)
  // }, [])
  React.useEffect(() => {
    if (!dataEvent.harga) {
      setFee(0)
    }
    if (infaq === '' || infaq === '0') {
      setTotalHarga(dataEvent.harga + fee)
      return
    }
    setTotalHarga(dataEvent.harga + parseInt(infaq) + fee)
  }, [infaq, fee])
  return (
    <Layout>
      <Head>
        <script type='text/javascript' src='https://app.sandbox.midtrans.com/snap/snap.js' data-client-key={data.clientKey} />
      </Head>
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
                <input
                  required
                  onChange={(e) => setNamaPembeli(e.target.value)}
                  value={namaPembeli}
                  className={`py-2 w-full px-4 text-lg rounded border-2 border-gray-200 focus:outline-none focus:border-2 focus:border-green-400`}
                  type='text'
                  placeholder='Masukkan nama lengkap pembeli'
                />
              </div>
              <div className={`mb-9`}>
                <h1 className={`font-bold text-xl mb-5`}>
                  Email Pribadi <span className={`text-yellow-500`}>*</span>
                </h1>
                <input
                  required
                  onChange={(e) => setEmailPribadi(e.target.value)}
                  value={emailPribadi}
                  className={`py-2 w-full px-4 text-lg rounded border-2 border-gray-200 focus:outline-none focus:border-2 focus:border-green-400`}
                  type='email'
                  placeholder='Masukkan email pembeli'
                />
              </div>
              <div className={`mb-9`}>
                <h1 className={`font-bold text-xl mb-5`}>
                  Nama Handphone Pembeli <span className={`text-yellow-500`}>*</span>
                </h1>
                <input
                  required
                  onChange={(e) => setNoHandphone(e.target.value)}
                  value={noHandphone}
                  className={`py-2 w-full px-4 text-lg rounded border-2 border-gray-200 focus:outline-none focus:border-2 focus:border-green-400`}
                  type='text'
                  placeholder='Masukkan nama lengkap pembeli'
                />
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
                  <h1 className={`mb-5 font-bold`}>Nama Acara</h1>
                  <h6>{dataEvent.nama_acara}</h6>
                </div>
                <div>
                  <h1 className={`mb-5 font-bold`}>Harga/Unit</h1>
                  <h6>Rp {dataEvent.harga}</h6>
                </div>
                <div>
                  <h1 className={`mb-5 font-bold`}>Fee/Unit</h1>
                  <h6>Rp {fee}</h6>
                </div>
                <div>
                  <h1 className={`mb-5 font-bold`}>Sub Total</h1>
                  <h6>Rp {totalHarga}</h6>
                </div>
              </div>
              <form className={`p-4 rounded-lg bg-green-50 mt-7`} action=''>
                <label className={`font-bold text-xl`} htmlFor='infaq'>
                  Ingin Berinfaq
                </label>
                <div className={`flex items-center mt-5`}>
                  <h1 className={`font-medium text-lg mr-4`}>Rp</h1>
                  <input
                    required
                    onChange={(e) => setInfaq(e.target.value)}
                    value={infaq}
                    className={`py-2 w-full px-4 text-lg rounded border-2 border-gray-200 focus:outline-none focus:border-2 focus:border-green-400`}
                    type='number'
                    placeholder='Masukkan nominal'
                  />
                </div>
                <h6 className={`text-base mt-4`}>Contoh : 10000 (tanpa menggunakan tanda titik)</h6>
                <div className={`mt-6 flex flex-col items-end justify-end`}>
                  <div className={`flex items-center mb-8`}>
                    <h6 className={`text-base mr-20`}>Total :</h6>
                    <h1 className={`font-bold text-3xl`}>Rp {totalHarga}</h1>
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

// DetailsEvent.getInitialProps = async () => {
//   let data = {}
//   const req = axios
//     .post('http://localhost:3001/checkout', {
//       nama_pembeli: 'Ihsan Firdaus',
//       email_pembeli: 'ihsanfirdaus16@gmail.com',
//       nomor_hp_pembeli: '085612349876',
//       fk_id_acara: 8,
//       organizer: 'nomindart',
//       jumlah: 2,
//       namaAcara: 'Muslim Hackfest',
//       harga: 10000,
//       fee: 1200,
//       infaq: 0,
//       total_pembelian: 11200,
//       state: false,
//     })
//     .then(
//       await function (response) {
//         data = response.data
//       }
//     )
//     .catch(async function (error) {
//       console.log(error)
//     })
//   return {
//     initialData: data,
//   }
// }

export async function getServerSideProps({ params }) {
  let dataEvent = {}
  const fetchData = await axios.get(`http://localhost:3001/event/${params.id_checkout}`).then(function (res) {
    dataEvent = res.data
  })
  return {
    props: {
      dataEvent,
    },
  }
}

export default DetailsEvent
