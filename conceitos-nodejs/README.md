# Conceitos Node.js

## O que é Node.js?

**Node.js** é um runtime (ambiente de execução) JavaScript que permite executar JavaScript fora do navegador, no servidor.

```javascript
// Antes: JavaScript só funcionava no navegador
// Depois (Node.js): JavaScript funciona no servidor!

console.log("Executando no servidor");
const fs = require("fs");
fs.readFile("arquivo.txt", console.log);
```

## Runtime - O que é?

Um **runtime** é um ambiente que executa código. Assim como:
- 🌐 **Navegador** é runtime para JavaScript no cliente
- 🖥️ **Node.js** é runtime para JavaScript no servidor
- 🐍 **Python** tem seu próprio runtime

```javascript
// Diferença:
// Navegador: window, document, DOM
// Node.js: __dirname, __filename, modules, fs
```

## Ambiente vs Runtime vs Interpretador

```
INTERPRETADOR: Le o código e executa
    ↓
RUNTIME: Fornece funções (APIs) disponíveis
    ↓
AMBIENTE: Contexto onde executa (navegador, servidor)
```

## Node.js vs Navegador

| Recurso | Node.js | Navegador |
|---------|---------|-----------|
| Acesso ao filesystem | ✅ Sim | ❌ Não |
| DOM | ❌ Não | ✅ Sim |
| HTTP | ✅ (módulo) | ✅ fetch() |
| Módulos | ✅ require/import | ✅ import/export |
| Global | `global` | `window` |
| __dirname | ✅ Sim | ❌ Não |

## Event Loop - Conceito Fundamental

O **Event Loop** é o mecanismo que permite JavaScript ser assincrónico apesar de ser single-threaded (uma thread).

```javascript
console.log("1. Início");

setTimeout(() => {
  console.log("2. Depois de 0ms");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3. Promise");
  });

console.log("4. Fim");

// Ordem de execução:
// 1. Início
// 4. Fim
// 3. Promise (Microtask)
// 2. Depois de 0ms (Macrotask)
```

## Call Stack, Web APIs e Task Queue

```
┌─────────────────────────────────────┐
│         JAVASCRIPT ENGINE           │
├─────────────────────────────────────┤
│                                     │
│  ┌──────────────┐  ┌──────────────┐│
│  │  Call Stack  │  │  Global Env  ││
│  └──────────────┘  └──────────────┘│
│                                     │
└─────────────────────────────────────┘
         ↕ (Passa dados)
┌─────────────────────────────────────┐
│         WEB APIs / Node.js APIS      │
│  (fetch, setTimeout, fs.readFile)   │
└─────────────────────────────────────┘
         ↕ (Retorna resultado)
┌─────────────────────────────────────┐
│    TASK QUEUE / MICROTASK QUEUE      │
│  (Callbacks prontos para executar)   │
└─────────────────────────────────────┘
         ↕ (Se stack vazio)
Event Loop move para Call Stack
```

## Como o Event Loop Funciona

1. **Execute código síncrono** (Call Stack)
2. **Quando terminar**, verifique Microtask Queue (Promises)
3. **Depois**, verifique Task Queue (setTimeout, callbacks)
4. **Repita** infinitamente

## Exemplo Prático de Event Loop

```javascript
// 1. Síncrono (executa imediatamente)
console.log("A");

// 2. Macrotask (setTimeout)
setTimeout(() => console.log("B"), 0);

// 3. Microtask (Promise)
Promise.resolve().then(() => console.log("C"));

// 4. Síncrono
console.log("D");

// Resultado: A → D → C → B
```

## __dirname e __filename

```javascript
console.log(__dirname);    // /home/user/projeto
console.log(__filename);   // /home/user/projeto/app.js
console.log(__dirname + "/dados");  // /home/user/projeto/dados
```

## Module System

```javascript
// CommonJS
const somar = require("./math");

// ES Modules
import { somar } from "./math.js";
```

## process - Objeto Global do Node.js

