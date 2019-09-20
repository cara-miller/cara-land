import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ListLink = ({ to, children }) => (
  <li className="nav-li">
    <Link className="nav-link" to={to}>
      {children}
    </Link>
  </li>
)

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default function Navigation() {
  return (
    <nav className="header-navigation">
      <ul className="nav-ul">
        <ListLink to="#hero">Home</ListLink>
        <ListLink to="#about">About</ListLink>
        <ListLink to="#projects">Projects</ListLink>
        <ListLink to="#contact">Contact</ListLink>
      </ul>
    </nav>
  )
}
