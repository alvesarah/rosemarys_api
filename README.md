# rosemarys_api
Projeto Módulo 4 - Resilia
API para um estúdio de tatuagem (Entidade Portfolio)

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/).

## Objetivo
Esse projeto tem como objetivo criar uma API RESTful de um Estúdio de tatuagem, onde será possível aplicar as operações CRUD nas entidades `Portfolio`.

## Pré-Requisitos
* Node.js  v.16.14.0
* NPM v.8.3.1

## Pacotes utilizados
* [Express](https://www.npmjs.com/package/express) v.4.17.3
* [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15
* [SQLite](https://www.npmjs.com/package/sqlite3)  v.5.0.0

## Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
```
git clone git@github.com:alvesarah/rosemarys_api.git
```
Entrando na pasta:
```
cd rosemarys_api
```

Instalando os pacotes:
```
npm install
```

Iniciando o servidor:
```
npm start
```

## Rotas implementadas
#### Portfólio
 * **GET /portfolio**
    Schema da resposta
    ```
    {
        portfolios: [
            {
                "id": <String>,
                "foto": <String>,
                "descricao": <String>,
                "duracao": <String>,
                "clienteId": <String>,
                "funcionarioId": <String>
            }
        ],
        erro: <Boleano>
    }
    ```

    * **GET /portfolio/portfolioId/{id}**
    Schema da resposta
    ```
    {
        portfolio: [
            {
                "id": <String>,
                "foto": <String>,
                "descricao": <String>,
                "duracao": <String>,
                "clienteId": <String>,
                "funcionarioId": <String>
            }
        ],
        erro: <Boleano>
    }
    ```

    * **POST /portfolio**

    Schema da requisição
    ```
    {
       "id": <String>,
        "foto": <String>,
        "descricao": <String>,
        "duracao": <String>,
        "clienteId": <String>,
        "funcionarioId": <String>
    }
    ```

    Schema da resposta
    ```
    {
        msg: <String>
        portfolio: {
            "id": <String>,
            "foto": <String>,
            "descricao": <String>,
            "duracao": <String>,
            "clienteId": <String>,
            "funcionarioId": <String>
        },
        erro: <Boleano>
    }
    ```

    * **PUT /portfolio/portfolioId/{id}**
    
    Schema da requisição
    ```

    {
        "id": <String>,
        "foto": <String>,
        "descricao": <String>,
        "duracao": <String>,
        "clienteId": <String>,
        "funcionarioId": <String>
    }
    ```

    Schema da resposta
    ```

    {
        msg: <String>
        portfolio: {
            "id": <String>,
            "foto": <String>,
            "descricao": <String>,
            "duracao": <String>,
            "clienteId": <String>,
            "funcionarioId": <String>
        }
        erro: <Boleano>
    }
    ```

    * **DELETE /portfolio/id/{id}**

    Schema da resposta
    ```
    {
        msg: <String>
        erro: <Boleano>
    }