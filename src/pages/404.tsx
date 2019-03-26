import * as React from "react"

import Index from "../layouts"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Index>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Index>
)

export default NotFoundPage
