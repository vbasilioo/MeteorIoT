export default function Navbar(){
    return(
        <ul className="nav justify-content-center bg-dark">
            <li className="nav-item">
                <a className="nav-link active text-white font-weight-bold" href="#">
                Home
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white font-weight-bold" href="#">
                Sobre nós
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white font-weight-bold" href="/login">
                Entrar
                </a>
            </li>
        </ul>
    );
}