```javascript
// Versão do Node.js
console.log(process.version);

// Argumentos passados
console.log(process.argv);

// Variáveis de ambiente
console.log(process.env.NODE_ENV);

// PID do processo
console.log(process.pid);

// Diretório atual
console.log(process.cwd());

// Sair do programa
process.exit(0);
```

## Variáveis de Ambiente

```javascript
// No terminal
// $ export NODE_ENV=production
// $ node app.js

if (process.env.NODE_ENV === "production") {
  console.log("Rodando em produção");
} else {
  console.log("Rodando em desenvolvimento");
}
```

## File System (fs)

```javascript
const fs = require("fs");

// Ler arquivo (síncrono - bloqueia)
const dados = fs.readFileSync("arquivo.txt", "utf8");

// Ler arquivo (assincrónico - não bloqueia)
fs.readFile("arquivo.txt", "utf8", (erro, dados) => {
  if (erro) console.error(erro);
  else console.log(dados);
});

// Com Promises
fs.promises.readFile("arquivo.txt", "utf8")
  .then(dados => console.log(dados))
  .catch(erro => console.error(erro));
```

## HTTP Server

```javascript
const http = require("http");

const servidor = http.createServer((requisicao, resposta) => {
  resposta.writeHead(200, { "Content-Type": "text/plain" });
  resposta.end("Olá, mundo!");
});

servidor.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

## Diferenças Importantes

### Single-threaded mas Assincrónico
```javascript
// JavaScript é single-threaded (uma thread)
// Mas as operações I/O são não-bloqueantes

fs.readFile("arquivo.txt", (dados) => {
  console.log("Arquivo lido");
});

console.log("Não bloqueia aqui");

// Output:
// Não bloqueia aqui
// Arquivo lido (depois)
```

### Bloqueante vs Não-bloqueante
```javascript
// ❌ Bloqueante (não recomendado)
const dados = fs.readFileSync("arquivo.txt");
console.log("Dados:", dados);

// ✅ Não-bloqueante (recomendado)
fs.readFile("arquivo.txt", (err, dados) => {
  console.log("Dados:", dados);
});
console.log("Continuando execução");
```

## npm - Node Package Manager

```bash
# Iniciar projeto
npm init

# Instalar pacote
npm install express

# Instalar como dev dependency
npm install --save-dev nodemon

# Listar pacotes
npm list

# Atualizar pacotes
npm update

# Executar script
npm run start
```

## Módulos Nativos Mais Usados

```javascript
// File System
const fs = require("fs");

// HTTP
const http = require("http");

// Path
const path = require("path");

// Events
const EventEmitter = require("events");

// Util
const util = require("util");

// Stream
const stream = require("stream");
```

## Callback Hell vs Promises vs async/await

```javascript
// ❌ Callback Hell
fs.readFile("arquivo.txt", (err, dados) => {
  if (!err) {
    processarDados(dados, (err, resultado) => {
      if (!err) {
        salvarDados(resultado, (err) => {
          if (!err) {
            console.log("Sucesso!");
          }
        });
      }
    });
  }
});

// ✅ Promises
fs.promises.readFile("arquivo.txt", "utf8")
  .then(dados => processarDados(dados))
  .then(resultado => salvarDados(resultado))
  .then(() => console.log("Sucesso!"))
  .catch(err => console.error(err));

// ✅✅ async/await (melhor!)
async function processar() {
  try {
    const dados = await fs.promises.readFile("arquivo.txt", "utf8");
    const resultado = await processarDados(dados);
    await salvarDados(resultado);
    console.log("Sucesso!");
  } catch (err) {
    console.error(err);
  }
}
```

## Próximo Passo

Após dominar conceitos Node.js, estude **[JSON](../json/)** para manipular dados estruturados.

## Referências

📚 [Node.js Docs](https://nodejs.org/en/docs/)  
📚 [Event Loop - JavaScript.info](https://javascript.info/event-loop)  
📚 [Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)  
