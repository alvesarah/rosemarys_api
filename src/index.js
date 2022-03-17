// Importando o framework
import express from "express";

// Importanto controller
import portfolioController from "./controllers/portfolio-controller";

// Instanciando/criando servidor
const app = express();
// Escolhendo porta
const port = 3000;

// Chamando o controller
portfolioController(app);

// Abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}`);
});