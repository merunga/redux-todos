import React from 'react'

const AddTodoInput = () => {
  let input

  return (
    <div>
      <form>
        <input
          placeholder="Aprender redux"
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Agregar tarea
        </button>
      </form>
    </div>
  )
}

export default AddTodoInput
