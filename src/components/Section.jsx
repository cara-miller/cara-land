import React from "react"
import PropTypes from "prop-types"

export default function Section({ children }) {
  return <section className="article-small">{children}</section>
}

Section.propTypes = {
  children: PropTypes.string.isRequired
}
