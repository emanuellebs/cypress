const loginData = require('../login/login.data');
const loginElement = require('../login/login.element');

module.exports = {

    insereCredenciais: function () {
        cy.get(loginElement.email).type(loginData.email, { delay: 500, force: true});
        cy.get(loginElement.senha).type(loginData.senha, { delay: 500, force: true});
    },

    clicaBotaoEntrar: function () {
        cy.get(loginElement.entrar).click();
    }
}