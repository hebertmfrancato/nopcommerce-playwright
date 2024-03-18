import { test } from '@playwright/test'
import { RegisterPage } from '../support/pages/register/register-page'

let register: RegisterPage

test.describe('Cenários de registro de usuário', () => {
    
    test.beforeEach(async ({page})=> {
        register = new RegisterPage(page)
        
        await register.visitar()
    })

    test('Registrar usuário com sucesso', async () => {
        await register.registrarLogin()
        await register.validarMensagemRegistoSucesso()
    });

    test('Validar correspondência da data de aniversário preenchida', async () => {
        await register.validarDataAniversario()
    })

    test('Validar mensagem de erro do campo "First Name" é obrigatório', async () => {
        await register.validarMensagemErroPrimeiroNome()
    })

    test('Validar mensagem de erro do campo "Last Name" é obrigatório', async () => {
        await register.validarMensagemErroUltimoNome()
    })

    test('Validar mensagem de erro do campo "Email" é obrigatório', async () => {
        await register.validarMensagemErroEmail()
    })

    test('Validar mensagem de erro do campo "Email" com valor inválido', async () => {
        await register.validarMensagemEmailInvalido()
    })

    test('Validar mensagem de erro do campo "Password" é obrigatório', async () => {
        await register.validarMensagemErroSenha()
    })

    test('Validar mensagem de erro do limite de caracteres do campo “Password”', async () => {
        await register.validarMensagemLimiteCaracteresSenha()
    })

    test('validar mensagem de erro do campo "Confirm Password" é obrigatório', async () => {
        await register.validarMensagemErroConfirmarSenha()
    })

    test('validar mensagem de erro quando as senhas não conferem', async () => {
        await register.validarMensagemErroSenhasNaoConferem()
    })
})