import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './componentes/Home';
import ListaClientes from './componentes/ListaClientes';
import ListaFacturas from './componentes/ListaFacturas';
import PaginaHome from './componentes/PaginaHome';
import Balance from './componentes/Balance';
import ListaProductos from './componentes/ListaProductos';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<PaginaHome />} />
        <Route path="productos" element={<ListaProductos />}></Route>
        <Route path="clientes" element={<ListaClientes />}></Route>
        <Route path="facturas" element={<ListaFacturas />}></Route>
        <Route path="balance" element={<Balance />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
