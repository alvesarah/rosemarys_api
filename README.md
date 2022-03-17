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
 * GET /portfolio
    Schema da resposta
    ```
    {
        portfolios: [
            {
                "foto": <String>,
                "descricao": <String>,
                "servico": <String>,
                "duracao": <String>,
                "cliente_id": <String>,
                "funcionario_id": <String>
            }
        ],
        erro: <Boleano>
    }
    ```

    * POST /portfolio

      Schema da requisição
    ```
    {
       "foto": <String>,
        "descricao": <String>,
        "servico": <String>,
        "duracao": <String>,
        "cliente_id": <String>,
        "funcionario_id": <String>
    }
    ```

    Schema da resposta
    ```
    {
        msg: <String>
        portfolio: {
            "foto": <String>,
            "descricao": <String>,
            "servico": <String>,
            "duracao": <String>,
            "cliente_id": <String>,
            "funcionario_id": <String>
        },
        erro: <Boleano>
    }
    ```