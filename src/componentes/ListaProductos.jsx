import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
function getTodos() {
  return axios.get('https://jsonplaceholder.typicode.com/todos');
}
export default function ListaProductos() {
  const queryClient = useQueryClient()

  // Queries
  const { isLoading, data } = useQuery('todos', getTodos)

  return (
    <div>
      {isLoading ? 'Cargando...' : data.data.map(todo => <div key={todo.id}>{todo.title}</div>)}
    </div>
  )
}
