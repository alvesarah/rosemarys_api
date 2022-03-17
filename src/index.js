// Importando o framework
import express from "express";

// importanto os controller
import portfolioController from "./controllers/portfolio-controller.js";

// Instanciando/criando servidor
const app = express()
// Escolhendo a porta
const port = 3000

// chamando os controller
portfolioController(app)

// Abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})