# Criação de Objetos

## O que é um Objeto?

Um **objeto** é uma coleção de pares chave-valor que armazena dados relacionados. É a estrutura fundamental do JavaScript.

## Características

✅ **Vantagens:**
- Organiza dados relacionados
- Fácil acesso via propriedades
- Métodos integrados
- Flexível e dinâmico

## Formas de Criar Objetos

### 1. Object Literal (Forma Mais Comum)
```javascript
const pessoa = {
  nome: "Ana",
  idade: 25,
  email: "ana@email.com"
};
```

### 2. Constructor Function
```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const ana = new Pessoa("Ana", 25);
```

### 3. Object.create()
```javascript
const proto = { saudacao: "Olá" };
const obj = Object.create(proto);
```

### 4. new Object()
```javascript
const pessoa = new Object();
pessoa.nome = "Ana";
pessoa.idade = 25;
```

### 5. Class (ES6)
```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const ana = new Pessoa("Ana", 25);
```

## Tipos de Propriedades

### Propriedades Simples
```javascript
const usuario = {
  nome: "Ana",
  idade: 25,
  ativo: true
};
```

### Propriedades Aninhadas
```javascript
const usuario = {
  nome: "Ana",
  endereco: {
    rua: "Rua A",
    cidade: "São Paulo",
    cep: "01234-567"
  }
};

console.log(usuario.endereco.cidade);  // "São Paulo"
```

### Métodos
```javascript
const usuario = {
  nome: "Ana",
  apresentar: function() {
    return `Olá, meu nome é ${this.nome}`;
  }
};

console.log(usuario.apresentar());
```

### Getters e Setters
```javascript
const usuario = {
  _idade: 25,
  get idade() {
    return this._idade;
  },
  set idade(valor) {
    if (valor >= 0) {
      this._idade = valor;
    }
  }
};

console.log(usuario.idade);  // 25
usuario.idade = 30;
```

## Exemplos Práticos do Dia a Dia

### 1. Usuário
```javascript
const usuario = {
  id: 1,
  nome: "Ana Silva",
  email: "ana@email.com",
  ativo: true,
  dataCriacao: new Date('2025-01-15')
};
```

### 2. Produto em E-commerce
```javascript
const produto = {
  id: 101,
  nome: "Notebook",
  preco: 2500,
  descricao: "Notebook de última geração",
  categoria: "Eletrônicos",
  estoque: 5,
  avaliacao: 4.5,
  tags: ["notebook", "computador", "portátil"]
};
```

### 3. Pedido
```javascript
const pedido = {
  id: 5001,
  cliente: "Ana Silva",
  data: new Date('2025-01-15'),
  itens: [
    { produto: "Notebook", quantidade: 1, preco: 2500 },
    { produto: "Mouse", quantidade: 2, preco: 50 }
  ],
  total: 2600,
  status: "confirmado",
  endereco_entrega: {
    rua: "Rua A",
    numero: 123,
    cidade: "São Paulo"
  }
};
```

### 4. Configuração da Aplicação
```javascript
const config = {
  app: "Meu App",
  versao: "1.0.0",
  debug: true,
  api: {
    baseUrl: "https://api.exemplo.com",
    timeout: 5000,
    versao: "v1"
  },
  temas: ["light", "dark", "auto"]
};
```

### 5. Pessoa com Métodos
```javascript
const pessoa = {
  nome: "Ana",
  idade: 25,
  apresentar: function() {
    return `Meu nome é ${this.nome} e tenho ${this.idade} anos`;
  },
  fazerAniversario: function() {
    this.idade++;
  }
};
```

## Adicionando e Removendo Propriedades

### Adicionar
```javascript
const obj = { nome: "Ana" };
obj.idade = 25;              // Adiciona propriedade
obj["email"] = "ana@email.com"; // Notação de colchetes
```

### Remover
```javascript
const obj = { nome: "Ana", idade: 25 };
delete obj.idade;            // Remove propriedade
```

### Verificar Existência
```javascript
const obj = { nome: "Ana" };
console.log("nome" in obj);      // true
console.log(obj.hasOwnProperty("nome")); // true
console.log(obj.email);          // undefined
```

## Métodos Úteis

### Object.keys()
```javascript
const obj = { nome: "Ana", idade: 25 };
console.log(Object.keys(obj));  // ["nome", "idade"]
```

### Object.values()
```javascript
const obj = { nome: "Ana", idade: 25 };
console.log(Object.values(obj));  // ["Ana", 25]
```

### Object.entries()
```javascript
const obj = { nome: "Ana", idade: 25 };
console.log(Object.entries(obj));  // [["nome", "Ana"], ["idade", 25]]
```

### Object.assign()
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged = Object.assign({}, obj1, obj2);  // { a: 1, b: 2, c: 3 }
```

### Spread Operator
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }
```

## Dicas Importantes

✅ **USE:**
- Object literal para criar objetos simples
- Classes para estruturas complexas e reutilizáveis
- Spread operator para copiar/mesclar objetos
- Métodos para encapsular lógica

❌ **EVITE:**
- Modificar Object.prototype
- Usar var para declarar objetos
- Muitas propriedades aninhadas (complexidade)
- Objetos globais quando possível

## Comparação: Literal vs Class

```javascript
// Literal - simples, rápido
const pessoa1 = {
  nome: "Ana",
  apresentar() { return this.nome; }
};

// Class - estruturado, reutilizável
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  apresentar() {
    return this.nome;
  }
}

const pessoa2 = new Pessoa("Ana");
```

Ambos funcionam, escolha conforme a necessidade!
