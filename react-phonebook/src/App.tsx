import { useState } from 'react'
import { useEffect } from 'react'
import { read, utils } from 'xlsx'
import './index.css'

import { IPhoneBookData } from './interface/IPhoneBook'
import { Layout } from './components/Layout'
import { Logo } from './components/Logo'
import { Heading } from './components/Heading'
import { Table } from './components/Table'
import { Pagination } from './components/Pagination'
import { Footer } from './components/Footer'

function App() {
  const LIMIT = 10
  const [data, setData] = useState<IPhoneBookData[]>([])
  const [tableData, setTableData] = useState<IPhoneBookData[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalItem, setTotalItem] = useState<number>(0)

  const handlePageChange = (currentPage: number) => {
    setPage(currentPage)
    setTableData(data.slice((currentPage - 1) * LIMIT, currentPage * LIMIT))
  }

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
        setTotalItem(phoneBook.length)
        setTableData(phoneBook.slice(0, LIMIT))
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
        <Table data={tableData} />
        <Pagination
          currentPage={page}
          limit={LIMIT}
          totalItem={totalItem}
          onPageChange={handlePageChange}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}

export default App
