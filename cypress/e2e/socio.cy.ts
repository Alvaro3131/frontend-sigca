describe('template spec', () => {

  beforeEach(() => {

    cy.visit('http://localhost:4200')
    cy.get('input[name="username"]').type('Ariana');
    cy.get('input[name="password"]').type('ariana');
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', 'http://localhost:4200/vistaSocio'); 
    cy.get('button.swal2-confirm').click();
  })
  it('Modal Seminario', () => {
    cy.get('button.carousel-control-next').click();
    cy.get('button.btn.btn-danger[data-bs-target="#entrarSeminario"]').click();
    cy.wait(1000);
    cy.get('button[name="cerrarAsistencia"]').click();
    
  })
  it('Regitrar Asistencia Seminario Seminario', () => {
    cy.get('button.carousel-control-next').click();
    cy.get('button[name="ModalAsistencia"]').click();

/* 
      cy.get('#Asistencia')
        .should('not.be.visible')
        .then((res) => {
          console.log(res)
          cy.get('#4estrella').click();
          cy.get('textarea#exampleFormControlTextarea1').eq(1).type('Texto de pruebaasasasasas', { force: true });
          cy.get('button.asistencia').click();
          cy.get('.swal2-popup').should('exist');
        }); */

  })
  it('Entra Modulos', () => {
    cy.get('button[routerLink="/vistaModulo"]').click();
    cy.url().should('eq', 'http://localhost:4200/vistaModulo'); 
    cy.contains('div', 'Click para abrir').click();
    cy.get('a.recurso').first().click();

  })
  it('Pedido Oración', () => {
    cy.get('button.pedido').click();
    cy.get('textarea#exampleFormControlTextarea1').eq(0).type('Texto de pruebaasasasasas', { force: true });
    cy.get('button.guardar').click();
    cy.get('.swal2-popup').should('exist');
  })
})