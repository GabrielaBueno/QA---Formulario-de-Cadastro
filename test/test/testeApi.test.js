// testeApi.test.js
const request = require('supertest');
const app = require('../server');
describe('Testes da API de Usuários', () => {
  let server;

  // Inicializa o servidor antes de todos os testes
  beforeAll(() => {
    server = app.listen(3001); // Porta diferente para evitar o erro de conflito
  });

  // Fecha o servidor após todos os testes
  afterAll(() => {
    server.close(); // Garante que o servidor será fechado após os testes
  });

  // Teste para o GET que retorna a lista de usuários
  it('Deve retornar uma lista de usuários (GET)', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: expect.any(Number), name: expect.any(String) })
    ]));
  });

  // Teste para o POST sem um campo obrigatório
  it('Deve retornar erro 400 ao enviar um POST sem campo obrigatório', async () => {
    const response = await request(app).post('/users').send({});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('O campo "name" é obrigatório');
  });

  // Teste para simular erro 500 no servidor
  it('Deve simular erro 500 do servidor', async () => {
    const response = await request(app).get('/error');
    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Erro interno do servidor');
  });
});
