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
                    resolve({
                        "portfolios": rows,
                        "erro": false
                    });
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
                    resolve({
                        "portfolio": rows,
                        "erro": false
                    });
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
                        resolve({
                            "mensagem": `Portfolio ${novoPortfolio.descricao} inserido com sucesso`,
                            "portfolio": novoPortfolio,
                            "erro": false
                        });
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
                    resolve({
                        "portfolio": `Portfolio de id ${id} deletado com sucesso`,
                        "erro": false
                    });
                }
            });
        });
    }

    atualizaPortfolio = (id, portfolio) => {
        return new Promise((resolve, reject) =>{
            this.db.run("UPDATE USUARIOS SET FOTO = ?, DESCRICAO = ?, DURACAO = ?, CLIENTEID = ?, FUNCIONARIOID = ?", portfolio.foto, portfolio.descricao, portfolio.duracao, portfolio.clienteId, portfolio.funcionarioId,
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "mensagem": `Portfolio de id ${id} atualizado com sucesso`,
                        "portfolio": portfolio,
                        "erro": false
                    });
                }
            });
        });
    }

}

export default PortfolioDAO;