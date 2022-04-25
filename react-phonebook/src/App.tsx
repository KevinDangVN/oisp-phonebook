import './App.css'
import Layout from './components/Layout/Layout'
import Logo from './components/Logo/Logo'
import Heading from './components/Heading/Heading'
import Table from './components/Table/Table'
import Footer from './components/Footer/Footer'
import readXlsxFile from 'read-excel-file'
import { useEffect } from 'react'
import { readFile, utils } from 'xlsx'

function App() {
  useEffect(() => {
    const getData = async () => {
      const workbook = readFile('/data.xlsx')
      const sheet = workbook.Sheets[workbook.SheetNames[0]]
      const jsonSheet = utils.sheet_to_json(sheet)
      console.log(jsonSheet)
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
