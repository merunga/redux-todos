import React from 'react'
import FilterLink from './Link'

const Footer = () => (
  <p>
    <b>Mostrar:</b>
    {" "}
    <FilterLink filter="SHOW_ALL">
      Todos
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Activos
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completos
    </FilterLink>
  </p>
)

export default Footer
