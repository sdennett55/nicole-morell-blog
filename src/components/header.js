import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { NicoleImage } from "../components/image"
import Logo from "../components/logo"
import Nav from "../components/nav"
import Banner from "../components/banner"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <>
    {/* <Banner /> */}
    <header className="Header">
      <div className="Header-inner">
        <Link className="Header-link" to="/">
          <NicoleImage className="Header-img" />
          <Logo className="Header-logo" title={siteTitle} />
        </Link>
      </div>
      <Nav />
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
