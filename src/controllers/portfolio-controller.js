const portfolioController = (app)=>{
    app.get("/portfolio", (req, res)=>{
        res.send("Rota GET para a entidade portfólio");
    });
}

export default portfolioController;