// ============================================
// ESCOPO DE FUNÇÕES - EXEMPLOS PRÁTICOS
// ============================================

// 1. ESCOPO GLOBAL
var nomeGlobal = "João";
let sobrenomeGlobal = "Silva";

function exibirGlobal() {
  console.log(nomeGlobal);      // João
  console.log(sobrenomeGlobal);  // Silva
}

exibirGlobal();

// -------------------------------------------

// 2. ESCOPO LOCAL (FUNCTION SCOPE)
function minhaFuncao() {
  var nomeLocal = "Maria";
  let idadeLocal = 25;
  
  console.log(nomeLocal);   // "Maria"
  console.log(idadeLocal);  // 25
}

minhaFuncao();
// console.log(nomeLocal);  // ReferenceError!

// -------------------------------------------

// 3. ESCOPO DE BLOCO (com let/const)
function exemploBloco() {
  if (true) {
    let varivelBloco = "Dentro do bloco";
    const constanteBloco = 42;
    console.log(varivelBloco);    // "Dentro do bloco"
    console.log(constanteBloco);  // 42
  }
  
  // console.log(varivelBloco);   // ReferenceError!
  // console.log(constanteBloco); // ReferenceError!
}

exemploBloco();

// -------------------------------------------

// 4. DIFERENÇA ENTRE VAR, LET E CONST
function diferenca() {
  console.log("\n--- Escopo de VAR vs LET vs CONST ---");
  
  if (true) {
    var x = 1;        // function scope
    let y = 2;        // block scope
    const z = 3;      // block scope
  }
  
  console.log("x:", x);        // 1 (acessível!)
  // console.log("y:", y);     // ReferenceError!
  // console.log("z:", z);     // ReferenceError!
}

diferenca();

// -------------------------------------------

// 5. ESCOPO LÉXICO (LEXICAL SCOPE)
function externa() {
  const mensagem = "Olá do escopo externo";
  
  function interna() {
    console.log(mensagem); // Tem acesso à variável da função externa
  }
  
  return interna;
}

const funcaoInterna = externa();
funcaoInterna(); // "Olá do escopo externo"

// -------------------------------------------

// 6. CLOSURE - FUNÇÃO COM ACESSO AO ESCOPO PAI
function criarContador(inicial = 0) {
  let count = inicial; // Variável privada
  
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
    }
  };
}

const contador1 = criarContador(0);
const contador2 = criarContador(100);

console.log(contador1.incrementar()); // 1
console.log(contador1.incrementar()); // 2
console.log(contador2.incrementar()); // 101

// contador1.count; // undefined - privado!

// -------------------------------------------

// 7. CADEIA DE ESCOPO (SCOPE CHAIN)
const nivelGlobal = "Global";

function nivel1() {
  const varNivel1 = "Nível 1";
  
  function nivel2() {
    const varNivel2 = "Nível 2";
    
    console.log("\n--- Cadeia de Escopo ---");
    console.log("Variável local:", varNivel2);      // Nível 2
    console.log("Variável do pai:", varNivel1);     // Nível 1
    console.log("Variável global:", nivelGlobal);   // Global
  }
  
  nivel2();
}

nivel1();

// -------------------------------------------

// 8. SHADOWING (OCULTAMENTO DE VARIÁVEL)
let x = "Global";

function exemploShadowing() {
  let x = "Local"; // Shadow da variável global
  console.log("Dentro da função:", x); // "Local"
}

exemploShadowing();
console.log("Fora da função:", x); // "Global"

// -------------------------------------------

// 9. MODULE PATTERN - CRIAR ESCOPO PRIVADO
const minhaAplicacao = (function() {
  // Variáveis privadas
  let usuarios = [];
  let ultimoId = 0;
  
  // Métodos privados
  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  // API pública
  return {
    adicionarUsuario: function(nome, email) {
      if (!validarEmail(email)) {
        return { sucesso: false, erro: "Email inválido" };
      }
      
      const usuario = {
        id: ++ultimoId,
        nome: nome,
        email: email
      };
      
      usuarios.push(usuario);
      return { sucesso: true, usuario: usuario };
    },
    
    obterUsuarios: function() {
      return usuarios.slice(); // Retorna cópia, não referência
    },
    
    obterTotal: function() {
      return usuarios.length;
    }
  };
})();

console.log("\n--- Module Pattern ---");
minhaAplicacao.adicionarUsuario("Ana", "ana@email.com");
minhaAplicacao.adicionarUsuario("Bruno", "bruno@email.com");
console.log("Total de usuários:", minhaAplicacao.obterTotal());
// console.log(minhaAplicacao.usuarios); // undefined - privado!

// -------------------------------------------

