
import * as POSTCriacaoUsuario from '../Request/PostCriacUsuario.request';

describe('Criação e Validação do usuário', () => {
    it('Criação Usuário', () => {
        POSTCriacaoUsuario.POSTCriacaoUsuario().should((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.Title).to.eq("Fernando DEV");
        })
    });
});