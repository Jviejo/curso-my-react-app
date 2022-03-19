import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
const URL_API = "https://my-bdd-server-nlngw9uco-jviejo.vercel.app"

function getProductos() {
  return axios.get(`${URL_API}/sql?sql=select * from products order by product_name`);
}

export default function ListaProductos() {
  // Queries
  const { isLoading, data } = useQuery('products', getProductos)

  if (isLoading)
    return <div>Loading...</div>
  
  return (
    <div>
      <h1>Lista de productos</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(producto => (<tr key={producto.product_id}>
            <td className="text-center">{producto.product_id}</td>
            <td>{producto.product_name}</td>
            <td className="text-end">{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(producto.unit_pricep)}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}
