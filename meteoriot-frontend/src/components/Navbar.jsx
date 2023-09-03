import Login from "../pages/Login/Login";

export default function Navbar(){
    return(
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sobre nós</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/login">Entrar</a>
            </li>
        </ul>
    );
}