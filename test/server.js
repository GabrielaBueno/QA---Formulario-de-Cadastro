const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Rota simples de exemplo
app.get('/users', (req, res) => {
  res.status(200).json([{ id: 1, name: 'Gabriela' }, { id: 2, name: 'Luís' }]);
});

app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'O campo "name" é obrigatório' });
  }
  res.status(201).json({ id: 3, name });
});

// Simulando erro do servidor
app.get('/error', (req, res) => {
  res.status(500).json({ error: 'Erro interno do servidor' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app; // Exportando o app para os testes
