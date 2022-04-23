import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Layout from '../components/Layout/Layout'
import Table from '../components/Table/Table'

const Home: NextPage = () => {
  return (
    <Layout>
      <Table />
      <Footer />
    </Layout>
  )
}

export default Home
