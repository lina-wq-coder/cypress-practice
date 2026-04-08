describe('Проверка всех ссылок на главной странице', () => {

  beforeEach(() => {
    // Увеличиваем таймаут, если сайт подтормаживает
    cy.visit('http://uitestingplayground.com', { timeout: 30000 });
  });

  it('Все ссылки должны возвращать статус 200', () => {
    // Собираем все теги <a>
    cy.get('a').each(($el) => {
      const href = $el.prop('href');

      // Проверяем только реальные http/https ссылки
      if (href && href.startsWith('http')) {
        
        cy.request({
          url: href,
          failOnStatusCode: false, // Не падаем сразу, чтобы увидеть результат в expect
          timeout: 10000          // Ждем ответ не более 10 секунд
        }).then((response) => {
          // Выводим в лог для наглядности
          cy.log(`Проверка ссылки: ${href} -> Статус: ${response.status}`);
          
          // Проверка: статус должен быть успешным (200) или перенаправлением (30x)
          expect(response.status).to.be.oneOf([200, 301, 302]);
        });
      }
    });
  });

  it('Проверка всех кнопок на видимость', () => {
    // На главной странице "кнопки" часто реализованы как ссылки с классами
    // Проверим все элементы, которые выглядят как кнопки или имеют роль button
    cy.get('.btn, button, [role="button"]').each(($btn) => {
      cy.wrap($btn).should('be.visible');
    });
  });
});
