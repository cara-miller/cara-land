import React from "react"

import PropTypes from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"

const ListLink = ({ to, children, offset }) => (
  <li className="nav-li">
    <AnchorLink href={to} offset={offset} className="nav-link">
      {children}
    </AnchorLink>
  </li>
)

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  offset: PropTypes.any
}

export default function Navigation() {
  return (
    <nav className="header-navigation">
      <ul className="nav-ul">
        <ListLink to="#hero" offset="100">
          Home
        </ListLink>
        <ListLink to="#about" >About</ListLink>
        <ListLink to="#projects" >Projects</ListLink>
        <ListLink to="#contact" >Contact</ListLink>
      </ul>
    </nav>
  )
}
