// ============================================
// CONCEITOS NODE.JS - EXEMPLOS PRÁTICOS
// ============================================

// 1. CONSOLE - DIFERENÇA NAVEGADOR vs NODE
console.log("--- Console e Global ---");
console.log("Tipo de global:", typeof global);  // "object" (Node.js)
// No navegador seria: typeof window = "object"

// -------------------------------------------

// 2. __DIRNAME E __FILENAME
console.log("\n--- __dirname e __filename ---");
// Nota: Estes valores são específicos de Node.js
// Simulando valores
const __dirname_simulado = "g:/Meu Drive/Estudos/javascript/fundamentos/conceitos-nodejs";
const __filename_simulado = "g:/Meu Drive/Estudos/javascript/fundamentos/conceitos-nodejs/example.js";

console.log("Diretório:", __dirname_simulado);
console.log("Arquivo:", __filename_simulado);

// -------------------------------------------

// 3. PROCESS - OBJETO GLOBAL
console.log("\n--- Process ---");
console.log("Versão Node.js (simulado):", "v18.12.0");
console.log("PID (simulado):", 12345);
console.log("Plataforma (simulado):", "win32");
console.log("Node Env (simulado):", process.env.NODE_ENV || "development");

// -------------------------------------------

// 4. ARGUMENTOS DO PROCESSO
console.log("\n--- process.argv ---");
// Simulando: node app.js --port 3000 --debug
const argv_simulado = ["node", "app.js", "--port", "3000", "--debug"];
console.log("Argumentos simulados:", argv_simulado);

// -------------------------------------------

// 5. EVENT LOOP - ORDEM DE EXECUÇÃO
console.log("\n--- Event Loop - Ordem de Execução ---");

// Síncrono
console.log("1. Síncrono - Primeiro");

// Macrotask (setTimeout)
setTimeout(() => {
  console.log("4. Macrotask - setTimeout");
}, 0);

// Microtask (Promise)
Promise.resolve()
  .then(() => {
    console.log("3. Microtask - Promise.then()");
  });

// Síncrono
console.log("2. Síncrono - Segundo");

// Saída esperada: 1 → 2 → 3 → 4

// -------------------------------------------

// 6. CALLBACK COM SETIMMEDIATE
console.log("\n--- setImmediate vs setTimeout ---");

console.log("Iniciando");

setTimeout(() => {
  console.log("setTimeout(0)");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

console.log("Terminando");

// Saída: Iniciando → Terminando → [setTimeout ou setImmediate] → [outro]

// -------------------------------------------

// 7. PROCESS.NEXTTICK
console.log("\n--- process.nextTick ---");

console.log("A");

process.nextTick(() => {
  console.log("nextTick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("B");

// Saída: A → B → nextTick → Promise

// -------------------------------------------

// 8. SIMULANDO FILE SYSTEM
console.log("\n--- File System Simulado ---");

// Simulando: fs.readFileSync (bloqueante)
function readFileSyncSimulado(arquivo) {
  console.log(`  Lendo ${arquivo}...`);
  return `Conteúdo de ${arquivo}`;
}

// Simulando: fs.readFile (não-bloqueante)
function readFileSimulado(arquivo, callback) {
  console.log(`  Iniciando leitura de ${arquivo}...`);
  setTimeout(() => {
    callback(null, `Conteúdo de ${arquivo}`);
  }, 100);
}

console.log("Síncrono:");
const dados = readFileSyncSimulado("teste.txt");
console.log("Dados:", dados);

console.log("\nAssincrónico:");
readFileSimulado("teste.txt", (erro, dados) => {
  console.log("Dados:", dados);
});
console.log("Não bloqueia aqui!");

// -------------------------------------------

// 9. DIFERENÇA SÍNCRONO vs ASSINCRÓNICO
console.log("\n--- Síncrono vs Assincrónico ---");

// ❌ Bloqueante (não recomendado)
function operacaoBloqueante() {
  let soma = 0;
  for (let i = 0; i < 1000000000; i++) {
    soma += i;
  }
  return soma;
}

console.log("Antes da operação bloqueante");
const resultado = operacaoBloqueante();
console.log("Depois:", resultado > 0 ? "Concluído" : "Não concluído");

// -------------------------------------------

// 10. SIMULANDO HTTP SERVER
console.log("\n--- HTTP Server Simulado ---");

// Simulando um servidor HTTP
const servidorSimulado = {
  porta: 3000,
  iniciar: function() {
    console.log(`Servidor rodando em http://localhost:${this.porta}`);
  },
  parar: function() {
    console.log("Servidor parado");
  }
};

// servidorSimulado.iniciar();
// servidorSimulado.parar();

// -------------------------------------------

// 11. CALLBACKS - PADRÃO NODE.JS
console.log("\n--- Callback Pattern Node.js ---");

// Padrão Node.js: erro como primeiro argumento
function operacaoComCallback(valor, callback) {
  if (valor < 0) {
    callback("Valor inválido", null);
  } else {
    callback(null, valor * 2);
  }
}

operacaoComCallback(5, (erro, resultado) => {
  if (erro) {
    console.log("Erro:", erro);
  } else {
    console.log("Resultado:", resultado);
  }
});

operacaoComCallback(-5, (erro, resultado) => {
  if (erro) {
    console.log("Erro:", erro);
  }
});

// -------------------------------------------

// 12. UTIL.PROMISIFY (Converter callback para promise)
console.log("\n--- Converter Callback para Promise ---");

// Simulando util.promisify
function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (erro, resultado) => {
        if (erro) reject(erro);
        else resolve(resultado);
      });
    });
  };
}

