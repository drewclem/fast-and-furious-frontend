import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../static/fnf.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer className="sm:text-center sm:bottom-0 sm:fixed pb-4">
            © {new Date().getFullYear()}, Built by
          {` `}
            <a href="https://drewclem.com" className="underline">this guy</a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
