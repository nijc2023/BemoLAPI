// verbo/metodo - endpoint . motivo (request). extensao
/// <reference types="cypress"/>

const playloadsCriacaoProduto = require ('../playloads/CriacaoProduto.json')

function POSTCriacaoProduto () {
  //  cy.request - client http 
    return cy.request({
        method: 'POST',
        url:'produto',
        FailOnStatusCode: 'False',
        body: playloadsCriacaoProduto
    })
}

    export{POSTCriacaoProduto};

