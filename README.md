# <center>Bem-vindo ao **MeteorIoT**!
</center>

A sua plataforma meteorológica desenvolvida com Java e React. Abaixo, vocês vão encontrar programas e guias para poderem contribuir com o desenvolvimento do código.

## Programas necessários
- **Node.js** na versão 18.13.0.
- **PostgreSQL** na versão 15.4.
- **Postman**.
- **Visual Studio Code** para o front-end.
- **IntelliJ Community** para o back-end.
- **Git** para o versionamento do código no Github.

## O que são?
1. **Node.js**: Plataforma de código aberto para executar Javascript do lado do servidor.
2. **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional de código aberto.
3. **Postman**: Plataforma para processo de testes de APIs.

## Linux
Para instalar os programas citados no Linux, você deve seguir os seguintes passos:

**PostgreSQL**:

1. Abra o terminal e execute os seguintes comandos:
> sudo apt update
> sudo apt install postgresql postgresql-contrib

2. Após a instalação, você pode alterar a senha da conta *'postgres'*. Substitua *'nova_senha'* por **password** (Não execute o comando com aspas duplas).
> sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'password';"

3. Agora crie um banco de dados para conseguir executar o projeto.
> sudo -u postgres createdb meteoriot;

4. Para iniciar e verificar se o PostgreSQL está rodando corretamente, você deve:
> sudo service postgresql status

**Postman**
1. Abra o terminal e digite:
> sudo sh -c "echo 'deb https://dl.pstmn.io/download/latest/linux64' > /etc/apt/sources.list.d/postman.list"

2. Adicione a chave GPG do repositório do Postman.
> sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-key 7F0CEB10

3. Atualize o pacote para incluir o repositório do Postman.
> sudo apt update

4. Instale o Postman.
> sudo apt install postman

5. Para iniciar o Postman, você pode entrar em suas ferramentas e procurar pelo aplicativo.

**Node.js**
1. Abra o terminal e atualize o repositório:
> sudo apt update

2. Instale o Node.js:
> curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
> sudo apt install -y nodejs


3. Para verificar se a instalação foi realizada com sucesso, ainda no terminal digite:
> node -v

Se a versão do Node for exibida, você instalou com sucesso.

**Git**
1. Abra o terminal e digite:
> sudo apt update

2. Agora utilize o comando para instalar o Git:
> sudo apt install git

3. Depois verifique a versão do Git, se aparecer é porque a instalação foi feita corretamente.
> git --version

**Visual Studio Code & IntelliJ Community**
1. Os dois programas podem ser instalados pelo 'Ubuntu Software' do seu computador (ou qualquer outro aplicativo de instalação de software do seu Linux).

# Clonando o repositório
Após toda a instalação ser concluída, vamos clonar o repositório do projeto e configurar para que possamos trabalhar em equipe. O repositório virá com duas pastas, backend e frontend, abra apenas a pasta com que você pretende trabalhar. Caso o projeto já tenha integração com a API, você precisará abrir a pasta de backend no IntelliJ e o frontend no VS Code.

1. Abra o repositório, vá até a área de **Code** e copie a URL do repositório.

2. Após isso, abra um terminal na sua Área de Trabalho e digite
> git clone link-do-repositorio

Substitua o link do repositório pelo qual você copiou.

3. Feche e abra o terminal dentro da pasta do projeto. Agora vamos criar uma branch para que não haja erros durante o desenvolvimento em equipe. Dentro da pasta com o terminal aberto, digite:
> git checkout -b feature: nome-da-branch

Substitua o nome da branch pela parte do código que você está desenvolvendo, um exemplo é: **feature: tela-de-login**.

**Atenção! Suba o seu código apenas para a sua branch, em caso de dúvidas pergunte para outra pessoa. Caso você suba errado, poderá dar conflito e perdemos ambos os códigos (desenvolvido por você e o de produção).**

# Após a clonagem do repositório
Após clonar, devemos abrir a pasta do frontend com o VSCode e executaremos apenas um comando.

1. Abra o terminal do VS Code, já dentro da pasta do frontend, e digite:
> npm install

Isso vai garantir que todos os módulos do React sejam atualizados para o seu computador e você possa executar o frontend.

# Executando o projeto
Para executar o projeto é simples. O backend você deverá abrir com o IntelliJ e executar. Em caso de dúvidas de configurações para execução (não estiver aparecendo um 'run' na tela), chame outra pessoa.

Para executar o frontend, você deve abrir o VS code, o terminal e digitar:
> npm start

Uma aba do seu navegador principal irá abrir no localhost:3000 e projeto será carregado. Caso você queira usar os dados do nosso banco de dados, é obrigatório que a API esteja ligado.

# Boas práticas
No frontend, estamos usando React para a componetização do nosso site o máximo possível. O que isso significa?

Significa que vamos desenvolver o nosso site através de "partes", e essas partes poderão ser reutilizadas futuramente. 

Por exemplo uma Navbar poderá ser usada em 3 lugares do site. Ao invés de criar ela 3x, vamos apenas **renderizar** ela três vezes, usando o React.

Sempre que for componentização desses tipos (sidebar, navbar, cards, coisas de uso geral) crie uma pasta com o nome do componente dentro da área de **components** da área de frontend, e coloque o arquivo lá dentro.

Se for uma página inteira, você cria uma pasta dentro de **pages** e coloca os arquivos lá. Sempre mantendo uma estrutura, por exemplo.

Possuimos um Dashboard, e nele possuímos: histórico de temperatura, perfil e adicionar dados, exemplos.

Vamos possuir uma pasta Dashboard, e dentro da Dashboard as outras três com os exemplos dados. Caso dentro dos exemplos possuam mais "componentes", vamos criar mais pasta para manter a organização.

A mesma coisa serve para o backend. Siga sempre o padrão que já estabelecido com controllers, DTOs, Models e outros.

# Arquitetura MVC no Backend
Estou usando a arquitetura MVC (Model-Controller-View) no Backend, para deixar o projeto mais organizado e dinâmico. Mantenham o padrão, vou deixar um resumo para que serve cada pasta:

1. **Entities (Entidades)**:
> Resumidamente, todos os arquivos são "tabelas" do banco de dados. E os atributos dentro do arquivo representam atributos do banco de dados.

2. **DTOs (Data Transfer Objects)**:
> Classe utilizada para transportar dados. Segue quase o mesmo padrão de Entidade, a gente deixa igual a organização da entidade, mas apenas dados que queremos transferir, atualizar, deletar, etc.

3. **Controllers**:
> Responsáveis por criar rotas para a API, requisições do cliente e interagem com as outras partes do sistema.

4. **Models**:
> Representa a lógica do negócio e a interação com os dados. São usados pelos Controllers para realizar operações.

5. **Services**:
> Representa a lógica de negócio específica de algum arquivo.

# Tipos de Commits
Nesse projeto seguiremos um padrão de commits para organizar os commits anteriores e nos identificarmos caso precise ver algo antigo. Você vai usar um desse quando for dar **commit no git**.

1. **Feature**:
> Usado para adicionar novas funcionalidades ao projeto.

2. **Update**:
> Usado para atualizar ou modificar funcionalidades existentes.

3. **Style**:
> Usado para alterações relacionadas ao estilo, como CSS, design, formatação etc.

4. **Fix**:
> Usado para correções de bugs ou erros no código.

5. **Refactor**:
> Usado para alterações que melhoram a estrutura do código sem alterar seu comportamento externo.

6. **Docs**:
> Usado para adicionar ou atualizar documentação.

7. **Chore**:
> Usado para mudanças que não afetam o código, como atualização de dependências ou ajustes na configuração