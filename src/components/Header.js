import React from "react";

export default function Header({ totalCarrito }) {
    return (
        <header className="text-white p-3 shadow-sm sticky-top" style={{ backgroundColor: '#6F4E37' }}>
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="h3 mb-0">☕ Argentina Café</h1>
                
                <nav>
                    <ul className="nav align-items-center">
                        <li className="nav-item me-3">
                            <a className="nav-link text-white" href="#">Menú</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white position-relative" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                                {totalCarrito > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark border border-light">
                                        {totalCarrito}
                                        <span className="visually-hidden">productos</span>
                                    </span>
                                )}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}