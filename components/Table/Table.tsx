const Table = () => (
  <div className="overflow-x-auto overflow-y-auto px-5">
    <table className="w-full h-full text-sm text-left  shadow-md text-gray-500 dark:text-gray-400 border-collapse border  ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Product name
          </th>
          <th scope="col" className="px-6 py-3">
            Color
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Apple MacBook Pro 17
          </th>
          <td className="px-6 py-4">Sliver</td>
          <td className="px-6 py-4">Laptop</td>
          <td className="px-6 py-4">$2999</td>
        </tr>
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Microsoft Surface Pro
          </th>
          <td className="px-6 py-4">White</td>
          <td className="px-6 py-4">Laptop PC</td>
          <td className="px-6 py-4">$1999</td>
        </tr>
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Magic Mouse 2
          </th>
          <td className="px-6 py-4">Black</td>
          <td className="px-6 py-4">Accessories</td>
          <td className="px-6 py-4">$99</td>
        </tr>
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Google Pixel Phone
          </th>
          <td className="px-6 py-4">Gray</td>
          <td className="px-6 py-4">Phone</td>
          <td className="px-6 py-4">$799</td>
        </tr>
        <tr className="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Apple Watch 5
          </th>
          <td className="px-6 py-4">Red</td>
          <td className="px-6 py-4">Wearables</td>
          <td className="px-6 py-4">$999</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Table
