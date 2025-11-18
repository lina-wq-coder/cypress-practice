
describe('Тестирование главной Википедии', function () {
   it('Проверка, что при поиске Москвы в выдаче есть информация о столице', function () {
        cy.visit('https://ru.wikipedia.org/wiki/');
        cy.get("#searchInput").type('Москва').type('{enter}');
        cy.contains('столица России');
    })
})
