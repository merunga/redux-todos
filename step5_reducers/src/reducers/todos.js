const initialTodos = [
  { id:1, text: 'Trepar a un arbol', completed: false },
  { id:2, text: 'Ver un ovni', completed: true },
  { id:3, text: 'Aprender a cultivar tomates', completed: false },
  { id:4, text: 'Hornear pan', completed: false },
  { id:5, text: 'Saltar en paracaidas', completed: true },
]

const todos = (state = initialTodos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todos
