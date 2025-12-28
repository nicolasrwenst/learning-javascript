# Módulos em JavaScript

## O que é um Módulo?

Um **módulo** é um arquivo JavaScript que exporta funcionalidade para ser usada em outros arquivos. Permite organizar código em partes reutilizáveis.

```javascript
// arquivo1.js - Exporta
function saudar(nome) {
  return `Olá, ${nome}!`;
}
module.exports = saudar;

// arquivo2.js - Importa
const saudar = require("./arquivo1");
console.log(saudar("Ana"));
```

## Por que Usar Módulos?

✅ **Organização** - Código dividido em arquivos  
✅ **Reutilização** - Use funções em vários arquivos  
✅ **Manutenibilidade** - Fácil de encontrar e mudar  
✅ **Encapsulamento** - Esconda o que não é necessário  
✅ **Evitar conflitos** - Cada arquivo tem seu escopo  

## CommonJS vs ES Modules

| Aspecto | CommonJS | ES Modules |
|---------|----------|------------|
| Sintaxe Exportar | `module.exports =` | `export` |
| Sintaxe Importar | `require()` | `import` |
| Tipo de Carregamento | Sincrónico | Assincrónico |
| Onde usa | Node.js (padrão antigo) | Node.js (moderno), Navegador |
| Arquivo | `.js` | `.js`, `.mjs` |
| Nível | Runtime | Compile-time |

## CommonJS (Node.js Tradicional)

### Exportar um valor
```javascript
// math.js
function somar(a, b) {
  return a + b;
}

module.exports = somar;
```

### Importar
```javascript
// app.js
const somar = require("./math");
console.log(somar(2, 3));  // 5
```

### Exportar múltiplos valores
```javascript
// utils.js
module.exports = {
  somar: (a, b) => a + b,
  subtrair: (a, b) => a - b,
  multiplicar: (a, b) => a * b
};
```

### Importar múltiplos valores
```javascript
// app.js
const { somar, subtrair } = require("./utils");
console.log(somar(5, 3));      // 8
console.log(subtrair(5, 3));   // 2
```

## ES Modules (Moderno)

### Exportar nomeado
```javascript
// math.js
export function somar(a, b) {
  return a + b;
}

export function subtrair(a, b) {
  return a - b;
}
```

### Importar nomeado
```javascript
// app.js
import { somar, subtrair } from "./math.js";
console.log(somar(5, 3));  // 8
```

### Exportar padrão
```javascript
// usuario.js
export default class Usuario {
  constructor(nome) {
    this.nome = nome;
  }
}
```

### Importar padrão
```javascript
// app.js
import Usuario from "./usuario.js";
const user = new Usuario("Ana");
```

### Importar tudo
```javascript
// app.js
import * as math from "./math.js";
console.log(math.somar(5, 3));
```

## Estrutura de Projeto

```
projeto/
├── index.js              (arquivo principal)
├── package.json          (configuração do projeto)
├── utils/
│   ├── math.js          (módulo)
│   └── string.js        (módulo)
├── models/
│   ├── usuario.js
│   └── produto.js
└── config/
    └── database.js
```

## package.json

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "type": "module",  // Para usar ES Modules
  "main": "index.js",
  "dependencies": {
    "express": "^4.18.0"
  }
}
```

### Sem "type": "module", use .mjs para ES Modules
```
arquivo.mjs  // Será interpretado como ES Module
arquivo.js   // Será interpretado como CommonJS
```

## Módulos Nativos do Node.js

```javascript
// CommonJS
const fs = require("fs");
const path = require("path");
const http = require("http");

// ES Modules
import fs from "fs";
import path from "path";
import http from "http";
```

## npm - Node Package Manager

### Instalar pacote
```bash
npm install express
npm install --save-dev nodemon
```

### Usar pacote instalado
```javascript
// CommonJS
const express = require("express");

// ES Modules
import express from "express";
```

## Módulo com Lógica Complexa

```javascript
// conversor.js
export class Conversor {
  constructor(taxaConversao) {
    this.taxa = taxaConversao;
  }
  
  converter(valor) {
    return valor * this.taxa;
  }
}

export function dolarParaReal(dolar) {
  const taxa = 5.0;
  return dolar * taxa;
}
```

```javascript
// app.js
import { Conversor, dolarParaReal } from "./conversor.js";

const conversor = new Conversor(5.0);
console.log(conversor.converter(100));  // 500

console.log(dolarParaReal(100));        // 500
```

## Re-exportar

```javascript
// index.js
export { somar, subtrair } from "./math.js";
export { Usuario } from "./usuario.js";
export { conectarBD } from "./database.js";
```

```javascript
// app.js
import { somar, Usuario, conectarBD } from "./index.js";
```

## Importação Dinâmica

```javascript
// Importação dinâmica (funciona em CommonJS e ES Modules)
async function carregarModulo() {
  const modulo = await import("./utils.js");
  console.log(modulo.somar(2, 3));
}

carregarModulo();
```

## Qual Usar?

### Use **CommonJS** se:
- Trabalhando em código Node.js antigo
- Projeto não tem "type": "module" em package.json
- Precisa suportar Node.js < 14

### Use **ES Modules** se:
- Novo projeto
- Node.js 14+
- Quer usar em navegador também
- É a direção futura do JavaScript

## Melhores Práticas

✏️ **Um módulo = uma responsabilidade**  
✏️ **Exporte o mínimo necessário**  
✏️ **Use nomes descritivos**  
✏️ **Evite dependências circulares** - A importa B e B importa A  
✏️ **Organize em pastas** - utils/, models/, controllers/, etc.  

## Próximo Passo

Após dominar módulos, estude **[Conceitos Node.js](../conceitos-nodejs/)** para entender JavaScript fora do navegador.

## Referências

📚 [MDN - Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)  
📚 [Node.js - Modules](https://nodejs.org/en/docs/guides/nodejs-web-server/)  
📚 [JavaScript.info - Modules](https://javascript.info/modules-intro)  
