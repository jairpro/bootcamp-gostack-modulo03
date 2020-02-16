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
    
3 - Utilizar Postgres, MongoDB e Redis com Docker, criando os respectivos bancos de dados e usuários. Usar as imagens:

     postgres
     mongo
     redis:alpine

4 - Usando como modelo o arquivo `env.example` criar na mesma pasta um arquivo `.env` e definir as **variáveis de ambiente**;
  
5 - Aplicar as migrations para o banco de dados pelo comando no terminal da aplicação:

    yarn sequelize db:migrate
    
6 - Para executar a aplicação utilize:

    yarn dev

  ou para depurar:

    yarn dev:debug
  
