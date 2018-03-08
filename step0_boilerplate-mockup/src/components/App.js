import React from 'react'

const todos = [
  { id: 1, text: 'Trepar a un arbol', completed: false },
  { id: 2, text: 'Ver un ovni', completed: true },
  { id: 3, text: 'Aprender a cultivar tomates', completed: false },
  { id: 4, text: 'Hornear pan', completed: false },
  { id: 5, text: 'Saltar en paracaidas', completed: true },
]

const App = () => (
  <div>
    <div>
      <form>
        <input
          placeholder="Aprender redux"
        />
        <button type="submit">
          Agregar tarea
        </button>
      </form>
    </div>
    <ul>
      {todos.map(({ id, text, completed }) =>
        <li
          key={id}
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
      )}
    </ul>
    <p>
      <b>Mostrar:</b>
      {" "}
        Todos
      {", "}
      <a href="#">
        Activos
      </a>
      {", "}
      <a href="#">
        Completados
      </a>
    </p>
  </div>
)

export default App
