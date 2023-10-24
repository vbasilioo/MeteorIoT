import React, { useState } from "react";
import { useDropzone } from 'react-dropzone';
import axios from "axios";

export default function CadastrarUsuario(){
    const [form, setForm] = useState({
        campoNome: '',
        campoEmail: '',
        campoSenha: '',
        campoTelefone: '',
        campoDataNascimento: '',
    });
    const [file, setFile] = useState(null);
    const [mensagem, setMensagem] = useState('');
    
    const onDrop = (acceptedFiles) => {
        setFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            nomeCompleto: form.campoNome,
            email: form.campoEmail,
            senha: form.campoSenha,
            telefone: parseInt(form.campoTelefone),
            fotoPerfil: "https://www.upload.ee/image/15851985/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg",
        };

        try{
            await axios.post('http://localhost:8080/usuarios', data);
            setMensagem("Cadastro realizado com sucesso!");
        }catch(error){  
            console.error("Erro ao cadastrar um usuário: ", error);
            setMensagem("Falha ao realizar o cadastro da conta.");
        }
    };

    return(
        <div class="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
        <div class="row rounder-5 p-3 bg-dark">
            <div class="col-md-12">
                <div class="row align-items-center">
                    <div class="header-text mb-4 text-center">
                        <h2 class="text-align-center text-info"><b>MeteorIot</b></h2>
                        <p class="text-align-center text-white">Cadastre-se!</p>
                    </div>
                    <div class="header-text mb-4 text-center">
                        {
                            mensagem !== '' ?
                            <p class="text-align-center" style={{color: 'green'}}>{mensagem}</p>
                            :
                            <p class="text-align-center" style={{color: 'red'}}>{mensagem}</p>
                        }
                    </div>
                    <form onSubmit={handleSubmit}>
                        <h6 class="text-white">Nome</h6>
                        <div class="input-group mb-3">
                            <input type="text" name="campoNome" class="form-control form-control-lg bg-light fs-6" required value={form.campoNome} onChange={(e) => setForm({ ...form, campoNome: e.target.value })} />
                        </div>
                        <h6 class="text-white">Email</h6>
                        <div class="input-group mb-3">
                            <input type="email" name="campoEmail" class="form-control form-control-lg bg-light fs-6" required value={form.campoEmail} onChange={(e) => setForm({ ...form, campoEmail: e.target.value })} />
                        </div>
                        <h6 class="text-white">Senha</h6>
                        <div class="input-group mb-3">
                            <input type="password" name="campoSenha" class="form-control form-control-lg bg-light fs-6" required value={form.campoSenha} onChange={(e) => setForm({ ...form, campoSenha: e.target.value })} />
                        </div>
                        <h6 class="text-white">Telefone</h6>
                        <div class="input-group mb-3">
                            <input type="text" name="campoTelefone" class="form-control form-control-lg bg-light fs-6" required value={form.campoTelefone} onChange={(e) => setForm({ ...form, campoTelefone: e.target.value })} />
                        </div>
                        <h6 class="text-white">Data de Nascimento</h6>
                        <div class="input-group mb-3">
                            <input type="date" name="campoDataNascimento" class="form-control form-control-lg bg-light fs-6" required value={form.campoDataNascimento} onChange={(e) => setForm({ ...form, campoDataNascimento: e.target.value })} />
                        </div>
                        <div class="input-group mb-3">
                            <button class="btn btn-lg btn-info w-100 fs-6" type="submit">Cadastrar</button>
                        </div>
                    </form>
                    <div class="row">
                        <small class="text-white">
                            Já tem uma conta? <a href="login" class="text-info">Entrar</a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}