import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Banner from '../components/banner'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner></Banner>
  </Layout>
)

export default IndexPage
