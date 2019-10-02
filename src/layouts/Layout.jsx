import React from "react"
import PropTypes from "prop-types"

import SiteHeader from "../components/SiteHeader"
import Footer from "../components/Footer"
import "../styles/main.scss"

require("typeface-caudex")
require("typeface-cinzel")

export default function Wrapper({ children }) {
  return (
    <>
      {/* <meta name="viewport" content="width=device-width" /> */}
      <div className="site">
        <SiteHeader />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}
