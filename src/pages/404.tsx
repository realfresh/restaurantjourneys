import * as React from "react"

import Layout from "../layouts"
import SEO from "../components/seo"
import { Header } from "../components/header"

export default () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header height={400} className="bg-white" style={{marginBottom: "-60px"}}>
      <div className="content max600">
        <div>
          <h1 className="lhp m-b-3">404 - NOT FOUND</h1>
          <p className="lhp">You just hit a route that doesn't exist... the sadness.</p>
        </div>
      </div>
    </Header>
  </Layout>
)
