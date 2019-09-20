import React from "react"
import PropTypes from "prop-types"

export default function Section({ children, sectionTitle, id }) {
  return (
    <section className="section" id={id}>
      <h1>{sectionTitle}</h1>
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
