describe('template spec', () => {

    beforeEach(() => {
      cy.visit('http://localhost:4200')
      cy.get('input[name="username"]').type('Josue');
      cy.get('input[name="password"]').type('josue');
      cy.get('button[type="submit"]').click();
      cy.url().should('eq', 'http://localhost:4200/dashboard/equipoTecnico');
      cy.get('button.swal2-confirm').click();
    })
   it('CRUD Modulo', () => {
        cy.get('li.nav__item').eq(0).click();
        cy.get('button[data-bs-toggle="modal"][data-bs-target="#miModal"]').click();
        cy.get('input.nuevoModulo').type('Modulo Nuevo');
        cy.get('select.categoria').select('Salud');
        cy.get('button.guardarModulo').click();
        cy.get('button.swal2-confirm').click();
        cy.get('option.opcionesModulos').last().should('have.text', ' Modulo Nuevo ');
        cy.get('select[name="modulos"]').select('Modulo Nuevo');
        cy.get('i.fas.fa-edit[data-bs-toggle="modal"][data-bs-target="#modalUpdate"]').click();
        cy.get('input.actualizarCapacitacion').type('s');
        cy.get('select.actualizarCapacitacion1').select('Social');
        cy.get('button.actualizarCapacitacion2').click();
        cy.get('button.swal2-confirm').click();
        cy.get('option.opcionesModulos').last().should('have.text', ' Modulo Nuevos ');
        cy.get('select[name="modulos"]').select('Modulo Nuevos');
        cy.get('i.far.fa-trash-alt').click();
        cy.get('button.swal2-confirm').click();
        cy.get('option.opcionesModulos').last().should('not.have.text', ' Modulo Nuevos ');

      })
   it('CRUD Sesiones', () => {
        cy.get('li.nav__item').eq(0).click();
        cy.get('select[name="modulos"]').select('Ventas en Redes Sociales');
        cy.get('i.fas.fa-edit[data-bs-toggle="modal"][data-bs-target="#modalUpdateSesion"]').first().click();
        cy.get('input[name="nombreModulo"]').eq(3).clear().type('Sesion de Edicion',{force: true} );
        cy.get('button.actualizarSesion1').eq(0).click();
        cy.get('button.swal2-confirm').click();
        cy.get('button.header__title').first().should('have.text', ' 1.SESION DE EDICION ');
        cy.get('i.fas.fa-plus-square[data-bs-toggle="modal"][data-bs-target="#modalSesion"]').click();
        cy.get('input.sesionNueva').clear().type('Sesion Nueva',{force: true} );
        cy.get('button.guardarSesion').eq(0).click();
        cy.get('button.swal2-confirm').click();
        cy.get('select[name="modulos"]').select('Whatsaap');
        cy.get('select[name="modulos"]').select('Ventas en Redes Sociales');
        cy.get('button.header__title').last().should('have.text', ' 5.SESION NUEVA ');
        cy.get('i.borrarSesion').last().click();
        cy.get('button.swal2-confirm').click();
        cy.get('button.header__title').last().should('not.have.text', ' 5.SESION NUEVA ');
      })  
    it('Entrar Modulo',()=>{
        cy.get('li.nav__item').eq(0).click();
        cy.get('select[name="modulos"]').select('Ventas en Redes Sociales');
        cy.get('button.header__title').first().click()
        cy.get('article.main-contenedor').should('be.visible')
    })
    it('Crud Seminario',()=>{
        cy.get('li.nav__item').eq(2).click();
        cy.get('button.agregarSeminario').click()
     // Rellenar el campo "Ingrese Nombre" con "seminario prueba"
cy.get('input[name="nombreSeminario"]').type('seminario prueba');

// Rellenar el campo "Ingrese Link" con "https://www.youtube.com/watch?v=TOA5REedn7Q"
cy.get('input[name="urlSeminario"]').clear().type('https://www.youtube.com/watch?v=TOA5REedn7Q');

// Rellenar la fecha de inicio con "2023-10-15"
cy.get('input[name="Fecha"]').eq(0).clear().type('2023-10-15');

// Rellenar la fecha de fin con "2023-10-30"
cy.get('input[name="Fecha"]').eq(1).clear().type('2023-10-30');
cy.get('button[name="botonGuardarSeminario"]').click();
cy.get('button.swal2-confirm').click();
cy.reload();
cy.get('td.nombreSeminario').last().should('have.text', 'seminario prueba');

cy.get('i[name="edicion"').eq(6).click()
cy.get('input[name="nombreSeminario"]').type('2');
cy.get('button[name="botonGuardarSeminario"]').click();
cy.get('button.swal2-confirm').click();
cy.get('button[name="cerrarModal"]').click();
//cy.get('td.nombreSeminario').eq(6).should('have.text', 'Prueba Seminario2');

    })
    it('Reporte Participacion',()=>{
        cy.get('li.nav__item').eq(3).click();
        cy.get('select[name="sede1"]').select('APCN');

// Seleccionar un valor en el menú desplegable de DISTRITO
cy.get('select[name="distrito1"]').select('Chaclacayo');

// Seleccionar un valor en el menú desplegable de BANCO
cy.get('select[name="banco1"]').select('Los Geranios');

// Seleccionar un valor en el menú desplegable de MODULO
cy.get('select[name="modulo1"]').select('Ventas en Redes Sociales');

// Seleccionar un valor en el menú desplegable de SESION
cy.get('select[name="sesion1"]').select('Sesion de Edicion');

cy.get('button[name="botonReporte1"]').click()
// Seleccionar el iframe por su selector
cy.get('iframe[name="iframe1"]').then(($iframe) => {
    // Acceder al contenido del iframe
    const $body = $iframe.contents().find('body');
  
    // Verificar la visibilidad de la tabla dentro del iframe
    cy.wrap($body).find('table#tblData').should('be.visible');
  });
  

    })
    it('Reporte Participantes',()=>{
        cy.get('li.nav__item').eq(4).click();
        cy.get('select[name="sede2"]').select('APCN');

// Seleccionar un valor en el menú desplegable de DISTRITO
cy.get('select[name="distrito2"]').select('Chaclacayo');

// Seleccionar un valor en el menú desplegable de BANCO
cy.get('select[name="banco2"]').select('Los Geranios');

// Seleccionar un valor en el menú desplegable de MODULO
cy.get('select[name="modulo2"]').select('Ventas en Redes Sociales');



cy.get('button[name="botonReporte2"]').click()
// Seleccionar el iframe por su selector
cy.get('table#tblData').should('be.visible');
  

    })
    it('Reporte Seminario',()=>{
        cy.get('li.nav__item').eq(5).click();

        cy.get('select[name="año"]').select('2023'); // Selecciona el valor "2023"
        cy.get('select[name="mes"]').select('10'); // Selecciona el valor "03" (Marzo)

        cy.get('select[name="seminario"]').select('Prueba Seminario2'); // Reemplaza "ValorDeseado" con el valor que deseas seleccionar
        cy.get('select[name="sede"]').select('APCN');
        cy.get('select[name="distrito"]').select('Chaclacayo');
        cy.get('button[name="botonGuardarSeminario"]').click();

        cy.get('iframe[name="iframe2"]').then(($iframe) => {
            // Acceder al contenido del iframe
            const $body = $iframe.contents().find('body');
          
            // Verificar la visibilidad de la tabla dentro del iframe
            cy.wrap($body).find('table#tblData').should('be.visible');
          });


  

    })
     

  })