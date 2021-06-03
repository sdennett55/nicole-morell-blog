import React from "react"
// import { Link } from "gatsby"
import SocialIcons from "../components/social-icons"
import "./footer.scss"

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-inner">
      <p className="Footer-copy">
        © 2021 The Committee to Elect <span className="Footer-name">Nicole Morell</span>
      </p>
      <p className="Footer-copy">
        more<span>ll</span>formedford<span>@gm</span>ail.com | 33<span>9-5</span>4<span>5-1</span>302
      </p>
      <SocialIcons />
    </div>
  </footer>
)

export default Footer
