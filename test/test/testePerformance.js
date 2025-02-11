import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuração do teste
export let options = {
  vus: 100, // Número de usuários simultâneos
  duration: '30s', // Tempo de duração do teste
};

// Função principal de execução do teste
export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/users'); // Acessa a API mock

  // Verificações no resultado da requisição
  check(res, {
    'status é 200': (r) => r.status === 200, // Verifica se o status é 200
    'tempo de resposta é menor que 500ms': (r) => r.timings.duration < 500, // Verifica se o tempo de resposta é menor que 500ms
  });

  sleep(1); // Simula uma espera de 1 segundo entre requisições
}
