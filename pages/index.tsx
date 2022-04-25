import type { GetServerSideProps, NextPage } from 'next'
import Footer from '../components/Footer'
import Heading from '../components/Heading/Heading'
import Layout from '../components/Layout/Layout'
import Logo from '../components/Logo/Logo'
import Table from '../components/Table/Table'
import { IPhoneBookData } from '../interface/IPhoneBook'
import phoneBook from '../public/phonebook'

interface IHomeProps {
  data: IPhoneBookData[]
  success: boolean
}

const Home: NextPage<IHomeProps> = ({ data, success }) => {
  return (
    <Layout>
      <main className="w-11/12 max-w-[1000px] bg-white lg:w-[9000px] sm:w-[600px] md:w-[700px] h-full rounded drop-shadow px-3 py-3 mb-3 prose prose-gray flex-col relative">
        <Logo />
        <Heading title="PhoneBook" />
        <Table data={data} />
      </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  try {
    return {
      props: {
        success: true,
        data: phoneBook,
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
