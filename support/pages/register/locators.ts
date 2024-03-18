const locators = {
    hrfRegister: '//*[@href="/register?returnUrl=%2F"]',
    inputGenderMale: '//*[@id="gender-male"]',
    inputGenderFemale: '//*[@id="gender-female"]',
    inputFirstName: '//*[@id="FirstName"]',
    inputLastName: '//*[@id="LastName"]',
    selectDayOfBirth: '//*[@name="DateOfBirthDay"]',
    selectMonthOfBirth: '//*[@name="DateOfBirthMonth"]',
    selectYearOfBirth: '//*[@name="DateOfBirthYear"]',
    inputMail: '//*[@id="Email"]',
    inputCompanyName: '//*[@id="Company"]',
    inputNewsletter: '//*[@id="Newsletter"]',
    inputPassword: '//*[@id="Password"]',
    inputConfirmPassword: '//*[@id="ConfirmPassword"]',
    btnRegister: '//*[@id="register-button"]',
    registrationMessage: '//*[@class="result"]',
    spanFirstNameError: '//*[@id="FirstName-error"]',
    spanLastNameError: '//*[@id="LastName-error"]',
    spanEmailError: '//*[@id="Email-error"]',
    spanPasswordError: '//*[@id="Password-error"]',
    spanConfirmPasswordError: '//*[@id="ConfirmPassword-error"]'
};

export default locators;