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

    app.get("/portfolio/portfolioId/:portfolioId", (req, res)=>{
        // Pegando parâmetro que será utilizado para o filtro
        const portfolioId = req.params.portfolioId;

        // Pesquisa o usuário no banco de dados
        const portfolioEncontrado = bd.portfolios.filter(portfolio=>(portfolio.portfolioId == portfolioId));

        // Retorna o usuário encontrado
        res.json({
            "portfolio": portfolioEncontrado,
            "erro": false
        });
    });

    app.post('/portfolio',(req, res)=>{
        // Recebe o corpo da requisição
        const body = req.body;

        // Como temos validações na nossa model, usamos o try/catch para pegar esse erro e enviar como mensagem para nosso cliente
        try{
            //  Cria uma instância de Portfolio com validação de dados a partir do corpo que foi recebido
            const novoPortfolio = new Portfolio(body.portfolioId, body.foto, body.descricao, body.servico, body.duracao, body.clienteId, body.funcionarioId);

            // Insere a instância do usuário no banco de dados
            bd.portfolios.push(novoPortfolio);

            // Resposta com o retorno do processo
            res.json({
                "msg": `Portfólio ${novoPortfolio.portfolioId} inserido com sucesso`,
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

    app.delete("/portfolio/portfolioId/:portfolioId", (req, res)=>{
        // Pegando parâmetro que será utilizado para o filtro
        const portfolioId = req.params.portfolioId;

        // Remove o portfólio do banco de dados
        const novoDB = bd.portfolios.filter(portfolio=>(portfolio.portfolioId !== portfolioId));
        bd.portfolios = novoDB;

        // Resposta com o retorno
        res.json({
            "msg": `Portfolio de id ${portfolioId} excluído com sucesso`,
            "erro": false
        });
    });

    app.put("/portfolio/portfolioId/:portfolioId", (req, res)=>{
        // Pegando parâmetro que será utilizado para o filtro
        const portfolioId = req.params.portfolioId;

        // Pegando o corpo da requisição com as informações que serão atualizadas
        const body = req.body

        try {
            // Utiliza a classe para validação dos dados recebidos
            const portfolioAtualizado = new Portfolio(body.portfolioId, body.foto, body.descricao, body.servico, body.duracao, body.clienteId, body.funcionarioId);

            // Atualiza o portfolio no banco de dados
            bd.portfolios = bd.portfolios.map(portfolio => {
                if(portfolio.portfolioId === portfolioId){
                    return portfolioAtualizado;
                }
                return portfolio;
            });

            // Resposta com o retorno
            res.json({
                "msg": `Portfolio de id ${portfolioAtualizado.portfolioId} atualizado com sucesso`,
                "portfolio": portfolioAtualizado,
                "erro": false
            });
        }
        catch(error){
            // Envia o erro, caso exista
            res.json({
                "msg": error.message,
                "erro": true
            });
        }
    });
}

export default portfolioController;