// Model que cuida da criação do objeto da nossa entidade
// Validando as entradas

class Portfolio{
    constructor(portfolioId, foto, descricao, servico, duracao, clienteId, funcionarioId){
        this.portfolioId = portfolioId;
        this.foto = foto;
        this.descricao = descricao;
        this.servico = servico;
        this.duracao = duracao;
        this.clienteId = clienteId;
        this.funcionarioId = funcionarioId;
    }
}

export default Portfolio;