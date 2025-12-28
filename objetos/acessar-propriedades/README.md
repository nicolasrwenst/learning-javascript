# Acessar Propriedades de Objetos

## O que é Acesso a Propriedades?

**Acesso a propriedades** é como você recupera dados de um objeto usando o nome da propriedade.

## Duas Formas de Acessar

### 1. Notação de Ponto (Dot Notation)
```javascript
const pessoa = { nome: "Ana", idade: 25 };
console.log(pessoa.nome);   // "Ana"
console.log(pessoa.idade);  // 25
```

### 2. Notação de Colchetes (Bracket Notation)
```javascript
const pessoa = { nome: "Ana", idade: 25 };
console.log(pessoa["nome"]);   // "Ana"
console.log(pessoa["idade"]);  // 25
```

## Quando Usar Cada Uma

### Use Ponto (.)
- Para propriedades com nomes válidos
- Quando sabe o nome em tempo de desenvolvimento
- Mais legível

```javascript
const usuario = { nome: "Ana", email: "ana@email.com" };
console.log(usuario.nome);    // ✅ Recomendado
```

### Use Colchetes ([])
- Nomes com espaços ou caracteres especiais
- Números como nomes
- Nomes dinâmicos (variáveis)

```javascript
const usuario = {
  "primeiro nome": "Ana",
  "123": "número",
  email: "ana@email.com"
};

console.log(usuario["primeiro nome"]);  // "Ana"
console.log(usuario["123"]);           // "número"
console.log(usuario.email);            // "ana@email.com"

// Com variável
const chave = "email";
console.log(usuario[chave]);  // "ana@email.com"
```

## Acessar Propriedades Aninhadas

```javascript
const usuario = {
  nome: "Ana",
  endereco: {
    rua: "Rua A",
    numero: 123,
    cidade: {
      nome: "São Paulo",
      estado: "SP"
    }
  }
};

console.log(usuario.endereco.rua);           // "Rua A"
console.log(usuario.endereco.cidade.nome);   // "São Paulo"
console.log(usuario["endereco"]["numero"]);  // 123
```

## Acessar com Valor Padrão (Coalescing)

### Optional Chaining (?.)
```javascript
const usuario = { nome: "Ana" };
console.log(usuario.email?.length);  // undefined (não erro)
console.log(usuario.endereco?.rua);  // undefined
```

### Nullish Coalescing (??)
```javascript
const usuario = { nome: "Ana", email: null };
const email = usuario.email ?? "sem-email@exemplo.com";
console.log(email);  // "sem-email@exemplo.com"
```

### Valor Padrão Manual
```javascript
const usuario = { nome: "Ana" };
const email = usuario.email || "padrão@email.com";
console.log(email);  // "padrão@email.com"
```

## Verificar Existência de Propriedade

### in Operator
```javascript
const obj = { a: 1, b: 2 };
console.log("a" in obj);      // true
console.log("c" in obj);      // false
```

### hasOwnProperty()
```javascript
const obj = { a: 1, b: 2 };
console.log(obj.hasOwnProperty("a"));  // true
console.log(obj.hasOwnProperty("c"));  // false
```

### Comparar com undefined
```javascript
const obj = { a: 1 };
console.log(obj.b === undefined);  // true
console.log(obj.a === undefined);  // false
```

## Iterar sobre Propriedades

### for...in
```javascript
const pessoa = { nome: "Ana", idade: 25, ativo: true };

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
```

### Object.keys()
```javascript
const pessoa = { nome: "Ana", idade: 25 };
Object.keys(pessoa).forEach(chave => {
  console.log(`${chave}: ${pessoa[chave]}`);
});
```

### Object.values()
```javascript
const pessoa = { nome: "Ana", idade: 25 };
Object.values(pessoa).forEach(valor => {
  console.log(valor);
});
```

### Object.entries()
```javascript
const pessoa = { nome: "Ana", idade: 25 };
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});
```

## Exemplos Práticos do Dia a Dia

