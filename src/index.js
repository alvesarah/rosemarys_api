// Importando o framework
import express from "express";

// importanto os controller
import portfolioController from "./controllers/portfolio-controller.js";

// Importando os midlewares
import generalMiddleware from "./middleware/general-middleware.js";

// importando banco de dados
import bd from "./database/bd.js";

// Instanciando/criando servidor
const app = express()
// Escolhendo a porta
const port = 3000

// Middleware necessário para fazer o parser do JSON recebido do body em objeto
app.use(express.json());

// Chamanda dos Middlewares especificos das rotas
generalMiddleware(app);

// chamando os controller passando o servidor (app) e o banco de dados (bd) como parâmetro
portfolioController(app, bd)

// Abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})