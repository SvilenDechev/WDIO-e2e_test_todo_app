const Helper = require('../helper.js')
const LoginPage = require('../pageobjects/loginPage')

describe('first test', () => {

  it('first test', async () => {
    await browser.url('/')
    await expect(browser).toHaveUrlContaining('audiobooks-staging.asteasolutions')
    await Helper.expectVisible(LoginPage.loginButton)
  });

  it('should show error messages if not fill the username and password fields', async () => {
    await LoginPage.loginButton.click();
    await Helper.expectText(LoginPage.usernameFieldError, 'Please enter a username.');
    await Helper.expectText(LoginPage.passwordFieldError, 'Please enter a password.')
  });

  it('should show error message if not fill the password fields', async () => {
    await Helper.setValue(LoginPage.usernameField, 'invalidUserName')
    await LoginPage.loginButton.click();

    await Helper.expectInvisible($('.login-form .row:nth-child(1) .form-error'))
    await Helper.expectVisible($('.login-form .row:nth-child(2) .form-error'))
    await Helper.expectText($('.login-form .row:nth-child(2) .form-error'), 'Please enter a password.')
  });  

  it('should show error message if credentials are not valid', async () => {
    await Helper.expectInvisible(LoginPage.loginFailedError)
    await Helper.setValue(LoginPage.passwordField,'invalidPass')
    await LoginPage.loginButton.click();

    await Helper.expectVisible(LoginPage.loginFailedError)
    await Helper.expectText(LoginPage.loginFailedError, 'Login Failed. Please try again. Remember that passwords are case sensitive.')
  });

  it('should be able to login', async () => {
    await Helper.setValue(LoginPage.usernameField, 'Asteastudent')
    await Helper.setValue(LoginPage.passwordField, 'Asteastudent')
    await LoginPage.loginButton.click();

    await Helper.expectInvisible(LoginPage.loginButton)
    await Helper.getElementWithAriaLabel('Open profile menu').waitForDisplayed({ timeout: 5000 })
  })
})
