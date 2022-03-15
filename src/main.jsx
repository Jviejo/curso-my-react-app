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


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="clientes" element={<ListaClientes />}></Route>
        <Route path="facturas" element={<ListaFacturas />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
