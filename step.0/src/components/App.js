import React from 'react'

const todos = [
  { text: 'Trepar a un arbol', completed: false },
  { text: 'Ver un ovni', completed: true },
  { text: 'Aprender a cultivar tomates', completed: false },
  { text: 'Hornear pan', completed: false },
  { text: 'Saltar en paracaidas', completed: true },
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
      {todos.map(({ text, completed }) =>
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
