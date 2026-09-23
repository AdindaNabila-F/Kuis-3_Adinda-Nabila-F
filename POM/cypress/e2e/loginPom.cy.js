import loginPage from '../support/pageObjects/loginPage'
import loginData from '../fixtures/loginData.json'

describe('Skenario verifikasi fitur Login pada website OrangeHRM ', () => {
  // 1. Login valid dan lengkap
  it('TC_LGN_001 Login valid dan lengkap', () => {
    loginPage.visitPage()
    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.validPassword)
    loginPage.clickLoginBtn()
    loginPage.assertionLogin()
  })
  
  // 2. Login tidak valid - username dan password kosong
  it('TC_LGN_002 Login tidak valid (username dan password kosong) ', () => {
    loginPage.visitPage()
    loginPage.clickLoginBtn()
    loginPage.assertionLogin2()
  })

  // 3. Login tidak valid - username kosong
  it('TC_LGN_003 Login tidak valid (kosongkan field username)', () => {
    loginPage.visitPage()
    loginPage.inputPassword(loginData.validPassword)
    loginPage.clickLoginBtn()
    loginPage.assertionLogin2()
  })

  // 4. Login tidak valid - password kosong
  it('TC_LGN_004 Login tidak valid (kosongkan field password)', () => {
    loginPage.visitPage()
    loginPage.inputUsername(loginData.validUsername)
    loginPage.clickLoginBtn()
    loginPage.assertionLogin2()
  })

  // 5. Login tidak valid - username salah
  it('TC_LGN_005 Login tidak valid (isi field username salah)', () => {
    loginPage.visitPage()
    loginPage.inputinvalidUsername(loginData.invalidUsername)
    loginPage.inputPassword(loginData.validPassword)
    loginPage.clickLoginBtn()
    loginPage.assertionLogin3()
  })

  // 6. Login tidak valid - password salah
  it('TC_LGN_006 Login tidak valid (isi field password salah)', () => {
    loginPage.visitPage()
    loginPage.inputUsername(loginData.Username)
    loginPage.inputinvalidPassword(loginData.invalidPassword)
    loginPage.clickLoginBtn()
    loginPage.assertionLogin3()
  })

  // 7. Login tidak valid - username dan password salah
  it('TC_LGN_007 Login tidak valid (isi field username dan password salah)', () => {
    loginPage.visitPage()
    loginPage.inputinvalidUsername(loginData.invalidUsername)
    loginPage.inputinvalidPassword(loginData.invalidPassword)
    loginPage.clickLoginBtn()
    loginPage.assertionLogin3()
  })

  // 8. Memastikan button Forgot your password dapat diklik
  it('TC_LGN_008 Memastikan button "Forgot your password?" dapat diklik', () => {
    loginPage.visitPage()
    loginPage.assertionLogin4()
    loginPage.assertionLogin5()
    loginPage.assertionLogin6()
  })

  // 9. Memastikan ikon Linkedin dapat diklik
  it('TC_LGN_009 Memastikan ikon Linkedin dapat diklik', () => {
    loginPage.visitPage()
    loginPage.assertionLogin7()
    loginPage.assertionLogin8()
  })

  // 10. Memastikan teks OrangeHRM, Inc dapat diklik
  it('TC_LGN_010 Memastikan teks tautan "OrangeHRM, Inc" dapat diklik', () => {
    loginPage.visitPage()
    loginPage.assertionLogin9()
  })
})