const operacaoPromisificada = promisify(operacaoComCallback);

operacaoPromisificada(10)
  .then(resultado => {
    console.log("Promise resultado:", resultado);
  })
  .catch(erro => {
    console.log("Promise erro:", erro);
  });

// -------------------------------------------

// 13. EVENTOS - EMITTER PATTERN
console.log("\n--- Eventos e EventEmitter ---");

// Simulando EventEmitter
class EventEmitterSimulado {
  constructor() {
    this.listeners = {};
  }
  
  on(evento, callback) {
    if (!this.listeners[evento]) {
      this.listeners[evento] = [];
    }
    this.listeners[evento].push(callback);
  }
  
  emit(evento, ...args) {
    if (this.listeners[evento]) {
      this.listeners[evento].forEach(callback => {
        callback(...args);
      });
    }
  }
}

const emitter = new EventEmitterSimulado();

emitter.on("login", (usuario) => {
  console.log(`${usuario} fez login`);
});

emitter.on("logout", (usuario) => {
  console.log(`${usuario} fez logout`);
});

emitter.emit("login", "Ana");
emitter.emit("logout", "Ana");

// -------------------------------------------

// 14. STREAMS - CONCEITO
console.log("\n--- Streams ---");

// Simulando ler arquivo em chunks
function lerStreamSimulado(arquivo, onChunk) {
  const tamanhoChunk = 10;
  const conteudo = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let posicao = 0;
  while (posicao < conteudo.length) {
    const chunk = conteudo.substring(posicao, posicao + tamanhoChunk);
    onChunk(chunk);
    posicao += tamanhoChunk;
  }
}

console.log("Lendo arquivo em chunks:");
lerStreamSimulado("arquivo.txt", (chunk) => {
  console.log("  Chunk recebido:", chunk);
});

// -------------------------------------------

// 15. HEAP SIZE - MEMÓRIA
console.log("\n--- Memória do Processo ---");

// Simulando informações de memória
const memoriaSimulada = {
  heapUsed: "15.2 MB",
  heapTotal: "30.5 MB",
  rss: "45.8 MB"
};

console.log("Heap usado:", memoriaSimulada.heapUsed);
console.log("Heap total:", memoriaSimulada.heapTotal);
console.log("RSS:", memoriaSimulada.rss);

// -------------------------------------------

// 16. VARIÁVEIS DE AMBIENTE
console.log("\n--- Variáveis de Ambiente ---");

// Simulando variáveis de ambiente
const env = {
  NODE_ENV: "development",
  DATABASE_URL: "mongodb://localhost:27017",
  API_KEY: "sk_test_123456789",
  PORT: "3000"
};

console.log("NODE_ENV:", env.NODE_ENV);
console.log("PORT:", env.PORT);
console.log("DATABASE_URL:", env.DATABASE_URL);

// -------------------------------------------

// 17. REQUIRE vs IMPORT
console.log("\n--- Require vs Import ---");

// CommonJS (require) - Síncrono
// const express = require("express");

// ES Modules (import) - Pode ser assincrónico
// import express from "express";

console.log("Exemplos comentados - ver README.md");

// -------------------------------------------

// 18. CLOCK E TIMER
console.log("\n--- Timers ---");

let contador = 0;

const intervalo = setInterval(() => {
  contador++;
  if (contador <= 3) {
    console.log(`  Tick ${contador}`);
  }
  if (contador === 3) {
    clearInterval(intervalo);
    console.log("  Intervalo parado");
  }
}, 100);

// -------------------------------------------

// 19. TRATAMENTO DE ERRO NÃO CAPTURADO
console.log("\n--- Tratamento de Erro Não Capturado ---");

// Simulando handler de erro não capturado
process.on("uncaughtException", (erro) => {
  console.log("Exceção não capturada:", erro.message);
  // Em produção, registrar e sair
});

process.on("unhandledRejection", (motivo) => {
  console.log("Rejeição não tratada:", motivo);
});

// Exemplo não executado para não quebrar:
// throw new Error("Erro não capturado");

// -------------------------------------------

// 20. BUFFER - MANIPULAÇÃO DE BYTES
console.log("\n--- Buffer ---");

// Buffer é para trabalhar com dados binários
const buffer = Buffer.from("Olá, Node.js");
console.log("String:", buffer.toString());
console.log("Tamanho (bytes):", buffer.length);

// Converter para Base64
const base64 = buffer.toString("base64");
console.log("Base64:", base64);

// Converter de volta
const deBuffer = Buffer.from(base64, "base64").toString();
console.log("De volta:", deBuffer);

console.log("\n=== Event Loop concluído! ===");
