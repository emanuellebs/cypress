import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
const url = Cypress.config('baseUrl');
const loginFunction = require('../contextTestFiles/login/login.function')

Given('que eu informe minhas credenciais', function () {
    cy.visit(url);
    loginFunction.insereCredenciais();
});

When('clicar no botão entrar', function () {
    loginFunction.clicaBotaoEntrar();
});

Then('serei direcionada para a página inicial', function () {
    //todo
});