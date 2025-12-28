# Arrow Functions (() => {})

## O que é uma Arrow Function?

Uma **arrow function** é uma forma mais concisa de escrever funções em JavaScript, introduzida no ES6 (2015). Ela usa a sintaxe `=>` (lê-se "seta").

## Características

✅ **Vantagens:**
- Sintaxe mais curta e legível
- Ideal para callbacks e operações simples
- Herda o `this` do contexto pai (útil em objetos)
- Perfeita para funções pequenas

❌ **Limitações:**
- Não tem seu próprio `this` (herda do pai)
- Não funciona bem como construtores
- Sem acesso a `arguments`
- Sem hoisting (deve ser declarada antes de usar)

## Sintaxe

```javascript
// Sem parâmetros
() => {
  console.log("Olá");
}

// Um parâmetro (parênteses opcionais)
x => x * 2
(x) => x * 2

// Múltiplos parâmetros
(x, y) => x + y

// Retorno implícito (sem {})
(x, y) => x + y

// Retorno explícito (com {})
(x, y) => {
  const resultado = x + y;
  return resultado;
}

// Retornar objeto (envolver em parênteses)
(nome, idade) => ({ nome, idade })
```

## Comparação: Function vs Arrow

```javascript
// Função tradicional
function quadrado(x) {
  return x * x;
}

// Arrow function
const quadrado = (x) => x * x;
const quadrado = x => x * x;  // Parênteses opcionais com 1 parâmetro
```

## Quando Usar Arrow Functions

### ✅ USE para:
- Funções pequenas e simples
- Callbacks (array.map, array.filter, setTimeout)
- Operações rápidas
- Em métodos de objetos (quando quer usar `this`)

### ❌ EVITE para:
- Funções construtoras (use class ou function)
- Métodos que dependem de `this` específico
- Funções complexas com muito código

## Exemplos Práticos do Dia a Dia

### 1. Transformar Array com map()
```javascript
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]
```

### 2. Filtrar Dados com filter()
```javascript
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 17 },
  { nome: "Carlos", idade: 30 }
];

const maioresDeIdade = usuarios.filter(u => u.idade >= 18);
```

### 3. Buscar um Item com find()
```javascript
const produtos = [
  { id: 1, nome: "Notebook", preco: 2500 },
  { id: 2, nome: "Mouse", preco: 50 }
];

const produto = produtos.find(p => p.id === 2);
```

### 4. Somar com reduce()
```javascript
const precos = [100, 200, 150, 300];
const total = precos.reduce((soma, preco) => soma + preco, 0);
console.log(total); // 750
```

### 5. Ordenar com sort()
```javascript
const nomes = ["Zoe", "Ana", "Bruno"];
const ordenado = nomes.sort((a, b) => a.localeCompare(b));
console.log(ordenado); // ["Ana", "Bruno", "Zoe"]
```

### 6. Validar Email de Forma Simples
```javascript
const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

console.log(validarEmail("user@gmail.com"));   // true
console.log(validarEmail("email-invalido"));   // false
```

### 7. Converter Moeda
```javascript
const emReais = (valor) => valor.toLocaleString('pt-BR', { 
  style: 'currency', 
  currency: 'BRL' 
});

console.log(emReais(1299.90)); // R$ 1.299,90
```

### 8. Calcular Desconto
```javascript
const aplicarDesconto = (preco, desconto) => preco * (1 - desconto / 100);

console.log(aplicarDesconto(100, 20)); // 80
```

### 9. Buscar em API (setTimeout)
```javascript
const buscarDados = () => {
  setTimeout(() => {
    console.log("Dados carregados!");
  }, 2000);
};

buscarDados();
```

### 10. Transformar Objetos
```javascript
const usuarios = [
  { nome: "Ana", email: "ana@email.com" },
  { nome: "Bruno", email: "bruno@email.com" }
];

const emails = usuarios.map(u => u.email);
console.log(emails); // ["ana@email.com", "bruno@email.com"]
```

## Retorno Implícito vs Explícito

```javascript
// Retorno implícito (sem {})
const quadrado = x => x * x;

// Retorno explícito (com {})
const quadrado = x => {
  const resultado = x * x;
  return resultado;
};

// Retornar objeto (precisa de parênteses)
const criarPessoa = (nome, idade) => ({ nome, idade });
```

## Importante: O `this` em Arrow Functions

```javascript
const pessoa = {
  nome: "João",
  saudacao: () => {
    console.log(this.nome); // undefined! (this não funciona aqui)
  },
  saudacao2: function() {
    console.log(this.nome); // "João" (funciona!)
  }
};

pessoa.saudacao();  // undefined
pessoa.saudacao2(); // "João"
```

## Dicas de Boas Práticas

1. **Use para callbacks e operações rápidas**
2. **Mantenha o corpo da função simples**
3. **Se precisar de muitas linhas, use function {}**
4. **Não use em construtores**
5. **Cuidado com `this` - herda do contexto pai**

## Exemplos de Chain (Encadeamento)

```javascript
const dados = [
  { id: 1, valor: 100, ativo: true },
  { id: 2, valor: 50, ativo: false },
  { id: 3, valor: 200, ativo: true }
];

const resultado = dados
  .filter(d => d.ativo)        // Apenas ativos
  .map(d => d.valor * 2)       // Dobrar valor
  .reduce((a, b) => a + b, 0); // Somar tudo

console.log(resultado); // 600
```
