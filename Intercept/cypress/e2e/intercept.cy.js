describe('Intercept fitur Login pada website OrangeHRM', () => {

  // 1. Membuka halaman Login 
  it('TC_LGN_001 Membuka halaman Login', () => {
    
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('loginPage');
    
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    
    cy.wait('@loginPage');

    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });

  // 2. Login valid dan lengkap
  it('TC_LGN_002 Login valid dan lengkap', () => {

    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts').as('shortcuts');

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');

    cy.get('button[type="submit"]').click();

    cy.wait('@shortcuts');
  });

  // 3. Login valid dan lengkap
  it('TC_LGN_003 Login valid dan lengkap', () => {

    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary');

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    
    cy.get('button[type="submit"]').click();

    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
  });

  // 4. Login tidak valid - username salah
  it('TC_LGN_004 Login tidak valid - username salah', () => {

    cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages").as('loginRequest1');
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('halo');
    cy.get('input[name="password"]').type('admin123');

    cy.get('button[type="submit"]').click();
    
    cy.wait('@loginRequest1');

     cy.contains('Invalid credentials').should('be.visible')
  });

  // 5. Login tidak valid - password salah
  it('TC_LGN_005 Login tidak valid - password salah', () => {

    cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages").as('loginRequest2');
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('123');

    cy.get('button[type="submit"]').click();
    
    cy.wait('@loginRequest2');

     cy.contains('Invalid credentials').should('be.visible')
});

  // 6. Login tidak valid - username dan password salah
  it('TC_LGN_006 Login tidak valid - username dan password salah', () => {

    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('loginRequest3');

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('halo');
    cy.get('input[name="password"]').type('123');

    cy.get('button[type="submit"]').click();
    
    cy.wait('@loginRequest3');

    cy.contains('Invalid credentials').should('be.visible')
});

  // 7. Membuka halaman "Forgot your password?"
  it('TC_LGN_007 Membuka halaman Forgot Password', () => {

    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('resetpassPage');

    cy.visit('https://opensource-demo.orangehrmlive.com/');
    
    cy.wait('@resetpassPage');
});

  // 8. Melakukan reset password
  it('TC_LGN_008 Melakukan reset password', () => {

     cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('resetpassRequest');
     
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    
     cy.get('input[placeholder="Username"]').type('tes');
     cy.get('button[type="submit"]').click();

     cy.wait('@resetpassRequest');

     cy.contains('Reset Password link sent successfully').should('be.visible')
  });
});