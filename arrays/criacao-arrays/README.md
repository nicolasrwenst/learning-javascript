# Criação de Arrays

## O que é um Array?

Um **array** é uma estrutura de dados que armazena múltiplos valores em uma única variável. Os elementos são acessados por índices (começando do 0).

## Características

✅ **Vantagens:**
- Armazena múltiplos valores
- Fácil acesso por índice
- Métodos integrados para manipulação
- Dinâmico (pode crescer/encolher)

## Formas de Criar Arrays

### 1. Usando Colchetes (Forma Literal)
```javascript
const numeros = [1, 2, 3, 4, 5];
const nomes = ["Ana", "Bruno", "Carlos"];
const misto = [1, "texto", true, null];
```

### 2. Usando new Array()
```javascript
const array1 = new Array(1, 2, 3);
const array2 = new Array(5);  // Array com 5 posições vazias
```

### 3. Array vazio
```javascript
const vazio = [];
```

### 4. Spread Operator (...)
```javascript
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];  // [1, 2, 3, 4, 5]
```

### 5. Array.from() - Converter para Array
```javascript
const string = "Hello";
const array = Array.from(string);  // ['H', 'e', 'l', 'l', 'o']

const numeros = Array.from({ length: 5 }, (_, i) => i + 1);  // [1, 2, 3, 4, 5]
```

### 6. Array.of() - Criar array com valores
```javascript
const array = Array.of(1, 2, 3);  // [1, 2, 3]
const array2 = Array.of(5);       // [5] (não [vazio, vazio, vazio, vazio, vazio])
```

## Acessando Elementos

```javascript
const frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]);        // "maçã"
console.log(frutas[1]);        // "banana"
console.log(frutas.length);    // 3
console.log(frutas[-1]);       // undefined (não funciona)
console.log(frutas.at(-1));    // "laranja" (último elemento)
```

## Adicionando e Removendo Elementos

### Adicionar
```javascript
const arr = [1, 2, 3];

arr.push(4);              // [1, 2, 3, 4] - adiciona ao final
arr.unshift(0);           // [0, 1, 2, 3, 4] - adiciona no início
```

### Remover
```javascript
const arr = [1, 2, 3, 4];

arr.pop();                // [1, 2, 3] - remove último
arr.shift();              // [2, 3] - remove primeiro
arr.splice(1, 1);         // Remove um elemento no índice 1
```

## Tipos de Arrays

### Arrays de Números
```javascript
const numeros = [1, 2, 3, 4, 5];
```

### Arrays de Strings
```javascript
const nomes = ["Ana", "Bruno", "Carlos"];
```

### Arrays de Objetos
```javascript
const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" }
];
```

### Arrays Multidimensionais
```javascript
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[0][1]);  // 2
```

### Arrays Heterogêneos
```javascript
const misto = [1, "texto", true, { id: 1 }, [1, 2]];
```

## Exemplos Práticos do Dia a Dia

### 1. Lista de Produtos em E-commerce
```javascript
const produtos = [
  { id: 1, nome: "Notebook", preco: 2500 },
  { id: 2, nome: "Mouse", preco: 50 },
  { id: 3, nome: "Teclado", preco: 150 }
];

console.log(produtos[0].nome);  // "Notebook"
console.log(produtos.length);   // 3
```

### 2. Histórico de Transações
```javascript
const transacoes = [];

transacoes.push({ data: "01/01", valor: 100, tipo: "entrada" });
transacoes.push({ data: "02/01", valor: 50, tipo: "saída" });

console.log(transacoes);
```

### 3. Carrinho de Compras
```javascript
const carrinho = [
  { produto: "Notebook", quantidade: 1, preco: 2500 },
  { produto: "Mouse", quantidade: 2, preco: 50 }
];

console.log(carrinho.length);  // 2 itens
```

### 4. Lista de Tarefas
```javascript
const tarefas = [
  { id: 1, titulo: "Estudar JavaScript", completa: false },
  { id: 2, titulo: "Fazer exercício", completa: true },
  { id: 3, titulo: "Ler documentação", completa: false }
];

console.log(tarefas[0].titulo);  // "Estudar JavaScript"
```

### 5. Clonar Array
```javascript
const original = [1, 2, 3];
const clone1 = [...original];      // Spread operator
const clone2 = original.slice();   // slice
const clone3 = Array.from(original); // Array.from

clone1.push(4);
console.log(original);  // [1, 2, 3] (não foi alterado)
```

## Verificar se é Array

```javascript
const arr = [1, 2, 3];
const obj = { a: 1 };

console.log(Array.isArray(arr));   // true
console.log(Array.isArray(obj));   // false
```

## Dicas Importantes

✅ **USE:**
- `const` para declarar arrays
- Métodos como `push()`, `pop()`, `shift()`, `unshift()`
- Spread operator para clonar: `[...array]`
- `Array.isArray()` para verificar tipo

❌ **EVITE:**
- Acessar índices negativos diretamente
- Modificar diretamente se precisa manter original
- Confundir `length` com índice do último elemento

## Métodos Úteis para Criação

| Método | Descrição | Exemplo |
|--------|-----------|---------|
| `Array.from()` | Converte iterável em array | `Array.from("Hello")` |
| `Array.of()` | Cria array com valores | `Array.of(1, 2, 3)` |
| `Spread (...)` | Expande array | `[...arr1, ...arr2]` |
| `.slice()` | Cópia do array | `arr.slice()` |
| `.concat()` | Concatena arrays | `arr1.concat(arr2)` |
