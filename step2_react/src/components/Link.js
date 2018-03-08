import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active = false, children }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    // eslint-disable-next-line
    <a href="#"
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Link.defaultProps = {
  active: undefined,
}

export default Link
