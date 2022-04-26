import { FC } from 'react'

interface ISearchProps {
  text: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search: FC<ISearchProps> = ({ text, onChange }) => {
  return (
    <form>
      <div className="grid gap-6 mb-6 lg:grid-cols-2 px-5">
        <div>
          <label
            htmlFor="search"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Search
          </label>
          <input
            type="text"
            id="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:border-blue-500 block w-full p-2.5 focus:outline-none"
            placeholder=""
            value={text || ''}
            onChange={onChange}
          />
        </div>
      </div>
    </form>
  )
}
