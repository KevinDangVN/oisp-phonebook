import { useState } from 'react'
import { useEffect } from 'react'
import { read, utils } from 'xlsx'
import './App.css'
import Footer from './components/Footer/Footer'
import Heading from './components/Heading/Heading'
import Layout from './components/Layout/Layout'
import Logo from './components/Logo/Logo'
import { IPhoneBookData } from './interface/IPhoneBook'

function App() {
  const [data, setData] = useState<IPhoneBookData[]>([])
  useEffect(() => {
    const getData = async () => {
      try {
        const url = process.env.REACT_APP_PHONEBOOK_URL as string
        const raw = await (await fetch(url)).arrayBuffer()
        const workbook = read(raw)
        const rawData: any[] = utils.sheet_to_json(
          workbook.Sheets[workbook.SheetNames[0]]
        )
        const phoneBook = [] as IPhoneBookData[]
        for (let i = 1; i < rawData.length; i += 1) {
          phoneBook.push({
            extension: rawData[i]['__EMPTY'] as number,
            name: rawData[i]['INTERNAL PHONE DIRECTORY'] as string,
            team: rawData[i]['__EMPTY_1'] as string,
          })
        }
        console.log(phoneBook)
        setData([...phoneBook])
        // const response = await axios.get(temp, {
        //   responseType: 'arraybuffer',
        // })
        // const data = new Uint8Array(response.data)
        // const workbook = read(data, { type: 'array' })
      } catch (error) {
        console.log(error)
      }
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
