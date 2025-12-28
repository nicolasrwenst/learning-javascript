// ============================================
// CALLBACKS - EXEMPLOS PRÁTICOS
// ============================================

// 1. CALLBACK BÁSICO
function cumprimentar(nome, callback) {
  console.log("--- Callback Básico ---");
  console.log(`Olá, ${nome}!`);
  callback();  // Executa o callback
}

function despedida() {
  console.log("Até logo!");
}

cumprimentar("Ana", despedida);

// -------------------------------------------

// 2. CALLBACK COM PARÂMETRO
function saudar(nome, callback) {
  console.log("\n--- Callback com Parâmetro ---");
  const mensagem = `Bem-vindo, ${nome}!`;
  callback(mensagem);
}

saudar("Bruno", function(msg) {
  console.log(msg);
});

// -------------------------------------------

// 3. CALLBACK COM ARROW FUNCTION
function calcular(a, b, operacao) {
  console.log("\n--- Callback com Arrow Function ---");
  const resultado = operacao(a, b);
  console.log(`Resultado: ${resultado}`);
}

calcular(10, 5, (x, y) => x + y);
calcular(10, 5, (x, y) => x - y);
calcular(10, 5, (x, y) => x * y);

// -------------------------------------------

// 4. CALLBACK COM SUCESSO E ERRO
function buscarDados(id, callback) {
  console.log("\n--- Callback com Sucesso e Erro ---");
  
  // Simula busca de dados
  if (id > 0) {
    const dados = { id, nome: "Carlos", email: "carlos@email.com" };
    callback(null, dados);  // Sucesso: erro = null
  } else {
    callback("ID inválido", null);  // Erro
  }
}

buscarDados(1, function(erro, dados) {
  if (erro) {
    console.log("Erro:", erro);
  } else {
    console.log("Dados recebidos:", dados);
  }
});

buscarDados(-1, function(erro, dados) {
  if (erro) {
    console.log("Erro:", erro);
  }
});

// -------------------------------------------

// 5. ARRAY.FOREACH COM CALLBACK
const frutas = ["maçã", "banana", "laranja"];

console.log("\n--- Array.forEach ---");
frutas.forEach(function(fruta, index) {
  console.log(`${index + 1}. ${fruta}`);
});

// -------------------------------------------

// 6. ARRAY.MAP COM CALLBACK
const numeros = [1, 2, 3, 4, 5];

console.log("\n--- Array.map ---");
const dobrados = numeros.map(function(n) {
  return n * 2;
});
console.log("Dobrados:", dobrados);

// -------------------------------------------

// 7. ARRAY.FILTER COM CALLBACK
console.log("\n--- Array.filter ---");
const maiores = numeros.filter(function(n) {
  return n > 2;
});
console.log("Maiores que 2:", maiores);

// -------------------------------------------

// 8. SETTIMEOUT COM CALLBACK
console.log("\n--- setTimeout ---");
console.log("Iniciando...");

setTimeout(function() {
  console.log("Callback executado após 1 segundo");
}, 1000);

console.log("Continuando...");

// -------------------------------------------

// 9. PROCESSAMENTO DE USUÁRIO
function processarUsuario(usuario, onSucesso, onErro) {
  console.log("\n--- Processamento de Usuário ---");
  
  if (usuario && usuario.email) {
    onSucesso(`Usuário ${usuario.nome} processado com sucesso!`);
  } else {
    onErro("Usuário inválido");
  }
}

const usuario = {
  nome: "Diana",
  email: "diana@email.com"
};

processarUsuario(
  usuario,
  function(mensagem) {
    console.log("✓", mensagem);
  },
  function(erro) {
    console.log("✗", erro);
  }
);

// -------------------------------------------

// 10. CALLBACK ANINHADO (NÃO RECOMENDADO)
function buscarCliente(id, callback) {
  console.log("\n--- Callback Aninhado (Callback Hell) ---");
  setTimeout(function() {
    const cliente = { id: 1, nome: "Eduardo", pedidoId: 101 };
    callback(cliente);
  }, 500);
}

function buscarPedido(pedidoId, callback) {
  setTimeout(function() {
    const pedido = { id: 101, total: 500, itemId: 1001 };
    callback(pedido);
  }, 500);
}

function buscarItem(itemId, callback) {
  setTimeout(function() {
    const item = { id: 1001, nome: "Notebook", preco: 3000 };
    callback(item);
  }, 500);
}

