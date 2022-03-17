const portfolioController = (app)=>{
    app.get('/portfolio', (req, res)=>{
        /* 
            alguma funcao que busque/leia coisas
        */

        //Resposta com o retorno daquilo que eu busquei
        res.json({
            "portfolio": []
        })
    })

    app.post('/portfolio',(req, res)=>{
        const body = req.body;
        /* 
            alguma funcao que insira coisas
        */

        // Resposta com o retorno do processo
        res.json({
            "msg": "Usuário inserido com sucesso"
        })
    })
}

export default portfolioController;