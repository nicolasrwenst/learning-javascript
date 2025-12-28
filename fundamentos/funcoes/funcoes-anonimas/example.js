// ============================================
// FUNÇÕES ANÔNIMAS - EXEMPLOS PRÁTICOS
// ============================================

// 1. FUNÇÃO ANÔNIMA SIMPLES ATRIBUIDA A VARIÁVEL
const saudacao = function() {
  console.log("Olá, mundo!");
};

saudacao(); // Output: Olá, mundo!

// -------------------------------------------

// 2. FUNÇÃO ANÔNIMA COM PARÂMETROS
const soma = function(a, b) {
  return a + b;
};

console.log(soma(5, 3)); // 8

// -------------------------------------------

// 3. CALLBACK EM ARRAY.MAP()
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(function(n) {
  return n * 2;
});

console.log("Dobrados:", dobrados); // [2, 4, 6, 8, 10]

// -------------------------------------------

// 4. CALLBACK EM ARRAY.FILTER()
const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 800 }
];

const produtosCaros = produtos.filter(function(p) {
  return p.preco > 200;
});

console.log("Produtos caros:", produtosCaros);

// -------------------------------------------

// 5. CALLBACK EM SETTIMEOUT (MUITO USADO)
setTimeout(function() {
  console.log("Essa mensagem aparece após 2 segundos");
}, 2000);

// -------------------------------------------

// 6. CALLBACK EM FOR EACH
const usuarios = [
  { nome: "Ana", email: "ana@email.com" },
  { nome: "Bruno", email: "bruno@email.com" },
  { nome: "Carlos", email: "carlos@email.com" }
];

usuarios.forEach(function(usuario) {
  console.log(`${usuario.nome}: ${usuario.email}`);
});

// -------------------------------------------

// 7. IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
// Executa imediatamente sem precisar chamar
(function() {
  console.log("Essa função executa imediatamente!");
})();

// -------------------------------------------

// 8. IIFE COM PARÂMETROS
(function(nome, idade) {
  console.log(`${nome} tem ${idade} anos`);
})("João Silva", 28);

// -------------------------------------------

// 9. IIFE PARA CRIAR ESCOPO PRIVADO (PADRÃO MODULE)
const calculadora = (function() {
  // Variáveis privadas
  let historico = [];
  
  // Retorna objeto com métodos públicos
  return {
    somar: function(a, b) {
      const resultado = a + b;
      historico.push(`${a} + ${b} = ${resultado}`);
      return resultado;
    },
    subtrair: function(a, b) {
      const resultado = a - b;
      historico.push(`${a} - ${b} = ${resultado}`);
      return resultado;
    },
    obterHistorico: function() {
      return historico;
    },
    limparHistorico: function() {
      historico = [];
    }
  };
})();

console.log(calculadora.somar(10, 5));      // 15
console.log(calculadora.subtrair(10, 3));   // 7
console.log(calculadora.obterHistorico());  // ["10 + 5 = 15", "10 - 3 = 7"]

// calculadora.historico; // undefined - privado!

// -------------------------------------------

// 10. CLOSURE - FUNÇÃO ANÔNIMA QUE RETORNA OUTRA
function criarMultiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}

const multiplicarPor2 = criarMultiplicador(2);
const multiplicarPor3 = criarMultiplicador(3);

console.log(multiplicarPor2(5)); // 10
console.log(multiplicarPor3(5)); // 15

// -------------------------------------------

// 11. PADRÃO MODULE COM CONTADOR
const contador = (function() {
  let count = 0;
  
  return {
    incrementar: function() {
      count++;
      return count;
    },
    decrementar: function() {
      count--;
      return count;
    },
    obterValor: function() {
      return count;
    },
    resetar: function() {
      count = 0;
    }
  };
})();

console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.decrementar()); // 1
console.log(contador.obterValor());  // 1

// -------------------------------------------

// 12. ASYNC CALLBACK (SIMULAR REQUISIÇÃO)
const buscarDados = function(url, callback) {
  setTimeout(function() {
    const dados = { id: 1, nome: "João", email: "joao@email.com" };
    callback(dados);
  }, 2000);
};

buscarDados("https://api.exemplo.com/usuario", function(dados) {
  console.log("Dados recebidos:", dados);
});

// -------------------------------------------

// 13. CALLBACK CHAIN
function processar(dados, callback1, callback2) {
  const resultado1 = callback1(dados);
  const resultado2 = callback2(resultado1);
  return resultado2;
}

const resultado = processar(
  5,
  function(x) {
    return x * 2;  // 10
  },
  function(x) {
    return x + 5;  // 15
  }
);

