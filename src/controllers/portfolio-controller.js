import Portfolio from "../models/Portfolio.js";

const portfolioController = (app, bd)=>{
    const portfolioModel = new Portfolio(bd);


    app.get('/portfolio', async (req, res)=>{
        try{
            const resposta = await portfolioModel.pegaTodosPortfolios();
            res.status(200)
            .json({
                "portfolios": resposta,
                "erro": false
            });
        }
        catch(error){
            res.status(400)
            .json({
                "mensagem": error.message,
                "erro": true
            })
        }
    });

    app.get("/portfolio/portfolioId/:id", async (req, res)=>{
        const id = req.params.id;
        try{
            const resposta = await portfolioModel.pegaUmPortfolio(id);
            res.status(200)
            .json({
                "portfolio": resposta,
                "erro": false
            });
        }
        catch(error){
            res.status(400)
            .json({
                "mensagem": error.message,
                "erro": true
            });
        }
    });

    app.get("/portfolio/funcionarioId/:funcionarioId", async (req, res) => {
        const funcionarioId = req.params.funcionarioId;
        try {
            const resposta = await portfolioModel.pegaPortfolioFuncionarioID(
            funcionarioId
            );
            res.status(200).json({
            portfolio: resposta,
            erro: false,
            });
        } catch (error) {
            res.status(400).json({
            mensagem: error.message,
            erro: true,
            });
        }
    });

    app.post('/portfolio', async (req, res)=>{
        const body = req.body;
        try{
            const resposta = await portfolioModel.inserePortfolio(body);
            res.status(201)
            .json({
                "mensagem": resposta,
                "portfolio": body,
                "erro": false
            });
        }
        catch{
            res.status(400)
            .json({
                "mensagem": error.message,
                "erro": true
            });
        }
    });

    app.delete("/portfolio/portfolioId/:id", async (req, res)=>{
        const id = req.params.id;
        try{
            const resposta = await portfolioModel.deletaPortfolio(id);
            res.status(200)
            .json({
                "mensagem": resposta,
                "erro": false
            });
        }
        catch(error){
            res.status(400)
            .json({
                "mensagem": error.message,
                "erro": true
            });
        }
    });

    app.put("/portfolio/portfolioId/:id", async (req, res)=>{
        const id = req.params.id;
        const body = req.body;

        try{
            const resposta = await portfolioModel.atualizaPortfolio(id, body);
            res.status(200)
            .json({
                "mensagem": resposta,
                "portfolio": body,
                "erro": false
            });
        }
        catch(error){
            res.status(400)
            .json({
                "mensagem": error.message,
                "erro": true
            });
        }
    });
}

export default portfolioController;