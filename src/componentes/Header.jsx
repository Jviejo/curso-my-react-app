import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link to="/"><img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="logo" /></Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                        <Link className="nav-link " to='/clientes' tabIndex={-1} aria-disabled="true">Clientes</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link " to='/productos' tabIndex={-1} aria-disabled="true">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to='/facturas' tabIndex={-1} aria-disabled="true">Facturas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to='/balance' tabIndex={-1} aria-disabled="true">Balance ETH</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
