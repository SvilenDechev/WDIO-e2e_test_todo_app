class LoginPage {

  get usernameField() { return $('#username-input') }

  get passwordField() { return $('#password-input') }

  get loginButton() { return $('[aria-label="Login"]') }

  get usernameFieldError() { return $('.login-form .row:nth-child(1) .form-error') }

  get passwordFieldError() { return $('.login-form .row:nth-child(2) .form-error') }

  get loginFailedError() { return $('.error') }

  get loginSchoolOrDistrictLink() { return $('.login-form .row:nth-child(4) a') }
}

module.exports = new LoginPage();
