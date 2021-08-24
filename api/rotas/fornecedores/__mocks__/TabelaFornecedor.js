
module.exports = {
    listar () {
      return []
    },
    inserir (fornecedor) {
      return { 
          id: 500,
          dataCriacao: '05/05/2023',
          dataAtualizacao: '05/05/2023',
          versao: 12
        }
    },
    async pegarPorId (id) {
        return { 
            id: 500,
            dataCriacao: '05/05/2023',
            dataAtualizacao: '05/05/2023',
            versao: 12
          }
    },
    async atualizar (id, dadosParaAtualizar) {
      
    },
    async remover (id) {
    }
  }
  