import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Layout from '../components/Layout/Layout'
import Table from '../components/Table/Table'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="w-11/12 max-w-[1000px] bg-white lg:w-[9000px] sm:w-[600px] md:w-[700px]  overflow-y-auto h-[85vh] rounded drop-shadow px-3 py-3">
        <Table />
      </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}

export default Home
