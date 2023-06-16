// verbo/metodo - endpoint . motivo (request). extensao
/// <reference types="cypress"/>

function Gettest () {
  //  cy.request - client http 
    return cy.request({
        method: 'GET',
        url:"usuario",
        FailOnStatusCode: 'False',
        body: 


    })
}
    export{Gettest};

