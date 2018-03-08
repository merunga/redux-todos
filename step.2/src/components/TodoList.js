import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const todos = [
  { text: 'Trepar a un arbol', completed: false },
  { text: 'Ver un ovni', completed: true },
  { text: 'Aprender a cultivar tomates', completed: false },
  { text: 'Hornear pan', completed: false },
  { text: 'Saltar en paracaidas', completed: true },
]

const TodoList = () => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TodoList
