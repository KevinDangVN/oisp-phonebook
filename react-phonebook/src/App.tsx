import { useEffect } from 'react'
import { read } from 'xlsx'
import './App.css'
import Footer from './components/Footer/Footer'
import Heading from './components/Heading/Heading'
import Layout from './components/Layout/Layout'
import Logo from './components/Logo/Logo'

function App() {
  useEffect(() => {
    const getData = async () => {
      const temp =
        'https://res.cloudinary.com/dirkzzpfn/raw/upload/v1650941258/data_dien_thoai.xlsx'
      const data = await (await fetch(temp)).arrayBuffer()
      const workbook = read(data)
      console.log(workbook)
      // const response = await axios.get(temp, {
      //   responseType: 'arraybuffer',
      // })
      // const data = new Uint8Array(response.data)
      // const workbook = read(data, { type: 'array' })
    }
    getData()
  }, [])

  return (
    <Layout>
      <main className="w-11/12 max-w-[1000px] bg-white lg:w-[9000px] sm:w-[600px] md:w-[700px] h-full rounded drop-shadow px-3 py-3 mb-3 prose prose-gray flex-col relative">
        <Logo />
        <Heading title="PhoneBook" />
        {/* <Table data={data} /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}

export default App
