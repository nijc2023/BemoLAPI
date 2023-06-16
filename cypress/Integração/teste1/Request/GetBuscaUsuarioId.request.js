// verbo/metodo - endpoint . motivo (request). extensao
/// <reference types="cypress"/>

const playloadsBuscarIdUsuario = require ('../playloads/BuscarIUsuario.json')


function GetBuscaUsuarioId () {
  //  cy.request - client http 
    return cy.request({
        method: 'GET',
        url:'usuariousuarios/IREnlEQnpU8Yau2N',
        FailOnStatusCode: 'False',
        body: playloadsBuscarIdUsuario
    })
}
    export{GetBuscaUsuarioId};

