// ============================================
// ASYNC / AWAIT - EXEMPLOS PRÁTICOS
// ============================================

// 1. ASYNC BÁSICO
console.log("--- Async Básico ---");
async function saudacao() {
  return "Olá!";
}

saudacao().then(resultado => {
  console.log(resultado);
});

// -------------------------------------------

// 2. AWAIT COM PROMISE RESOLVIDA
console.log("\n--- Await Básico ---");
async function exemplo2() {
  const resultado = await Promise.resolve("Valor aguardado");
  console.log(resultado);
}

exemplo2();

// -------------------------------------------

// 3. AWAIT COM TIMEOUT
console.log("\n--- Await com Timeout ---");
async function exemplo3() {
  console.log("Iniciando...");
  
  const resultado = await new Promise(resolve => {
    setTimeout(() => {
      resolve("Concluído após 1 segundo");
    }, 1000);
  });
  
  console.log(resultado);
}

exemplo3();

// -------------------------------------------

// 4. TRY/CATCH BÁSICO
console.log("\n--- Try/Catch ---");
async function exemplo4() {
  try {
    const resultado = await Promise.resolve("Sucesso!");
    console.log(resultado);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

exemplo4();

// -------------------------------------------

// 5. TRATAMENTO DE ERRO COM REJECTION
console.log("\n--- Tratamento de Rejeição ---");
async function exemplo5() {
  try {
    const resultado = await Promise.reject("Algo deu errado!");
    console.log(resultado);
  } catch (erro) {
    console.log("Erro capturado:", erro);
  }
}

exemplo5();

// -------------------------------------------

// 6. ASYNC COM RETURN
console.log("\n--- Async com Return ---");
async function buscarDados() {
  const dados = await Promise.resolve({
    id: 1,
    nome: "Ana",
    email: "ana@email.com"
  });
  return dados;
}

buscarDados().then(dados => {
  console.log("Dados recebidos:", dados.nome);
});

// -------------------------------------------

// 7. MÚLTIPLOS AWAITS SEQUENCIAIS
console.log("\n--- Múltiplos Awaits Sequenciais ---");
async function exemplo7() {
  const valor1 = await Promise.resolve(10);
  console.log("Valor 1:", valor1);
  
  const valor2 = await Promise.resolve(20);
  console.log("Valor 2:", valor2);
  
  const valor3 = await Promise.resolve(30);
  console.log("Valor 3:", valor3);
  
  console.log("Total:", valor1 + valor2 + valor3);
}

exemplo7();

// -------------------------------------------

// 8. PROMISE.ALL COM AWAIT
console.log("\n--- Promise.all com Await ---");
async function exemplo8() {
  const promise1 = Promise.resolve("Resultado 1");
  const promise2 = Promise.resolve("Resultado 2");
  const promise3 = Promise.resolve("Resultado 3");
  
  const resultados = await Promise.all([promise1, promise2, promise3]);
  console.log("Todos os resultados:", resultados);
}

exemplo8();

// -------------------------------------------

// 9. FOR LOOP COM AWAIT
console.log("\n--- For Loop com Await ---");
async function exemplo9() {
  const ids = [1, 2, 3];
  
  for (const id of ids) {
    const dados = await Promise.resolve({ id, nome: `Usuário ${id}` });
    console.log(`ID: ${dados.id}, Nome: ${dados.nome}`);
  }
}

exemplo9();

// -------------------------------------------

// 10. SIMULAR REQUISIÇÃO HTTP
console.log("\n--- Requisição HTTP Simulada ---");
async function buscarUsuario(id) {
  try {
    const dados = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id > 0) {
          resolve({ id, nome: "Bruno", email: "bruno@email.com" });
        } else {
          reject("ID inválido");
        }
      }, 500);
    });
    
    return dados;
  } catch (erro) {
    console.log("Erro:", erro);
  }
}

buscarUsuario(1).then(usuario => {
  if (usuario) {
    console.log("Usuário encontrado:", usuario.nome);
  }
});

// -------------------------------------------

// 11. FINALMENTE - SEMPRE EXECUTA
console.log("\n--- Finally ---");
async function exemplo11() {
  try {
    const resultado = await Promise.resolve("Sucesso");
    console.log(resultado);
  } catch (erro) {
    console.error("Erro:", erro);
  } finally {
    console.log("Finally - sempre executa");
  }
}

exemplo11();

// -------------------------------------------

