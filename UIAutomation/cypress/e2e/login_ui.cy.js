describe('Skenario verifikasi fitur Login pada website OrangeHRM ', () => {
  // 1. Login valid dan lengkap
  it('TC_LGN_001 Login valid dan lengkap', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', 'dashboard')
  })

  // 2. Login tidak valid - username dan password kosong
  it('TC_LGN_002 Login tidak valid (kosongkan field username dan password)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('button[type="submit"]').click()
    cy.contains('Required').should('be.visible')
  })

 // 3. Login tidak valid - username kosong
  it('TC_LGN_003 Login tidak valid (kosongkan field username)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Required').should('be.visible')
  })

  // 4. Login tidak valid - password kosong
  it('TC_LGN_004 Login tidak valid (kosongkan field password)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('button[type="submit"]').click()
    cy.contains('Required').should('be.visible')
  })

  // 5. Login tidak valid - username salah
  it('TC_LGN_005 Login tidak valid (isi field username salah)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('halo')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  // 6. Login tidak valid - password salah
  it('TC_LGN_006 Login tidak valid (isi field password salah)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('123')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  // 7. Login tidak valid - username dan password salah
  it('TC_LGN_007 Login tidak valid (isi field username dan password salah)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('halo')
    cy.get('input[name="password"]').type('123')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  // 8. Memastikan button Forgot your password dapat diklik
  it('TC_LGN_008 Memastikan button "Forgot your password?" dapat diklik', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.contains('Forgot your password?').should('be.visible').click()
    cy.url().should('include', '/auth/requestPasswordResetCode')
    cy.contains('Reset Password').should('be.visible')
  })

  // 9. Melakukan reset password dengan username
  it('TC_LGN_009 Melakukan reset password dengan email', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.contains('Forgot your password?').click()
    cy.get('input[name="username"]').type('aku.tes')
    cy.get ('button[type="submit"]').click()
    cy.contains('successfully').should('be.visible')
  })

  // 10. Memastikan ikon Linkedin dapat diklik
  it('TC_LGN_010 Memastikan ikon Linkedin dapat diklik', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'linkedin.com')
  })

  // 11. Memastikan ikon Facebook dapat diklik
  it('TC_LGN_011 Memastikan ikon Facebook dapat diklik', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('a[href="https://www.facebook.com/OrangeHRM/"]') .should('be.visible').invoke('removeAttr', 'target').click()
      cy.url().should('include', 'facebook.com')
  })

  // 12. Memastikan ikon Twitter dapat diklik
  it('TC_LGN_012 Memastikan ikon Twitter dapat diklik', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('a[href="https://twitter.com/orangehrm?lang=en"]').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'twitter.com')
  })

  // 13. Memastikan ikon Youtube dapat diklik
  it('TC_LGN_013 Memastikan ikon Youtube dapat diklik', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('a[href="https://www.youtube.com/c/OrangeHRMInc"]').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'youtube.com')
  })

  // 14. Memastikan teks OrangeHRM, Inc dapat diklik
  it('TC_LGN_014 Memastikan teks tautan "OrangeHRM, Inc" dapat diklik', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.contains('OrangeHRM, Inc').should('be.visible').click()
  })
})