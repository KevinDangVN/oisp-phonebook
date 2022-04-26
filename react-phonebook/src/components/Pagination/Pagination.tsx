import { FC } from 'react'

interface IPaginationProps {
  currentPage: number

  onPageChange: (page: number) => void
  onNext: () => void
  onPrevious: () => void
  totalPage: number
}

export const Pagination: FC<IPaginationProps> = ({
  currentPage,
  onPageChange,
  totalPage,
  onNext,
  onPrevious,
}) => {
  const pageArray = Array.from({ length: totalPage }, (_, i) => i + 1)
  return (
    <>
      <nav aria-label="navigation" className="flex justify-center ">
        <ul className="inline-flex items-center -space-x-px my-3">
          <li>
            <button
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={onPrevious}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {pageArray.map((page) =>
            currentPage === page ? (
              <li key={Math.random()} onClick={() => onPageChange(page)}>
                <button className="pagination-selected">{page}</button>
              </li>
            ) : (
              <li key={Math.random()} onClick={() => onPageChange(page)}>
                <button className="pagination-item">{page}</button>
              </li>
            )
          )}
          <li>
            <button
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={onNext}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
