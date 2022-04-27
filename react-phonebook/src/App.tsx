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
import { Search } from './components/Search'

function App() {
  const LIMIT = 10
  const [data, setData] = useState<IPhoneBookData[]>([])
  const [tableData, setTableData] = useState<IPhoneBookData[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalItem, setTotalItem] = useState<number>(0)
  const [text, setText] = useState<string>('')

  const stringToASCII = (str: string): string => {
    return str
      .replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, 'a')
      .replace(/[èéẻẽẹêềếểễệ]/g, 'e')
      .replace(/[đ]/g, 'd')
      .replace(/[ìíỉĩị]/g, 'i')
      .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, 'o')
      .replace(/[ùúủũụưừứửữự]/g, 'u')
      .replace(/[ỳýỷỹỵ]/g, 'y')
  }

  const isInclude = (str: string, searchText: string): boolean => {
    const convertedStr = stringToASCII(str.toLowerCase())
    const strToSearch = stringToASCII(searchText.toLowerCase())
    return convertedStr.includes(strToSearch)
  }

  const handlePageChange = (currentPage: number) => {
    setPage(currentPage)
    setTableData(data.slice((currentPage - 1) * LIMIT, currentPage * LIMIT))
  }
  const totalPage = Math.floor(totalItem / LIMIT) + 1

  const onNext = () => {
    if (page + 1 <= totalPage) handlePageChange(page + 1)
  }

  const onPrevious = () => {
    if (page - 1 >= 1) handlePageChange(page - 1)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setText(value)
    if (value === '') return handlePageChange(page)
    const filterData = data.filter(
      (item) =>
        item.extension.toString().normalize() === value ||
        isInclude(item.name, value) ||
        isInclude(item.team, value)
    )
    setTableData([...filterData])
    console.log(e.target.value)
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
        <Search text={text} onChange={onChange} />
        <Table data={tableData} />
        <Pagination
          currentPage={page}
          onPageChange={handlePageChange}
          totalPage={totalPage}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}

export default App
