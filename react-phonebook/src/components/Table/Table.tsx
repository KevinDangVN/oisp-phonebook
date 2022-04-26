import { FC } from 'react'
import { IPhoneBookData } from '../../interface/IPhoneBook'

interface ITableProps {
  data: IPhoneBookData[]
}

export const Table: FC<ITableProps> = ({ data }) => (
  <div className="px-5 py-1 max-h-[560px] h-4/6 overflow-y-auto mx-auto flex justify-center align-text-top">
    <table className="text-sm text-left shadow-md text-gray-500 dark:text-gray-400 border-collapse border w-[600px]">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-2 w-[20px]">
            No
          </th>
          <th scope="col" className="px-6 py-2 w-[130px]">
            Extension
          </th>
          <th scope="col" className="px-6 py-2 w-[190px]">
            Name
          </th>
          <th scope="col" className="px-6 py-2">
            Department/ Team
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr
              className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700  align-text-top"
              key={Math.random()}
            >
              <th
                scope="row"
                className="px-6 pt-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {index + 1}
              </th>
              <td className="px-6 pt-2">{item.extension}</td>
              <td className="px-6 pt-2">{item.name}</td>
              <td className="px-6 pt-2">{item.team}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)