### 1. Acessar Dados de Usuário
```javascript
const usuario = {
  id: 1,
  nome: "Ana Silva",
  email: "ana@email.com",
  perfil: "admin"
};

console.log(usuario.nome);    // "Ana Silva"
console.log(usuario.email);   // "ana@email.com"
```

### 2. Acessar Produto com Propriedades
```javascript
const produto = {
  id: 101,
  nome: "Notebook",
  preco: 2500,
  desconto: 10,
  preco_com_desconto: 2250
};

console.log(produto.preco);              // 2500
console.log(produto.preco_com_desconto); // 2250
```

### 3. Acessar Endereço Aninhado
```javascript
const usuario = {
  nome: "Ana",
  endereco: {
    rua: "Rua A",
    numero: 123,
    cidade: "São Paulo",
    cep: "01234-567"
  }
};

console.log(usuario.endereco.rua);    // "Rua A"
console.log(usuario.endereco.cidade); // "São Paulo"
```

### 4. Acessar com Segurança (Optional Chaining)
```javascript
const usuario = { nome: "Ana" };

// Sem optional chaining - erro se usuario.endereco é null
// console.log(usuario.endereco.rua);  // TypeError!

// Com optional chaining - retorna undefined
console.log(usuario.endereco?.rua);  // undefined
```

### 5. Obter Valor com Fallback
```javascript
const usuario = { nome: "Ana", email: null };

const email = usuario.email || "sem-email@exemplo.com";
const fone = usuario.telefone ?? "sem-telefone";

console.log(email);  // "sem-email@exemplo.com"
console.log(fone);   // "sem-telefone"
```

### 6. Acessar Propriedade Dinâmica
```javascript
const usuario = {
  nome: "Ana",
  email: "ana@email.com",
  telefone: "11-98765-4321"
};

function obterDados(obj, propriedade) {
  return obj[propriedade];
}

console.log(obterDados(usuario, "nome"));      // "Ana"
console.log(obterDados(usuario, "email"));     // "ana@email.com"
console.log(obterDados(usuario, "telefone")); // "11-98765-4321"
```

### 7. Verificar Campo Preenchido
```javascript
const formulario = {
  nome: "Ana",
  email: "",
  telefone: null
};

console.log(formulario.nome || "Não preenchido");      // "Ana"
console.log(formulario.email || "Não preenchido");     // "Não preenchido"
console.log(formulario.telefone || "Não preenchido");  // "Não preenchido"
```

### 8. Mapear Propriedades
```javascript
const usuario = { nome: "Ana", idade: 25, ativo: true };

const propriedades = Object.keys(usuario);
console.log(propriedades);  // ["nome", "idade", "ativo"]

propriedades.forEach(prop => {
  console.log(`${prop}: ${usuario[prop]}`);
});
```

### 9. Acessar Dados de API
```javascript
const resposta = {
  status: 200,
  dados: {
    usuarios: [
      { id: 1, nome: "Ana" },
      { id: 2, nome: "Bruno" }
    ]
  }
};

console.log(resposta.status);           // 200
console.log(resposta.dados.usuarios[0].nome);  // "Ana"
```

### 10. Extrair Múltiplas Propriedades
```javascript
const usuario = {
  id: 1,
  nome: "Ana",
  email: "ana@email.com",
  perfil: "admin",
  ativo: true
};

const { id, nome, email } = usuario;
console.log(id, nome, email);
```

## Dicas de Boas Práticas

✅ **USE:**
- Ponto (.) para propriedades normais
- Colchetes para nomes dinâmicos
- Optional chaining para segurança
- Destructuring para múltiplas propriedades

❌ **EVITE:**
- Acessar propriedades que não existem sem verificar
- Assumir que aninhamentos existem
- Acessar com for...in se tiver herança

## Performance Considerations

```javascript
// ✅ Rápido - nome conhecido em tempo de desenvolvimento
const valor = obj.propriedade;

// ⚠️ Mais lento - chave dinâmica
const valor = obj[chave];

// Para muitos acessos, cache a propriedade
const nome = obj.nome;
console.log(nome);
console.log(nome.toUpperCase());
```
