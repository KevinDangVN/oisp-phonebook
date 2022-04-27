import { useEffect, useState } from 'react'
import { read, utils } from 'xlsx'
import { IPhoneBookData } from '../interface/IPhoneBook'

const LIMIT = 10
const useGetData = () => {
  const [data, setData] = useState<IPhoneBookData[]>([])
  const [tableData, setTableData] = useState<IPhoneBookData[]>([])
  const [totalItem, setTotalItem] = useState<number>(0)

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

  return { data, tableData, totalItem, setTableData }
}

export default useGetData
