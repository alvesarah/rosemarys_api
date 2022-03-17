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
        /* 
            alguma funcao que insira coisas
        */

        // Resposta com o retorno do processo
        res.json({
            "msg": "Usuario inserido com sucesso"
        })
    })
}

export default portfolioController;