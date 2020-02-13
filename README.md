# Bootcamp Gostack - Modulo 3
<img height="100px" src="https://repository-images.githubusercontent.com/240039692/27973e80-4dee-11ea-89d7-880bb9842074">

### Continuando API do Gobarber

## **Sobre**
Projeto Node.js com:
- Cadastro simples e autenticação de usuários;
- Upload de imagem para avatar associado ao usuário; 

## **Instalação** 
1 - Clonar esse repositório em seu computador;

2 - Instalar as dependências do projeto digitando no terminal o comando:

    yarn
    
3 - Utilizar Postgres com Docker, criar o banco de dados e o usuário e configurar o esquema de conexão no arquivo:

    src/config/database.js
    
4 - Aplicar as migrations para o banco de dados pelo comando no terminal da aplicação:

    yarn sequelize db:migrate
    
5 - Para executar a aplicação utilize:

    yarn dev

  ou para depurar:

    yarn dev:debug
  
### Observações
A porta para essa aplicação é 3337, ela pode ser redefinida no arquivo:

    src/server.js

  Alterar a porta aqui:

    app.listen(3337);
