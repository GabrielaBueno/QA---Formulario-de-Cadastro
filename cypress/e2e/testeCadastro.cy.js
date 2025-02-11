describe('Teste de Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/index.html');
  });

  it('Deve preencher o formulário corretamente e enviar', () => {
    cy.get('#email').type('gabrielabueno@gmail.com');
    cy.get('#confirmacaoEmail').type('gabrielabueno@gmail.com');
    cy.get('#senha').type('SenhaForte123');
    cy.get('button').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });

  it('Deve mostrar erro ao deixar campos vazios', () => {
    cy.get('button').click();
    cy.contains('Campo obrigatório').should('be.visible');
  });

  it('Deve mostrar erro ao digitar uma senha fraca', () => {
    cy.get('#email').type('gabrielabueno@gmail.com');
    cy.get('#confirmacaoEmail').type('gabrielabueno@gmail.com');
    cy.get('#senha').type('12345');
    cy.get('button').click();
    cy.contains('Senha fraca').should('be.visible');
  });

  it('Deve mostrar erro ao digitar e-mails diferentes', () => {
    cy.get('#email').type('gabrielabueno@gmail.com');
    cy.get('#confirmacaoEmail').type('buenogabriela@gmail.com');
    cy.get('button').click();
    cy.contains('Os e-mails não coincidem').should('be.visible');
  });
});
