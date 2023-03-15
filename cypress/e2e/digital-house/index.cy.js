describe('Homescreen View', () => {
  beforeEach(() => cy.visit('http://localhost:19006/'));

  it('page can be open', () => {
    // General
    cy.get('div', { timeout: 5000 }).contains('Bienvenido de vuelta!');
    cy.get('div', { timeout: 5000 }).contains('Ruben Rodriguez');
    cy.get('div', { timeout: 5000 }).contains('TUS PUNTOS');
    cy.contains('Diciembre');
    cy.contains('TUS MOVIMIENTOS');
    cy.viewport(1024, 768);
    cy.contains('Ganados');
    cy.get('div', { timeout: 15000 }).contains('Canjeados');
  });

  it('Click on list movement and return to home', () => {
    cy.wait(5000);
    cy.get('[data-testid="touchableProduct"]').first().click();
    expect(cy.contains('Detalles del producto'));
    expect(cy.contains('Con esta compra acumulaste:'));
    cy.viewport(1024, 768);
    cy.get('[data-testid="touchableGoBackTolist"]').click();
    cy.get('div', { timeout: 5000 }).contains('Bienvenido de vuelta!');
  });

  it('Apply filters in home', () => {
    cy.wait(5000);
    cy.viewport(1024, 768);
    cy.get('[data-testid="touchableGanados"]').click();
    cy.get('[data-testid="touchableTodos"]').click();
    cy.get('[data-testid="touchableCanjeados"]').click();
    cy.get('[data-testid="touchableTodos"]').click();
    cy.get('div', { timeout: 5000 }).contains('Bienvenido de vuelta!');
  });
});
