
import * as GetBuscarUsuarioId from '../Request/GetBuscarProdutoId.request';

describe('Busca Usuário Pelo ID', () => {
    it('Busca pelo ID', () => {
        GetBuscarUsuarioId.GetBuscarUsuarioId().should((response) => {
            cy.log(response.status)
            cy.log(response.statusText)
        })
    });
});