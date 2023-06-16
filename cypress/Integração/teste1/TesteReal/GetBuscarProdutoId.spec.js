
import * as GetBuscarProdutoId from '../Request/GetBuscarProdutoId.request';

describe('Busca Produto Pelo ID', () => {
    it('Busca pelo ID', () => {
        GetBuscarProdutoId.GetBuscarProdutoId().should((response) => {
            cy.log(response.status);
            cy.log(response.statusText); 
        })
    });
});