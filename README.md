# QA - Formulário de Cadastro

Este repositório contém a implementação e os testes de qualidade (QA) para um formulário de cadastro de usuário. Foram realizados testes de interface (E2E), API e performance para validar a qualidade do sistema.

## Tecnologias Utilizadas
- **Frontend:** HTML, CSS e JavaScript
- **Backend:** Node.js com Express
- **Testes Automatizados:** Cypress, Jest e Supertest
- **Testes de Performance:** k6

## Estrutura do Projeto
```
QA---Formulario-de-Cadastro/
├── cypress/                  # Testes automatizados E2E
│   ├── e2e/
│   │   ├── testecadastro.cy.js  # Testes do formulário de cadastro
├── server/
│   ├── server.js             # Servidor Express
├── tests/
│   ├── testeApi.test.js      # Testes da API com Jest e Supertest
│   ├── testePerformance.js   # Testes de performance com k6
├── package.json              # Dependências do projeto
├── README.md                 # Documentação do projeto
├── .gitignore                # Arquivos ignorados no Git
```

## Funcionalidades do Formulário
- Cadastro de e-mail e senha com validação de dados
- Mensagens de erro para campos obrigatórios e senhas fracas
- Exibição de confirmação em caso de sucesso

## Testes Automatizados
### 1️⃣ Testes de Interface (Cypress)
Foram criados testes end-to-end para verificar o funcionamento do formulário.
#### **Para rodar os testes E2E:**
```bash
npx cypress open
```

### 2️⃣ Testes de API (Jest + Supertest)
Validam as requisições da API do servidor.
#### **Para rodar os testes da API:**
```bash
npm test
```

### 3️⃣ Testes de Performance (k6)
Mede a resposta do servidor com carga simulada de usuários.
#### **Para rodar os testes de performance:**
```bash
k6 run tests/testePerformance.js
```

## Como Rodar o Projeto
1. Clone este repositório:
```bash
git clone https://github.com/GabrielaBueno/QA-Formulario-de-Cadastro.git
```
2. Instale o [Node.js](https://nodejs.org/) caso ainda não tenha instalado.
3. Instale as dependências do projeto:
```bash
npm install
```
4. Inicie o servidor:
```bash
node server/server.js
```
5. Abra o navegador e acesse:
```
http://127.0.0.1:8080
```
## Autora
Desenvolvido por **Gabriela Bueno**.
