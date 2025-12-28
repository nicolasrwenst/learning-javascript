# Escopo de Funções

## O que é Escopo?

**Escopo** é o contexto em que uma variável ou função está disponível para uso. Define onde você pode acessar uma variável ou função.

## Tipos de Escopo

### 1. Escopo Global
Variáveis acessíveis em qualquer lugar do programa.

```javascript
var nomeGlobal = "João";  // Global

function exibir() {
  console.log(nomeGlobal); // Acessível aqui
}

exibir(); // "João"
console.log(nomeGlobal); // "João"
```

### 2. Escopo Local (Function Scope)
Variáveis criadas dentro de uma função só existem naquela função.

```javascript
function minhaFuncao() {
  var nomeLocal = "Maria"; // Local
  console.log(nomeLocal);  // "Maria"
}

minhaFuncao();
console.log(nomeLocal); // ReferenceError!
```

### 3. Escopo de Bloco (Block Scope)
Com `let` e `const`, variáveis ficam presas ao bloco `{ }`.

```javascript
if (true) {
  let variavel = "Dentro do if";
  console.log(variavel); // "Dentro do if"
}

console.log(variavel); // ReferenceError!
```

### 4. Escopo Léxico (Lexical Scope)
Uma função interna tem acesso às variáveis da função externa.

```javascript
function externa() {
  const mensagem = "Olá";
  
  function interna() {
    console.log(mensagem); // Acessa variável da função externa
  }
  
  interna();
}

externa(); // "Olá"
```

## Diferença entre var, let e const

| Característica | var | let | const |
|---|---|---|---|
| Escopo | Function | Block | Block |
| Hoisting | Sim (undefined) | Sim (TDZ) | Sim (TDZ) |
| Reatribuição | Sim | Sim | Não |
| Redeclaração | Sim | Não | Não |

```javascript
// var - function scope
function exemplo1() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1 (acessível!)
}

// let - block scope
function exemplo2() {
  if (true) {
    let y = 2;
  }
  console.log(y); // ReferenceError!
}

// const - block scope + imutável
function exemplo3() {
  const z = 3;
  z = 4; // TypeError!
}
```

## Hoisting

**Hoisting** é o comportamento de JavaScript de mover declarações para o topo do escopo.

### var - Hoisting com undefined
```javascript
console.log(x); // undefined (não erro!)
var x = 5;
console.log(x); // 5

// É como se fosse:
// var x;
// console.log(x); // undefined
// x = 5;
```

### let e const - Temporal Dead Zone (TDZ)
```javascript
console.log(y); // ReferenceError!
let y = 5;

// let está no escopo mas não foi inicializado
```

## Closure (Fechamento)

Uma **closure** é quando uma função tem acesso às variáveis da função que a envolve, mesmo após essa função ter terminado.

```javascript
function criar Contador() {
  let count = 0; // Privada
  
  return function() {
    count++;
    return count;
  };
}

const meuContador = criar Contador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3
```

## Cadeia de Escopo (Scope Chain)

JavaScript procura variáveis seguindo uma cadeia: Local → Pai → Global

```javascript
const global = "Global";

function externa() {
  const externa_var = "Externa";
  
  function interna() {
    const interna_var = "Interna";
    
    console.log(interna_var);  // "Interna" (local)
    console.log(externa_var);  // "Externa" (pai)
    console.log(global);       // "Global" (global)
  }
  
  interna();
}

externa();
```

## Shadowing (Ocultamento)

Quando uma variável interna tem o mesmo nome de uma externa.

```javascript
let x = "Global";

{
  let x = "Local";
  console.log(x); // "Local" (shadowing)
}

console.log(x); // "Global"
```

## Exemplos Práticos do Dia a Dia

### 1. Acesso a Variáveis de Escopo Superior
```javascript
function criarUsuario(nome) {
  const email = `${nome}@email.com`; // Escopo da função
  
  return {
    apresentar: function() {
      return `${nome} (${email})`; // Acessa variáveis externas
    }
  };
}

const usuario = criarUsuario("João");
console.log(usuario.apresentar()); // João (joao@email.com)
```

