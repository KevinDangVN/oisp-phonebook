import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Heading from '../components/Heading/Heading'
import Layout from '../components/Layout/Layout'
import Logo from '../components/Logo/Logo'
import Table from '../components/Table/Table'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="w-11/12 max-w-[1000px] bg-white lg:w-[9000px] sm:w-[600px] md:w-[700px] h-full rounded drop-shadow px-3 py-3 prose prose-gray flex-col">
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
