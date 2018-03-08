import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ completed, text }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      marginBottom: 5
    }}
  >
    <span style={{ width: 200, display: 'inline-grid' }}>{text}</span>
    <button
      style={{ marginLeft: 10 }}
    >
      <b>x</b>
    </button>
  </li>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