// 10. HOISTING - VAR vs LET/CONST
console.log("\n--- Hoisting ---");

function exemploHoisting() {
  console.log(varivelVar); // undefined (hoisted)
  var varivelVar = "Valor";
  console.log(varivelVar); // "Valor"
  
  // console.log(varivelLet); // ReferenceError! (TDZ)
  let varivelLet = "Valor";
}

exemploHoisting();

// -------------------------------------------

// 11. ENCAPSULAMENTO DE DADOS
function criarBanco() {
  let saldo = 0; // Privado
  
  return {
    depositar: function(valor) {
      if (valor > 0) {
        saldo += valor;
        return { sucesso: true, novoSaldo: saldo };
      }
      return { sucesso: false, erro: "Valor inválido" };
    },
    
    sacar: function(valor) {
      if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        return { sucesso: true, novoSaldo: saldo };
      }
      return { sucesso: false, erro: "Saldo insuficiente" };
    },
    
    obterSaldo: function() {
      return saldo;
    }
  };
}

const minhaConta = criarBanco();
console.log("\n--- Encapsulamento ---");
minhaConta.depositar(1000);
console.log("Saldo:", minhaConta.obterSaldo()); // 1000
minhaConta.sacar(300);
console.log("Saldo após saque:", minhaConta.obterSaldo()); // 700
// minhaConta.saldo = 10000; // Não funciona!

// -------------------------------------------

// 12. PROBLEMA COM VAR EM LOOPS
console.log("\n--- Problema com VAR em Loops ---");

// ❌ Problema
function loopComVar() {
  var resultados = [];
  for (var i = 0; i < 3; i++) {
    resultados.push(function() {
      return i;
    });
  }
  
  console.log("Com VAR:", resultados.map(f => f())); // [3, 3, 3]
}

loopComVar();

// ✅ Solução com LET
function loopComLet() {
  var resultados = [];
  for (let i = 0; i < 3; i++) { // let em vez de var
    resultados.push(function() {
      return i;
    });
  }
  
  console.log("Com LET:", resultados.map(f => f())); // [0, 1, 2]
}

loopComLet();

// -------------------------------------------

// 13. CLOSURE EM CALLBACKS (REAL DO DIA A DIA)
function criarBotoes() {
  const botoes = [];
  
  for (let i = 1; i <= 3; i++) {
    const botao = {
      id: i,
      click: function() {
        return `Botão ${i} clicado`;
      }
    };
    botoes.push(botao);
  }
  
  return botoes;
}

const meusBotoes = criarBotoes();
console.log("\n--- Closure em Callbacks ---");
console.log(meusBotoes[0].click()); // "Botão 1 clicado"
console.log(meusBotoes[2].click()); // "Botão 3 clicado"

// -------------------------------------------

// 14. FACTORY COM DADOS PRIVADOS
function criarCarro(marca, modelo) {
  let kilometragem = 0; // Privado
  let combustivel = 100; // Privado (0-100)
  
  return {
    info: function() {
      return `${marca} ${modelo} - ${kilometragem}km`;
    },
    
    andar: function(distancia) {
      if (combustivel > 0) {
        kilometragem += distancia;
        combustivel -= (distancia / 10); // Consome combustível
        return `Andou ${distancia}km. Combustível: ${combustivel.toFixed(1)}%`;
      }
      return "Sem combustível!";
    },
    
    abastecer: function() {
      combustivel = 100;
      return "Abastecido!";
    }
  };
}

const meuCarro = criarCarro("Toyota", "Corolla");
console.log("\n--- Factory com Dados Privados ---");
console.log(meuCarro.info());          // Toyota Corolla - 0km
console.log(meuCarro.andar(100));      // Andou 100km. Combustível: 90.0%
console.log(meuCarro.andar(500));      // Andou 500km. Combustível: 40.0%
console.log(meuCarro.abastecer());     // Abastecido!

// -------------------------------------------

// 15. DECLARADOR DE FUNÇÕES (SCOPE COMPARTILHADO)
const minhaAPI = (function() {
  const versao = "1.0";
  const debug = true;
  
  function registrarLog(mensagem) {
    if (debug) {
      console.log(`[LOG] ${mensagem}`);
    }
  }
  
  return {
    obterVersao: function() {
      return versao;
    },
    
    buscar: function(url) {
      registrarLog(`Buscando: ${url}`);
      return { dados: "resultado" };
    },
    
    postar: function(url, dados) {
      registrarLog(`Postando em: ${url}`);
      return { sucesso: true };
    }
  };
})();

console.log("\n--- API com Log ---");
console.log(minhaAPI.obterVersao());
minhaAPI.buscar("/usuarios");
minhaAPI.postar("/usuarios", {});
