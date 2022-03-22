class PortfolioDAO{

    constructor(db){
        this.db = db;
    }

    pegaTodosPortfolios = () => {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM PORTFOLIO", (error, rows) =>{
                if(error){
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    pegaUmPortfolio = (id) => {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM PORTFOLIO WHERE ID = ?", 
            id,
            (error, rows) =>{
                if(error){
                    reject(error);
                }else{
                    resolve(rows);
                }
            });
        });
    }

    inserePortfolio = (novoPortfolio) => {
        return new Promise((resolve, reject)=>{
            this.db.run("INSERT INTO PORTFOLIO (FOTO, DESCRICAO, DURACAO, CLIENTEID, FUNCIONARIOID) VALUES (?, ?, ?, ?, ?)",
                novoPortfolio.foto, novoPortfolio.descricao, novoPortfolio.duracao, novoPortfolio.clienteId, novoPortfolio.funcionarioId,
                (error)=>{
                    if(error){
                        reject(error);
                    }else{
                        resolve(`Portfolio ${novoPortfolio.descricao} inserido com sucesso`);
                    }
                }
            );
        });
    }

    deletaPortifolio = (id) =>{
        return new Promise((resolve, reject)=>{
            this.db.run("DELETE FROM PORTFOLIO WHERE ID = ?", 
            id,
            (error)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(`Portfolio de id ${id} deletado com sucesso`);
                }
            });
        });
    }

    atualizaPortfolio = (id, portfolio) => {
        return new Promise((resolve, reject) =>{
            this.db.run("UPDATE PORTFOLIO SET FOTO = ?, DESCRICAO = ?, DURACAO = ?, CLIENTEID = ?, FUNCIONARIOID = ? WHERE ID = ?", portfolio.foto, portfolio.descricao, portfolio.duracao, portfolio.clienteId, portfolio.funcionarioId,
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(`Portfolio de id ${id} atualizado com sucesso`);
                }
            });
        });
    }
}

export default PortfolioDAO;