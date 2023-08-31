
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){
    const [usuario, setUsuario] = useState(null);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:8080/usuarios/autenticar', {
                email: email,
                senha: senha
            });
    
            const usuarioData = response.data;
            setUsuario(usuarioData);
            navigate('/dashboard');
        }catch(error){
            setErro('Autenticação falha. Verifique suas informações!')
        }
    };

    return(
        <div>
            <h2>Login</h2>
            {erro && <p>{erro}</p>}
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
}

export default Login;