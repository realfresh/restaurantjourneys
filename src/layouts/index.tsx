import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Nav } from "./nav"
import { Footer } from "./footer"

interface Props {
  children: React.ReactNode
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`


const Layout = ({ children }: Props) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <>
        <div id="root">
          <Nav/>
          {children}
          <Footer/>
        </div>
      </>
    )}
  />
)

export default Layout
