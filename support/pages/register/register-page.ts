import { Page, expect } from '@playwright/test'
import locators from "./locators"
import { faker } from '@faker-js/faker'

export class RegisterPage {
    readonly page: Page;
    readonly randomEmail: string

    constructor(page: Page) {
        this.page = page
        this.randomEmail = faker.internet.email()
    }

    async visitar() {
        await this.page.goto('https://demo.nopcommerce.com/')
    }

    async registrarLogin() {
        await this.page.click(locators.hrfRegister)
        await this.page.click(locators.inputGenderMale)
        await this.page.fill(locators.inputFirstName, 'Luccas')
        await this.page.fill(locators.inputLastName, 'Neto')
        await this.page.selectOption(locators.selectDayOfBirth, '12')
        await this.page.selectOption(locators.selectMonthOfBirth, '12')
        await this.page.selectOption(locators.selectYearOfBirth, '1988')
        await this.page.fill(locators.inputMail, this.randomEmail)
        await this.page.fill(locators.inputCompanyName, 'Empresa de Teste Ltda')
        await this.page.click(locators.inputNewsletter)
        await this.page.fill(locators.inputPassword, 'Test@123')
        await this.page.fill(locators.inputConfirmPassword, 'Test@123')
        await this.page.click(locators.btnRegister)
    }

    async validarMensagemRegistoSucesso() {
        const messageCompleted = await this.page.textContent(locators.registrationMessage)
        expect(messageCompleted).toEqual('Your registration completed')
        
        const message = await this.page.isVisible(locators.registrationMessage)
        expect(message).toBeTruthy
    }

    async validarDataAniversario() {
        await this.page.click(locators.hrfRegister);
        await this.page.selectOption(locators.selectDayOfBirth, { value: '16' });
        await this.page.selectOption(locators.selectMonthOfBirth, { value: '3' });
        await this.page.selectOption(locators.selectYearOfBirth, { value: '2001' });
        
        const selectDay = await this.page.$eval(locators.selectDayOfBirth, element => (element as HTMLSelectElement).value)
        const selectMonth = await this.page.$eval(locators.selectMonthOfBirth, element => (element as HTMLSelectElement).value)
        const selectYear = await this.page.$eval(locators.selectYearOfBirth, element => (element as HTMLSelectElement).value)

        expect(selectDay).toBe('16')
        expect(selectMonth).toBe('3')
        expect(selectYear).toBe('2001')
    }

    async validarMensagemErroPrimeiroNome() {
        await this.page.click(locators.hrfRegister)
        await this.page.fill(locators.inputLastName, 'Sabrina')
        await this.page.fill(locators.inputMail, this.randomEmail)
        await this.page.fill(locators.inputPassword, 'Test@123')
        await this.page.fill(locators.inputConfirmPassword, 'Test@123')
        await this.page.click(locators.btnRegister)

        const errorMessageVisible = await this.page.isVisible(locators.spanFirstNameError)
        expect(errorMessageVisible).toBeTruthy()

        const errorMessage = await this.page.textContent(locators.spanFirstNameError)
        expect(errorMessage).toEqual('First name is required.')
    }

    async validarMensagemErroUltimoNome() {
        await this.page.click(locators.hrfRegister)
        await this.page.fill(locators.inputFirstName, 'Pereira')
        await this.page.fill(locators.inputMail, this.randomEmail)
        await this.page.fill(locators.inputPassword, 'Test@123')
        await this.page.fill(locators.inputConfirmPassword, 'Test@123')
        await this.page.click(locators.btnRegister)

        const errorMessageVisible = await this.page.isVisible(locators.spanLastNameError)
        expect(errorMessageVisible).toBeTruthy()

        const errorMessage = await this.page.textContent(locators.spanLastNameError)
        expect(errorMessage).toEqual('Last name is required.')
    }

