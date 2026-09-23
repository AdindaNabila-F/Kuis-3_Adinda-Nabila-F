class loginPage{

// 1. Login valid dan lengkap
    visitPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    inputUsername(usernname){
        cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    }
    inputinvalidUsername(username){
         cy.get('input[name="username"]').type('halo')
    }
    inputPassword(password){
        cy.get('input[name="password"]').type('admin123')
    }
    inputinvalidPassword(password){
        cy.get('input[name="password"]').type('123')
    }
    clickLoginBtn(){
        cy.get('button[type="submit"]').should('be.visible').click()
    }
    assertionLogin(){
        cy.url().should('include', 'dashboard')
    }
    assertionLogin2(){
        cy.contains('Required').should('be.visible')
    }
    assertionLogin3(){
        cy.contains('Invalid credentials').should('be.visible')
    }
    assertionLogin4(){
        cy.contains('Forgot your password?').should('be.visible').click()
    }
    assertionLogin5(){
        cy.url().should('include', '/auth/requestPasswordResetCode')
    }
    assertionLogin6(){
        cy.contains('Reset Password').should('be.visible')
    }
    assertionLogin7(){
        cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]').should('be.visible').invoke('removeAttr', 'target').click()
    }
    assertionLogin8(){
        cy.url().should('include', 'linkedin.com')
    }
    assertionLogin9(){
        cy.contains('OrangeHRM, Inc').should('be.visible').click()
    }
}

export default new loginPage()