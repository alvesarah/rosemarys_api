import express from "express";

const app = express();
const port = 3000;

app.get('/portfolio', (req, res)=>{
    res.send("Rota GET para a entidade portfólio");
});

app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}`);
});