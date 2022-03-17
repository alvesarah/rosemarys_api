const portfolioController = (app)=>{
    app.get('/portfolio', (req, res)=>{
        res.send('Rota GET para entidade portfolio');
    });
}

export default portfolioController;