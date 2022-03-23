import PortfolioDAO from "../DAO/PortfolioDAO.js";
import PortfolioSchema from "./schema/PortfolioSchema.js";

class Portfolio{
    constructor(db){
        this.dao = new PortfolioDAO(db);
    }

    pegaTodosPortfolios = async ()=>{
        try {
            return await this.dao.pegaTodosPortfolios();
        } catch (error) {
            throw error;
        }
    }

    pegaUmPortfolio = async (id)=>{
        try {
            await this._verificaPortfolio(id);

            return await this.dao.pegaUmPortfolio(id);
        } catch (error) {
            throw error;
        }
    }

    inserePortfolio = async (portfolio)=>{
        try{
            const novoPortfolio = new PortfolioSchema(portfolio.foto, portfolio.descricao, portfolio.duracao, portfolio.clienteid, portfolio.funcionarioid)
            return await this.dao.inserePortfolio(novoPortfolio);
        } catch (error) {
            throw error;
        }
    }

    deletaPortfolio = async (id)=>{
        try{
            await this._verificaPortfolio(id);

            return await this.dao.deletaPortifolio(id);
        } catch (error) {
            throw error;
        }
    }

    atualizaPortfolio = async (id, portfolio)=>{
        try {
            await this._verificaPortfolio(id);

            const portfolioAtualizado = new PortfolioSchema(portfolio.foto, portfolio.descricao, portfolio.duracao, portfolio.clienteid, portfolio.funcionarioid);

            return await this.dao.atualizaPortfolio(id, portfolioAtualizado);
        } catch (error) {
            throw error;
        }
    }

    _verificaPortfolio = async (id)=>{
        const resposta = await this.dao.pegaUmPortfolio(id);
        if(resposta.length === 0){
            throw new Error(`Portfolio de id ${id} não existe`);
        }
    }
}

export default Portfolio;