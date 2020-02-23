import React from "react"

import Layout from "../components/layout"
import Driver from "../components/driver"
import SEO from "../components/seo"
import "../components/fnf.css"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Driver />
      </Layout>
    )
  }
}

export default IndexPage
