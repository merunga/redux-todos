import React from 'react'
import Todo from './Todo'

const todos = [
  { id: 1, text: 'Trepar a un arbol', completed: false },
  { id: 2, text: 'Ver un ovni', completed: true },
  { id: 3, text: 'Aprender a cultivar tomates', completed: false },
  { id: 4, text: 'Hornear pan', completed: false },
  { id: 5, text: 'Saltar en paracaidas', completed: true },
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

export default TodoList
