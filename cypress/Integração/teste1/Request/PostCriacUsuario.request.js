// verbo/metodo - endpoint . motivo (request). extensao
/// <reference types="cypress"/>

const playloadsCriacaoUsuario = require ('../playloads/Criacaousuario.json')

function POSTCriacaoUsuario () {
  //  cy.request - client http 
    return cy.request({
        method: 'POST',
        url:'usuario',
        FailOnStatusCode: 'False',
        body: playloadsCriacaoUsuario
    })
}

    export{POSTCriacaoUsuario};

