class PortfolioSchema{
    constructor(id, foto, descricao, duracao, clienteId, funcionarioId){
        this.id = id;
        this.foto = foto;
        this.descricao = descricao;
        this.duracao = duracao;
        this.clienteId = clienteId;
        this.funcionarioId = funcionarioId;
    }
}

export default PortfolioSchema;