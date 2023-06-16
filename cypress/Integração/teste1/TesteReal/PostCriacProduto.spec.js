
import * as POSTCriacaoProduto from '../Request/PostCriacProduto.request';

describe('Criação e Validação do produto', () => {
    it('Criação Produto', () => {
        POSTCriacaoProduto.POSTCriacaoProdduto().should((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.Title).to.eq("Logitech Nat");
        })
    });
});