    async validarMensagemErroEmail() {
        await this.page.click(locators.hrfRegister)
        await this.page.fill(locators.inputLastName, 'Sabrina')
        await this.page.fill(locators.inputFirstName, 'Pereira')
        await this.page.fill(locators.inputPassword, 'Test@123')
        await this.page.fill(locators.inputConfirmPassword, 'Test@123')
        await this.page.click(locators.btnRegister)

        const errorMessageVisible = await this.page.isVisible(locators.spanEmailError)
        expect(errorMessageVisible).toBeTruthy()

        const errorMessage = await this.page.textContent(locators.spanEmailError)
        expect(errorMessage).toEqual('Email is required.')
    }

    async validarMensagemEmailInvalido() {
        await this.page.click(locators.hrfRegister)
        await this.page.fill(locators.inputLastName, 'Sabrina')
        await this.page.fill(locators.inputFirstName, 'Pereira')
        await this.page.fill(locators.inputMail, 'sarbina.pereira')
        await this.page.fill(locators.inputPassword, 'Test@123')
        await this.page.fill(locators.inputConfirmPassword, 'Test@123')
        await this.page.click(locators.btnRegister)

        const errorMessageVisible = await this.page.isVisible(locators.spanEmailError)
        expect(errorMessageVisible).toBeTruthy()

        const errorMessage = await this.page.textContent(locators.spanEmailError)
        expect(errorMessage).toEqual('Wrong email')
    }

    async validarMensagemErroSenha() {
        await this.page.click(locators.hrfRegister)
        await this.page.fill(locators.inputFirstName, 'Sônia')
        await this.page.fill(locators.inputLastName, 'Alves')
        await this.page.fill(locators.inputMail, this.randomEmail)
        await this.page.fill(locators.inputConfirmPassword, 'Test@123')
        await this.page.click(locators.btnRegister)
        await this.page.click(locators.btnRegister)

        const errorMessageVisible = await this.page.isVisible(locators.spanPasswordError)
        expect(errorMessageVisible).toBeTruthy()

        const errorMessage = await this.page.textContent(locators.spanPasswordError)
        expect(errorMessage).toEqual('Password is required.')
    }

    async validarMensagemLimiteCaracteresSenha() {
        await this.page.click(locators.hrfRegister)
        await this.page.fill(locators.inputFirstName, 'Sônia')
        await this.page.fill(locators.inputLastName, 'Alves')
        await this.page.fill(locators.inputMail, this.randomEmail)
        await this.page.fill(locators.inputPassword, 'Test@')
        await this.page.click(locators.btnRegister)

        const errorMessageVisible = await this.page.isVisible(locators.spanPasswordError)
        expect(errorMessageVisible).toBeTruthy()

        const errorMessage = await this.page.textContent(locators.spanPasswordError)
        expect(errorMessage).toEqual('Password must meet the following rules: must have at least 6 characters')
    }

    async validarMensagemErroConfirmarSenha() {
        await this.page.click(locators.hrfRegister)
        await this.page.fill(locators.inputFirstName, 'Sônia')
        await this.page.fill(locators.inputLastName, 'Alves')
        await this.page.fill(locators.inputMail, this.randomEmail)
        await this.page.fill(locators.inputPassword, 'Test@123')
        await this.page.click(locators.btnRegister)
        await this.page.click(locators.btnRegister)

        const errorMessageVisible = await this.page.isVisible(locators.spanConfirmPasswordError)
        expect(errorMessageVisible).toBeTruthy()

        const errorMessage = await this.page.textContent(locators.spanConfirmPasswordError)
        expect(errorMessage).toEqual('Password is required.')
    }

    async validarMensagemErroSenhasNaoConferem() {
        await this.page.click(locators.hrfRegister)
        await this.page.fill(locators.inputFirstName, 'Sônia')
        await this.page.fill(locators.inputLastName, 'Alves')
        await this.page.fill(locators.inputMail, this.randomEmail)
        await this.page.fill(locators.inputPassword, 'Test@123')
        await this.page.fill(locators.inputConfirmPassword, 'Test@321')
        await this.page.click(locators.btnRegister)

        const errorMessageVisible = await this.page.isVisible(locators.spanConfirmPasswordError)
        expect(errorMessageVisible).toBeTruthy()

        const errorMessage = await this.page.textContent(locators.spanConfirmPasswordError)
        expect(errorMessage).toEqual('The password and confirmation password do not match.')
    }
}