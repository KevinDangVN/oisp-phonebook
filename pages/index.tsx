import type { GetServerSideProps, NextPage } from 'next'
import { readFile, utils } from 'xlsx'
import path from 'path'
import Footer from '../components/Footer'
import Heading from '../components/Heading/Heading'
import Layout from '../components/Layout/Layout'
import Logo from '../components/Logo/Logo'
import Table from '../components/Table/Table'
import { IPhoneBookData } from '../interface/IPhoneBook'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="w-11/12 max-w-[1000px] bg-white lg:w-[9000px] sm:w-[600px] md:w-[700px] h-full rounded drop-shadow px-3 py-3 mb-3 prose prose-gray flex-col relative">
        <Logo />
        <Heading title="PhoneBook" />
        <Table />
      </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<{
  data: IPhoneBookData[]
  success: boolean
}> = async () => {
  try {
    const filePath = path.join(__dirname, '..')
    console.log(filePath)
    // const workbook = readFile('../assets/data_dien_thoai.xlsx')
    // const sheet = workbook.Sheets[workbook.SheetNames[0]]
    // const jsonSheet = utils.sheet_to_json(sheet)
    // console.log(jsonSheet)

    return {
      props: {
        success: true,
        data: [{ extension: 12, name: '', team: '' }],
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        success: false,
        data: [],
      },
    }
  }
}
