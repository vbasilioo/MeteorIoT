/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Sidebar.css';
import { useLocation } from 'react-router-dom';

export default function Sidebar({ usuario }) {
    const location = useLocation();

    return (
        <div className="sidebar d-flex flex-column p-3 text-bg-dark">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">MeteorIoT</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                        Histórico
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={usuario.fotoPerfil} alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>{usuario && usuario.nomeCompleto}</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">Configurações</a></li>
                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">Sair</a></li>
                </ul>
            </div>
        </div>
    );
}