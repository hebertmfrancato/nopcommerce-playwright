## Projeto de Automação de Testes com Playwright da nopCommerce

### Descrição

Esse é um projeto simples de automação de testes utilizando Playwright, Faker e uma extensão para manipulação de caminhos.

> https://demo.nopcommerce.com/

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em seu sistema:

[Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.

[Npm](https://www.npmjs.com/package/npm) - Gerenciador de pacotes do Node.js.

[VSCode](https://code.visualstudio.com/) - Editor de código-fonte.

[Playwright](https://playwright.dev/) - Biblioteca para automação de testes em navegadores da web.

[Faker] (https://fakerjs.dev/) - Biblioteca para geração de dados fictícios.

### Executando os testes

Para executar os testes, utilize o seguinte comando no terminal do VS Code:

- `npm test` ou `npm run test-ui`

### Estrutura do projeto

- `support/pages/`: Esse diretório possui as pastas das páginas do site, e dentro de cada pasta, estão localizadas as classes e os locators correspondentes a cada página.

- `tests/`: Nessa pasta, estão localizadas as suítes de teste em arquivos do tipo `.spec.ts`.