import React from "react"
import PropTypes from "prop-types"

import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/main.scss"

export default function Wrapper({ children }) {
  return (
    <div className="site">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired
}
