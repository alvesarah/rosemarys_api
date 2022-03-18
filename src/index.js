import express from "express";

import portfolioController from "./controllers/portfolio-controller.js";

import generalMiddleware from "./middleware/general-middleware.js";

import database from "./database/sqlite-db.js";

const app = express()
const port = 3000

app.use(express.json());

generalMiddleware(app);

portfolioController(app, database)

app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})