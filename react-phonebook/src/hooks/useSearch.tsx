import { useState } from 'react'
import { IPhoneBookData } from '../interface/IPhoneBook'

const useSearch = ({
  handlePageChange,
  data,
  page,
  setTableData,
}: {
  handlePageChange: (currentPage: number) => void
  data: IPhoneBookData[]
  setTableData: React.Dispatch<React.SetStateAction<IPhoneBookData[]>>
  page: number
}) => {
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
  }
  return { onChange, text }
}

export default useSearch