console.log("Resultado final:", resultado); // 15

// -------------------------------------------

// 14. APLICAR A CADA ITEM (COM EFEITO COLATERAL)
const aplicarFuncao = function(lista, funcao) {
  for (let i = 0; i < lista.length; i++) {
    funcao(lista[i]);
  }
};

aplicarFuncao([1, 2, 3, 4], function(num) {
  console.log(`Número: ${num}`);
});

// -------------------------------------------

// 15. REDUCE COM FUNÇÃO ANÔNIMA
const precos = [100, 200, 150, 300];
const total = precos.reduce(function(total, preco) {
  return total + preco;
}, 0);

console.log("Total:", total); // 750

// -------------------------------------------

// 16. TRANSFORMAR DADOS (EXEMPLO REAL E-COMMERCE)
const carrinhoCompra = [
  { produto: "Notebook", preco: 2500, quantidade: 1 },
  { produto: "Mouse", preco: 50, quantidade: 2 },
  { produto: "Teclado", preco: 150, quantidade: 1 }
];

const resumoCompra = carrinhoCompra.map(function(item) {
  return {
    produto: item.produto,
    subtotal: item.preco * item.quantidade,
    quantidade: item.quantidade
  };
});

console.log("Resumo da compra:", resumoCompra);

// -------------------------------------------

// 17. FACTORY - CRIAR MÚLTIPLAS INSTÂNCIAS
const criarCarro = function(marca, modelo, ano) {
  return {
    marca: marca,
    modelo: modelo,
    ano: ano,
    info: function() {
      return `${this.marca} ${this.modelo} (${this.ano})`;
    }
  };
};

const carro1 = criarCarro("Toyota", "Corolla", 2022);
const carro2 = criarCarro("Honda", "Civic", 2023);

console.log(carro1.info()); // Toyota Corolla (2022)
console.log(carro2.info()); // Honda Civic (2023)

// -------------------------------------------

// 18. PROMISIFY - CONVERTER CALLBACK EM PROMISE
const promisify = function(funcaoComCallback) {
  return function(...args) {
    return new Promise(function(resolve, reject) {
      funcaoComCallback(...args, function(erro, resultado) {
        if (erro) {
          reject(erro);
        } else {
          resolve(resultado);
        }
      });
    });
  };
};

// -------------------------------------------

// 19. DEBOUNCE - AGUARDAR PARADA DE DIGITAÇÃO
const debounce = function(funcao, tempo) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(function() {
      funcao(...args);
    }, tempo);
  };
};

const buscarProdutos = debounce(function(termo) {
  console.log(`Buscando: ${termo}`);
}, 300);

// Simular digitação
buscarProdutos("note");
buscarProdutos("noteb");
buscarProdutos("notebook");
// Apenas a última chamada será executada após 300ms

// -------------------------------------------

// 20. MEMOIZATION - CACHE DE RESULTADOS
const fibonacci = (function() {
  const cache = {};
  
  return function(n) {
    if (n in cache) {
      console.log("Retornando do cache");
      return cache[n];
    }
    
    if (n <= 1) return n;
    
    const resultado = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = resultado;
    return resultado;
  };
})();

console.log(fibonacci(10)); // 55

// -------------------------------------------

// 21. OBSERVER PATTERN (SIMPLES)
const observer = (function() {
  const subscribers = {};
  
  return {
    subscribe: function(evento, callback) {
      if (!subscribers[evento]) {
        subscribers[evento] = [];
      }
      subscribers[evento].push(callback);
    },
    publish: function(evento, dados) {
      if (subscribers[evento]) {
        subscribers[evento].forEach(function(callback) {
          callback(dados);
        });
      }
    }
  };
})();

observer.subscribe("userLogin", function(usuario) {
  console.log(`${usuario} fez login`);
});

observer.publish("userLogin", "João");

// -------------------------------------------

// 22. PIPELINE - ENCADEAR TRANSFORMAÇÕES
const pipeline = function(...funcoes) {
  return function(valor) {
    return funcoes.reduce(function(resultado, funcao) {
      return funcao(resultado);
    }, valor);
  };
};

const adicionarTaxa = function(valor) {
  return valor * 1.10;
};

const aplicarDesconto = function(valor) {
  return valor * 0.90;
};

const arredondar = function(valor) {
  return parseFloat(valor.toFixed(2));
};

const processarPreco = pipeline(adicionarTaxa, aplicarDesconto, arredondar);
console.log("Preço processado:", processarPreco(100)); // 99
