import Portfolio from "../models/Portfolio.js";

const portfolioController = (app, bd)=>{
    const portfolioModel = new Portfolio(bd);


    app.get('/portfolio', async (req, res)=>{
        res.json(await portfolioModel.pegaTodosPortfolios());
    });

    app.get("/portfolio/portfolioId/:id", async (req, res)=>{
        const id = req.params.id;
        res.json(await portfolioModel.pegaUmPortfolio(id));
    });

    app.post('/portfolio', async (req, res)=>{
        const body = req.body;
        res.json(await portfolioModel.inserePortfolio(body));
    });

    app.delete("/portfolio/portfolioId/:id", async (req, res)=>{
        const id = req.params.id;
        res.json(await portfolioModel.deletaPortfolio(id));
    });

    app.put("/portfolio/portfolioId/:id", async (req, res)=>{
        const id = req.params.id;
        const body = req.body;

        res.json(await portfolioModel.atualizaPortfolio(id, body));
    });
}

export default portfolioController;