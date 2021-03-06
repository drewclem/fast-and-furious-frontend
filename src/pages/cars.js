import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Car from "../components/car"

class Cars extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Cars" />
        <Car />
      </Layout>
    )
  }
}

export default Cars