### 2. Evitar Variáveis Globais
```javascript
// ❌ Ruim - polui escopo global
var contador = 0;

function incrementar() {
  contador++;
}

// ✅ Bom - escopo privado
const app = (function() {
  let contador = 0; // Privado
  
  return {
    incrementar: function() {
      contador++;
      return contador;
    }
  };
})();

app.incrementar(); // 1
// app.contador; // undefined (privado!)
```

### 3. Callbacks com Acesso ao Escopo Pai
```javascript
function processar Usuários(usuarios) {
  const dominio = "@empresa.com"; // Escopo da função
  
  usuarios.forEach(function(usuario) {
    // Acessa 'dominio' do escopo pai
    usuario.emailEmpresa = usuario.nome.toLowerCase() + dominio;
  });
  
  return usuarios;
}

const usuarios = [{ nome: "Ana" }, { nome: "Bruno" }];
processar Usuários(usuarios);
console.log(usuarios);
// [
//   { nome: "Ana", emailEmpresa: "ana@empresa.com" },
//   { nome: "Bruno", emailEmpresa: "bruno@empresa.com" }
// ]
```

### 4. Factory com Dados Privados
```javascript
function criar Carro(marca, modelo) {
  let kilometragem = 0; // Privado
  
  return {
    obterInfo: function() {
      return `${marca} ${modelo} - ${kilometragem}km`;
    },
    andar: function(km) {
      kilometragem += km;
    }
  };
}

const meuCarro = criar Carro("Toyota", "Corolla");
meuCarro.andar(100);
meuCarro.andar(50);
console.log(meuCarro.obterInfo()); // Toyota Corolla - 150km
// console.log(meuCarro.kilometragem); // undefined
```

### 5. Múltiplas Funções com Escopo Compartilhado
```javascript
const loginModule = (function() {
  let usuarioLogado = null; // Compartilhado privado
  
  return {
    fazer Login: function(email, senha) {
      if (email === "admin@email.com" && senha === "123") {
        usuarioLogado = { email, logado: true };
        return true;
      }
      return false;
    },
    obterUsuario: function() {
      return usuarioLogado;
    },
    fazer Logout: function() {
      usuarioLogado = null;
    }
  };
})();

loginModule.fazer Login("admin@email.com", "123");
console.log(loginModule.obterUsuario()); // { email: "...", logado: true }
loginModule.fazer Logout();
console.log(loginModule.obterUsuario()); // null
```

### 6. Cuidado com Loops
```javascript
// ❌ Problema: com var
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 3, 3, 3
  }, 100);
}

// ✅ Solução 1: let (block scope)
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 0, 1, 2
  }, 100);
}

// ✅ Solução 2: IIFE (closure)
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // 0, 1, 2
    }, 100);
  })(i);
}
```

## Dicas de Boas Práticas

1. ✅ **Prefira `let` e `const`** em lugar de `var`
2. ✅ **Use closures** para dados privados
3. ✅ **Evite variáveis globais** ao máximo
4. ✅ **Agrupe variáveis** relacionadas em objetos/módulos
5. ✅ **Documente** o escopo de funções complexas
6. ❌ **Evite shadowing** sem necessidade
7. ❌ **Não confie em hoisting** - declare antes de usar

## Escopo em Diferentes Contextos

### Escopo em Arrow Functions
```javascript
const pessoa = {
  nome: "João",
  saudacao: () => {
    console.log(this.nome); // undefined (this não funciona aqui)
  },
  saudacao2: function() {
    console.log(this.nome); // "João" (this do objeto)
  }
};
```

### Escopo com Destructuring
```javascript
function processar({ nome, idade }) {
  // nome e idade estão em escopo local
  console.log(nome, idade);
}

processar({ nome: "Ana", idade: 25 });
```

### Escopo com Async/Await
```javascript
async function buscar Dados() {
  const resposta = await fetch("...");
  const dados = await resposta.json();
  // dados está em escopo local
  return dados;
}
```