// 12. AWAIT COM ARRAY.MAP
console.log("\n--- Await com Array.map ---");
async function exemplo12() {
  const ids = [1, 2, 3];
  
  const promises = ids.map(id =>
    Promise.resolve({ id, nome: `User ${id}` })
  );
  
  const usuarios = await Promise.all(promises);
  console.log("Usuários:", usuarios);
}

exemplo12();

// -------------------------------------------

// 13. PROCESSAMENTO SEQUENCIAL
console.log("\n--- Processamento Sequencial ---");
async function buscar(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, dados: `Dados ${id}` });
    }, 200);
  });
}

async function exemplo13() {
  console.log("Iniciando busca...");
  
  const resultado1 = await buscar(1);
  console.log("Busca 1:", resultado1.dados);
  
  const resultado2 = await buscar(2);
  console.log("Busca 2:", resultado2.dados);
  
  const resultado3 = await buscar(3);
  console.log("Busca 3:", resultado3.dados);
  
  console.log("Finalizado!");
}

exemplo13();

// -------------------------------------------

// 14. PROCESSAMENTO PARALELO
console.log("\n--- Processamento Paralelo ---");
async function exemplo14() {
  console.log("Iniciando buscas paralelas...");
  
  const [resultado1, resultado2, resultado3] = await Promise.all([
    buscar(1),
    buscar(2),
    buscar(3)
  ]);
  
  console.log("Resultado 1:", resultado1.dados);
  console.log("Resultado 2:", resultado2.dados);
  console.log("Resultado 3:", resultado3.dados);
  console.log("Mais rápido!");
}

exemplo14();

// -------------------------------------------

// 15. ARROW FUNCTION ASYNC
console.log("\n--- Arrow Function Async ---");
const buscarProduto = async (id) => {
  const produto = await Promise.resolve({
    id,
    nome: "Notebook",
    preco: 3000
  });
  return produto;
};

buscarProduto(1).then(prod => {
  console.log(`Produto: ${prod.nome} - R$ ${prod.preco}`);
});

// -------------------------------------------

// 16. ASYNC EM CALLBACK
console.log("\n--- Async em Callback ---");
const usuarios_array = [
  { id: 1, nome: "Carlos" },
  { id: 2, nome: "Diana" }
];

usuarios_array.forEach(async (usuario) => {
  const dados = await Promise.resolve({
    ...usuario,
    email: `${usuario.nome.toLowerCase()}@email.com`
  });
  console.log(`${dados.nome}: ${dados.email}`);
});

// -------------------------------------------

// 17. AGUARDAR CONDICIONALMENTE
console.log("\n--- Aguardar Condicionalmente ---");
async function exemplo17() {
  const ativo = true;
  
  let dados = null;
  
  if (ativo) {
    dados = await Promise.resolve({ status: "ativo" });
  } else {
    dados = { status: "inativo" };
  }
  
  console.log("Status:", dados.status);
}

exemplo17();

// -------------------------------------------

// 18. ASYNC IIFE (IMMEDIATELY INVOKED)
console.log("\n--- Async IIFE ---");
(async () => {
  const resultado = await Promise.resolve("IIFE Async");
  console.log(resultado);
})();

// -------------------------------------------

// 19. TRANSFORMAÇÃO COM ASYNC
console.log("\n--- Transformação com Async ---");
async function exemplo19() {
  const numeros = [1, 2, 3, 4, 5];
  
  const promessas = numeros.map(async (n) => {
    const resultado = await Promise.resolve(n * 2);
    return resultado;
  });
  
  const dobrados = await Promise.all(promessas);
  console.log("Dobrados:", dobrados);
}

exemplo19();

// -------------------------------------------

// 20. ENCADEAMENTO SEM ANINHAMENTO
console.log("\n--- Encadeamento Limpo ---");
async function buscarInfo() {
  return { userId: 1 };
}

async function buscarOrdens(userId) {
  return { orderId: 101, userId };
}

async function buscarItens(orderId) {
  return { itemId: 1001, orderId };
}

async function exemplo20() {
  try {
    const info = await buscarInfo();
    console.log("Info:", info);
    
    const ordens = await buscarOrdens(info.userId);
    console.log("Ordem:", ordens);
    
    const itens = await buscarItens(ordens.orderId);
    console.log("Itens:", itens);
    
    console.log("Fluxo completo sem callback hell!");
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

exemplo20();