// ❌ Callback aninhado
buscarCliente(1, function(cliente) {
  console.log("Cliente:", cliente.nome);
  
  buscarPedido(cliente.pedidoId, function(pedido) {
    console.log("Pedido:", pedido.total);
    
    buscarItem(pedido.itemId, function(item) {
      console.log("Item:", item.nome);
    });
  });
});

// -------------------------------------------

// 11. CALLBACK COM MÚLTIPLAS OPERAÇÕES
function processoCompleto(dados, onInicio, onMeio, onFim) {
  console.log("\n--- Múltiplas Operações ---");
  
  onInicio();
  
  setTimeout(function() {
    onMeio("Processando...");
  }, 500);
  
  setTimeout(function() {
    onFim("Concluído!");
  }, 1000);
}

processoCompleto(
  "dados",
  function() { console.log("Iniciando processo"); },
  function(msg) { console.log(msg); },
  function(msg) { console.log(msg); }
);

// -------------------------------------------

// 12. ARRAY.REDUCE COM CALLBACK
const precos = [100, 200, 150, 300];

console.log("\n--- Array.reduce ---");
const total = precos.reduce(function(acumulador, preco) {
  return acumulador + preco;
}, 0);

console.log("Total:", total);

// -------------------------------------------

// 13. ARRAY.FIND COM CALLBACK
const usuarios_list = [
  { id: 1, nome: "Fernanda", ativo: true },
  { id: 2, nome: "Gustavo", ativo: false },
  { id: 3, nome: "Helena", ativo: true }
];

console.log("\n--- Array.find ---");
const usuarioAtivo = usuarios_list.find(function(u) {
  return u.ativo === true;
});

console.log("Usuário ativo encontrado:", usuarioAtivo.nome);

// -------------------------------------------

// 14. ARRAY.SOME COM CALLBACK
console.log("\n--- Array.some ---");
const temAlguemAtivo = usuarios_list.some(function(u) {
  return u.ativo === true;
});

console.log("Tem alguém ativo?", temAlguemAtivo);

// -------------------------------------------

// 15. ARRAY.EVERY COM CALLBACK
const numeros2 = [2, 4, 6, 8];

console.log("\n--- Array.every ---");
const todosPares = numeros2.every(function(n) {
  return n % 2 === 0;
});

console.log("Todos são pares?", todosPares);

// -------------------------------------------

// 16. CALLBACK EM FILTRO CUSTOMIZADO
function filtrarMaiores(numeros, valor, callback) {
  console.log("\n--- Callback em Filtro ---");
  const resultado = numeros.filter(callback);
  return resultado;
}

const maioresQue5 = filtrarMaiores([1, 3, 5, 7, 9], 5, function(n) {
  return n > 5;
});

console.log("Maiores que 5:", maioresQue5);

// -------------------------------------------

// 17. TRANSFORMAR COM CALLBACK
function transformar(dados, callback) {
  console.log("\n--- Transformar com Callback ---");
  return dados.map(callback);
}

const nomes = ["ana", "bruno", "carlos"];
const nomesCapitalizados = transformar(nomes, function(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1);
});

console.log("Capitalizados:", nomesCapitalizados);

// -------------------------------------------

// 18. COMPOSIÇÃO DE CALLBACKS
function executarSegunca(valor, callback) {
  console.log("\n--- Composição de Callbacks ---");
  setTimeout(function() {
    const resultado = valor * 2;
    callback(resultado);
  }, 500);
}

executarSegunca(5, function(resultado) {
  console.log("Resultado:", resultado);
  
  // Chama outro callback com resultado anterior
  executarSegunca(resultado, function(resultado2) {
    console.log("Resultado 2:", resultado2);
  });
});

// -------------------------------------------

// 19. TRATAMENTO DE ERRO COM CALLBACK
function validarEmail(email, callback) {
  console.log("\n--- Validação com Callback ---");
  
  const isValid = email.includes("@");
  
  if (isValid) {
    callback(null, `Email ${email} é válido`);
  } else {
    callback(`Email ${email} é inválido`, null);
  }
}

validarEmail("igor@email.com", function(erro, mensagem) {
  if (erro) {
    console.log("✗ Erro:", erro);
  } else {
    console.log("✓", mensagem);
  }
});

// -------------------------------------------

// 20. CALLBACK COM CONTEXTO (this)
const pessoa = {
  nome: "Joana",
  idade: 28,
  apresentar: function(callback) {
    console.log("\n--- Callback com Contexto ---");
    const mensagem = `Olá, meu nome é ${this.nome}`;
    callback(mensagem);
  }
};

pessoa.apresentar(function(msg) {
  console.log(msg);
});
