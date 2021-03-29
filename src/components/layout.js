/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="Main-container">
          <div className="Main-left">
            <main className="Main">{children}</main>
          </div>
          <aside className="Main-aside">
            <a
              data-chrome="nofooter noborders transparent"
              data-tweet-limit="3"
              className="twitter-timeline"
              href="https://twitter.com/morell4medford?ref_src=twsrc%5Etfw"
            >
              Tweets by morell4medford
            </a>
          </aside>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
