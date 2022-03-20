import Portfolio from "../models/Portfolio.js";
import PortfolioDAO from "../DAO/PortfolioDAO.js";

const portfolioController = (app, bd)=>{
    const portfolioDAO = new PortfolioDAO(bd);

    app.get('/portfolio', (req, res)=>{
        portfolioDAO.pegaTodosPortfolios()
        .then((resposta)=>{
            res.json(resposta);
        })
        .catch((erro)=>{
            res.json(erro);
        });
    });

    app.get("/portfolio/portfolioId/:id", (req, res)=>{
        const id = req.params.id;
        
        portfolioDAO.pegaUmPortfolio(id)
        .then((resposta)=>{
            res.json(resposta);
        })
        .catch((erro)=>{
            res.json(erro);
        })
    });

    app.post('/portfolio', (req, res)=>{
        const body = req.body;

        try {
            const novoPortfolio = new Portfolio(body.foto, body.descricao, body.duracao, body.clienteId, body.funcionarioId);

            portfolioDAO.inserePortfolio(novoPortfolio)
            .then((resposta)=>{
                res.json(resposta);
            })
            .catch((erro)=>{
                res.json(erro);
            });
        }
        catch(error) {
            res.json({
                "msg": error.message,
                "erro": true
            });
        }
    });

    app.delete("/portfolio/portfolioId/:id", (req, res)=>{
        const id = req.params.id;
        portfolioDAO.deletaPortifolio(id)
        .then((resposta)=>{
            res.json(resposta);
        })
        .catch((erro)=>{
            res.json(erro);
        })
    });

    app.put("/portfolio/portfolioId/:id", (req, res)=>{
        const id = req.params.id;
        const body = req.body;

        try {
            const portfolioAtualizado = new Portfolio(body.foto, body.descricao, body.duracao, body.clienteId, body.funcionarioId);

            portfolioDAO.atualizaPortfolio(id, portfolioAtualizado)
            .then((resposta)=>{
                res.json(resposta);
            })
            .catch((erro)=>{
                res.json(erro);
            });
        }
        catch(error) {
            res.json({
                "msg": error.message,
                "erro": true
            });
        }
    });
}

export default portfolioController;