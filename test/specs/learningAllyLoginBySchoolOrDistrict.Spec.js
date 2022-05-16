const Helper = require('../helper.js')
const LoginPage = require('../pageobjects/loginPage')
const LoginPageBySchool = require('../pageobjects/loginPageBySchoolOrDistrict')

describe('first test', () => {

  it('open the learningAlly', async () => {
    await browser.url('/')
    await Helper.expectVisible(LoginPage.loginButton)
  });

  it('should be able to navigate to the School or District login page', async () => {
    await Helper.expectVisible(LoginPage.loginSchoolOrDistrictLink)
    await Helper.expectText(LoginPage.loginSchoolOrDistrictLink, 'Log in through your school or district');

    await LoginPage.loginSchoolOrDistrictLink.click();
    await Helper.expectVisible(LoginPageBySchool.schoolOrDistrictLoginTitle)
  });

  it('should be able to navigate to the login page', async () => {
    await Helper.expectText(LoginPageBySchool.backToLoginLink, 'Back to login through Learning Ally')
    await LoginPageBySchool.backToLoginLink.click();

    await Helper.expectVisible(LoginPageBySchool.backToLoginLink)
    await Helper.expectVisible(LoginPage.loginButton)
  });
})
