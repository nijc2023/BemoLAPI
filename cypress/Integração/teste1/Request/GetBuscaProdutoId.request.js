// verbo/metodo - endpoint . motivo (request). extensao
/// <reference types="cypress"/>

const playloadsBuscarIdProduto = require ('../playloads/BuscarIdProduto.json')

function GetBuscarIdProduto () {
  //  cy.request - client http 
  return cy.request({
    method: 'GET',
    url:'usuariousuarios/IREnlEQnpU8Yau2N',
    FailOnStatusCode: 'False',
    body: playloadsBuscarIdProduto
    })
}

    export{GetBuscarIdProduto};

