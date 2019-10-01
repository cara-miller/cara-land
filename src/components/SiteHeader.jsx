import React from "react"
import Headroom from "react-headroom"
import Navigation from "./Navigation"

const SiteHeader = () => (
  <Headroom>
    <header className="site-header">
      <Navigation />
    </header>
  </Headroom>
)

export default SiteHeader
