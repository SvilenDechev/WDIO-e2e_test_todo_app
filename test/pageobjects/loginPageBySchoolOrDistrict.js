class LoginPageBySchoolOrDistrict {

  get schoolOrDistrictLoginTitle() { return $('.school-login h4') }

  get backToLoginLink() { return $('.login.school-login > button') }

}

module.exports = new LoginPageBySchoolOrDistrict();
