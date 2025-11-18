describe('My First Login Test', function () {
  it('[+]Login', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton').click();
  })
  
  it('[-]Login', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastud4567');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton').click();
  })

  it('[+]Forgot Login', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('jane@gmail.com');
    cy.get('#restoreEmailButton').click();
    cy.contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton').click();
  })

})
