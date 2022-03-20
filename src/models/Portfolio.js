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
            return {
                "mensagem": error.message,
                "erro": true
            }
        }
    }

    pegaUmPortfolio = async (id)=>{
        try {
            return await this.dao.pegaUmPortfolio(id);
        } catch (error) {
            return {
                "mensagem": error.message,
                "erro": true
            }
        }
    }

    inserePortfolio = async (portfolio)=>{
        try{
            const novoPortfolio = new PortfolioSchema(portfolio.foto, portfolio.descricao, portfolio.duracao, portfolio.clienteId, portfolio.funcionarioId)
            return await this.dao.inserePortfolio(novoPortfolio);
        } catch (error) {
            return ({
                "mensagem": error.message,
                "erro": true
            });
        }
    }

    deletaPortfolio = async (id)=>{
        try{
            await this._verificaPortfolio(id);

            return await this.dao.deletaPortifolio(id);
        } catch (error) {
            return {
                "mensagem": error.message,
                "erro": true
            }
        }
    }

    atualizaPortfolio = async (id, portfolio)=>{
        try {
            await this_verificaPortfolio(id);

            const portfolioAtualizado = new PortfolioSchema(portfolio.foto, portfolio.descricao, portfolio.duracao, portfolio.clienteId, portfolio.funcionarioId);

            return await this.dao.atualizaPortfolio(id, portfolioAtualizado);
        } catch (error) {
            return ({
                "mensagem": error.message,
                "erro": true
            });
        }
    }

    _verificaPortfolio = async (id)=>{
        const resposta = await this.dao.pegaUmPortfolio(id);
        if(resposta.portfolio.length === 0){
            throw new Error(`Portfolio de id ${id} não existe`);
        }
    }
}

export default Portfolio;