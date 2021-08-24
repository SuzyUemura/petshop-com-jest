jest.mock('../../../api/rotas/fornecedores/TabelaFornecedor')
const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor')

describe('classe Fornecedor', () => {
    test('o método validar() retorna true', () => {
        const fornecedor = new Fornecedor({
            empresa: "Gatito",
            email: "contato@gatito.com.br",
            categoria: "brinquedos"
        })
        expect(fornecedor.validar()).toBe(true)
    })

    test('método criar() executado com sucesso', async() => {
        const fornecedor = new Fornecedor({
            empresa: "Gatito",
            email: "contato@gatito.com.br",
            categoria: "brinquedos"
        })

        await fornecedor.criar()

        expect(fornecedor.id).toBe(500)
        expect(fornecedor.dataCriacao).toBe('05/05/2023')
        expect(fornecedor.dataAtualizacao).toBe('05/05/2023')
        expect(fornecedor.versao).toBe(12)
    })
})