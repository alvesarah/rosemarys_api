// Model que cuida da criação do objeto da nossa entidade
// Validando as entradas

class Portfolio{
    constructor(id, foto, descricao, duracao, clienteId, funcionarioId){
        this.id = id;
        this.foto = foto;
        this.descricao = descricao;
        this.duracao = duracao;
        this.clienteId = clienteId;
        this.funcionarioId = funcionarioId;
    }
}

export default Portfolio;