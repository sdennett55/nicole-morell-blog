import React, { Component } from "react"
import Link from "gatsby-link"
import cx from "classnames"
import "./nav.scss"

class Nav extends Component {
  state = {
    isMenuOpen: false,
  }

  handleToggle = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }))
  }

  render() {
    return (
      <nav className={cx('Nav', {
        'is-open': this.state.isMenuOpen
      })}>
        <button
          onClick={this.handleToggle}
          className="Nav-button Nav-button--mobileOnly Nav-button--close"
        >
          Close
        </button>
        <button
          onClick={this.handleToggle}
          className="Nav-button Nav-button--mobileOnly Nav-button--menu"
        >
          <span className="Nav-menuCopy">Menu</span>
        </button>
        <ul className="Nav-list">
          <li className="Nav-listItem">
            <Link onClick={this.handleToggle} to="/" className="Nav-link">
              Home
            </Link>
          </li>
          <li className="Nav-listItem">
            <Link onClick={this.handleToggle} to="/meet-nicole/" className="Nav-link">
              Meet Nicole
            </Link>
          </li>
          <li className="Nav-listItem">
            <Link onClick={this.handleToggle} to="/why-im-running/" className="Nav-link">
              Why I'm Running
            </Link>
          </li>
          <li className="Nav-listItem">
            <Link onClick={this.handleToggle} to="/priorities/" className="Nav-link">
              Priorities
            </Link>
          </li>
          <li className="Nav-listItem">
            <a href="https://secure.actblue.com/donate/morell" className="Nav-link" target="_blank" rel="noopener noreferrer">
              Donate
            </a>
          </li>
          <li className="Nav-listItem">
            <Link onClick={this.handleToggle} to="/volunteer/" className="Nav-link">
              Volunteer
            </Link>
          </li>
          <li className="Nav-listItem">
            <Link onClick={this.handleToggle} to="/contact/" className="Nav-link">
              Contact
            </Link>
          </li>
          <li className="Nav-listItem">
            <Link onClick={this.handleToggle} to="/blog/" className="Nav-link">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav
