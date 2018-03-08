import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodoInput'
import VisibleTodoList from './TodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
