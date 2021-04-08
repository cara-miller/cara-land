/* eslint-disable react/button-has-type */
import React from "react"
import PropTypes from "prop-types"

export default function Button({ children, type }) {
  return (
    <button type={type} className="btn-primary">
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "reset", "submit"])
}

Button.defaultProps = {
  type: "button"
}
