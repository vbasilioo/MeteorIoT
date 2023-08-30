/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar d-flex flex-column p-3 text-bg-dark">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Dashboard
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#clock"></use></svg>
                    Histórico
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>Usuário</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">Configurações</a></li>
                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sair</a></li>
                </ul>
            </div>
        </div>
    );
}