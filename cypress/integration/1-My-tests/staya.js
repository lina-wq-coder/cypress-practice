describe('Тест добавления в корзину', function () {
    it('[+]Ищу товар, добавляю в корзину, удаляю', function () {
        cy.visit('https://staya.dog/');
        cy.get('#__layout > div > main > div > section.home-categories.IndexPage__categories > a:nth-child(2) > div > canvas').click();
        cy.contains('Urban Violet').click();
        cy.xpath('//*[@id="ProductPage::CardForm"]/div[3]/div[1]/div[2]/div/div/label[1]').click();
        cy.xpath('//*[@id="ProductPage::CardForm"]/div[3]/div[2]/div[2]/div/div/label[1]').click();
        cy.xpath('//*[@id="__layout"]/div/main/div/div/div[3]/div/div/button').click();
        cy.xpath('//*[@id="__layout"]/div/section/section/footer/div[2]/a').click();
        cy.contains('Заполните данные получателя');
        cy.xpath('//*[@id="__layout"]/div/main/div/div[2]/div/div[2]/div/section/div[1]/div').click();
    })

    it('[+]Ищу товар, добавляю в корзину, удаляю', function () {
       cy.visit('https://staya.dog/');
    })
 })
