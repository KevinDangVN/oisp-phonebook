import { useState } from 'react'
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
  const [isShowPagination, setShowPagination] = useState<boolean>(true)
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
    setShowPagination,
  })

  return (
    <Layout>
      <main className="w-11/12 max-w-[1200px] bg-white lg:w-[1000px] sm:w-[6300px] md:w-[750px] h-full rounded drop-shadow px-3 py-3 mb-3 prose prose-gray flex-col relative text-base">
        <Logo />
        <Heading title="INTERNAL PHONE DIRECTORY" />
        <Search text={text} onChange={onChange} />
        <Table data={tableData} />
        {isShowPagination && (
          <Pagination
            currentPage={page}
            onPageChange={handlePageChange}
            totalPage={totalPage}
            onNext={onNext}
            onPrevious={onPrevious}
          />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}

export default App
