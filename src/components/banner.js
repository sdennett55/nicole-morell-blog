import React, { Component } from "react"
import "./banner.scss"

class Banner extends Component {
  render() {
    return (
      <a className="Banner" href="https://www.facebook.com/events/190481275190707" target="_blank" rel="noopener noreferrer">
        <div className="Banner-inner">
          Please vote November 5ᵗʰ!
        </div>
      </a>
    );
  }
}

export default Banner;
