// Model que cuida da criação do objeto da nossa entidade
// Validando as entradas

class Portfolio{
    constructor(foto, descricao, servico, duracao, cliente_id, funcionario_id){
        this.foto = foto;
        this.descricao = descricao;
        this.servico = servico;
        this.duracao = duracao;
        this.cliente_id = cliente_id;
        this.funcionario_id = funcionario_id;
    }
}

export default Portfolio;