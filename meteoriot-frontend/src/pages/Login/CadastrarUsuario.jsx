export default function CadastrarUsuario(){
    return(
        <div class="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
        <div class="row rounder-5 p-3 bg-dark">
            <div class="col-md-12">
                <div class="row align-items-center">
                    <div class="header-text mb-4 text-center">
                        <h2 class="text-align-center text-info"><b>MeteorIot</b></h2>
                        <p class="text-align-center text-white">Cadastre-se!</p>
                    </div>
                    <form method="POST" action="">
                        <h6 class="text-white">Nome</h6>
                        <div class="input-group mb-3">
                            <input type="text" name="campoNome" class="form-control form-control-lg bg-light fs-6" required/>
                        </div>
                        <h6 class="text-white">Email</h6>
                        <div class="input-group mb-3">
                            <input type="email" name="campoEmail" class="form-control form-control-lg bg-light fs-6" required/>
                        </div>
                        <h6 class="text-white">Senha</h6>
                        <div class="input-group mb-3">
                            <input type="password" name="campoSenha" class="form-control form-control-lg bg-light fs-6" required/>
                        </div>
                        <h6 class="text-white">Telefone</h6>
                        <div class="input-group mb-3">
                            <input type="text" name="campoTelefone" class="form-control form-control-lg bg-light fs-6" required/>
                        </div>
                        <h6 class="text-white">Foto de Perfil</h6>
                        <div class="input-group mb-3">
                            <input type="text" name="campoFoto" class="form-control form-control-lg bg-light fs-6" required/>
                        </div>
                        <h6 class="text-white">Data de Nascimento</h6>
                        <div class="input-group mb-3">
                            <input type="date" name="campoDataNascimento" class="form-control form-control-lg bg-light fs-6" required/>
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