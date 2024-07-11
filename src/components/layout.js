import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/layout.scss'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout