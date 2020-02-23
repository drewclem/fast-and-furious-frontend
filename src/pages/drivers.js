import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Driver from "../components/driver"

class Drivers extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Driver />
      </Layout>
    )
  }
}

export default Drivers
