import { useState } from 'react'
import { IPhoneBookData } from '../interface/IPhoneBook'

const usePagination = ({
  totalItem,
  limit,
  setTableData,
  data,
}: {
  totalItem: number
  limit: number
  setTableData: (value: React.SetStateAction<IPhoneBookData[]>) => void
  data: IPhoneBookData[]
}) => {
  const [page, setPage] = useState<number>(1)
  const totalPage = Math.floor(totalItem / limit) + 1

  const handlePageChange = (currentPage: number) => {
    setPage(currentPage)
    setTableData(data.slice((currentPage - 1) * limit, currentPage * limit))
  }

  const onNext = () => {
    if (page + 1 <= totalPage) handlePageChange(page + 1)
  }

  const onPrevious = () => {
    if (page - 1 >= 1) handlePageChange(page - 1)
  }

  return { page, totalPage, onNext, onPrevious, handlePageChange }
}

export default usePagination
