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
  offset: PropTypes.any.isRequired
}

export default function Navigation() {
  return (
    <nav className="header-navigation">
      <ul className="nav-ul">
        <ListLink to="#hero" offset="100">
          Home
        </ListLink>
        <ListLink to="#about" offset="">About</ListLink>
        <ListLink to="#projects" offset="">Projects</ListLink>
        <ListLink to="#contact" offset="">Contact</ListLink>
      </ul>
    </nav>
  )
}
