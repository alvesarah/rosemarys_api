import Portfolio from "../models/Portfolio.js";

const portfolioController = (app, bd)=>{
    app.get('/portfolio', (req, res)=>{
        // Buscando informações no banco de dados
        const todosPortfolios = bd.portfolios;

        //Resposta com o retorno daquilo que eu busquei
        res.json({
            "portfolios": todosPortfolios,
            "erro": false
        });
    });

    app.post('/portfolio',(req, res)=>{
        // Recebe o corpo da requisição
        const body = req.body;

        // Como temos validações na nossa model, usamos o try/catch para pegar esse erro e enviar como mensagem para nosso cliente
        try{
            //  Cria uma instância de Portfolio com validação de dados a partir do corpo que foi recebido
            const novoPortfolio = new Portfolio(body.foto, body.descricao, body.servico, body.duracao, body.cliente_id, body.funcionario_id)

            // Insere a instância do usuário no banco de dados
            bd.portfolios.push(novoPortfolio);

            // Resposta com o retorno do processo
            res.json({
                "msg": `Portfólio ${novoPortfolio.descricao} inserido com sucesso`,
                "portfólio": novoPortfolio,
                "erro": false
            });
        }
        catch (error){
            // Envia o erro, caso exista
            res.json({
               "msg": error.message,
               "erro": true
            });
        }
    });
}

export default portfolioController;