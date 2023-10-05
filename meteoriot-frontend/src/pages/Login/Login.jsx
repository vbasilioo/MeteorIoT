import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTheme } from "@emotion/react";

function Login(){
    const { toggleTheme, theme } = useTheme();
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

            navigate('/dashboard', { state: { usuarioData } });
        }catch(error){
            setErro('Autenticação falha. Verifique suas informações!')
        }
    };

    return(
        <div className={`d-flex justify-content-center align-items-center min-vh-100 bg-dark`}>
        <div class="row rounder-5 p-3 bg-dark">
            <div class="col-md-12">
                <div class="row align-items-center">
                    <div class="header-text mb-4 text-center">
                        <h2 class="text-align-center text-info"><b>MeteorIot</b></h2>
                        <p class="text-align-center text-white">Bem-vindo de volta!</p>
                    </div>
                    <form method="POST" action="">
                        <h6 class="text-white">Email</h6>
                        <div class="input-group mb-3">
                            <input type="email" name="campoEmail" class="form-control form-control-lg bg-light fs-6" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <h6 class="text-white">Senha</h6>
                        <div class="input-group mb-1">
                            <input type="password" name="campoSenha" class="form-control form-control-lg bg-light fs-6" required value={senha} onChange={(e)=> setSenha(e.target.value)}/>
                        </div>
                        <div class="input-group mb-5 d-flex justify-content-between">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="formCheck"/>
                                <label for="formCheck" class="form-check-label text-light"><small>Lembrar de mim</small></label>
                            </div>
                            <div class="forgot">
                                <small><a href="#" class="text-info">Esqueci minha senha</a></small>
                            </div>
                        </div>
                            <div class="input-group mb-3">
                                <button class="btn btn-lg btn-info w-100 fs-6" type="submit" onClick={handleLogin}>Entrar</button>
                            </div>
                    </form>
                    <div class="row">
                        <small class="text-white">
                            Não tem uma conta? <a href="cadastrarUsuario" class="text-info">Registre-se.</a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;