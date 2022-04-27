import { Footer } from './components/Footer'
import { Heading } from './components/Heading'
import { Layout } from './components/Layout'
import { Logo } from './components/Logo'
import { Pagination } from './components/Pagination'
import { Search } from './components/Search'
import { Table } from './components/Table'
import useGetData from './hooks/useGetData'
import usePagination from './hooks/usePagination'
import useSearch from './hooks/useSearch'
import './index.css'

const LIMIT = 10

function App() {
  const { data, tableData, totalItem, setTableData } = useGetData()
  const { onNext, onPrevious, totalPage, handlePageChange, page } =
    usePagination({
      totalItem,
      limit: LIMIT,
      data,
      setTableData,
    })
  const { onChange, text } = useSearch({
    handlePageChange,
    setTableData,
    data,
    page,
  })

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
