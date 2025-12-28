# Desestruturação (Destructuring)

## O que é Desestruturação?

Desestruturação é uma forma prática e concisa de extrair valores de objetos e arrays atribuindo-os a variáveis. Em vez de acessar cada propriedade individualmente, você pode extrair várias de uma vez.

```javascript
// Sem desestruturação
const usuario = { nome: "Ana", email: "ana@email.com", idade: 25 };
const nome = usuario.nome;
const email = usuario.email;
const idade = usuario.idade;

// Com desestruturação
const { nome, email, idade } = usuario;
```

## Por que usar Desestruturação?

✅ **Código mais limpo** - Menos repetição de `usuario.` ou `array[0]`  
✅ **Mais legível** - Deixa claro quais dados são usados  
✅ **Menos linhas** - Múltiplas atribuições em uma linha  
✅ **Evita erros** - Menos chance de digitar propriedades erradas  
✅ **Facilita refatoring** - Mudanças estruturadas mais fáceis  

## Desestruturação de Objetos

### Sintaxe Básica

```javascript
const { propriedade1, propriedade2 } = objeto;
```

### Exemplo Prático

```javascript
const pessoa = {
  nome: "Bruno",
  email: "bruno@email.com",
  telefone: "11-98765-4321"
};

// Extrair propriedades
const { nome, email } = pessoa;
console.log(nome);   // "Bruno"
console.log(email);  // "bruno@email.com"
```

### Valores Padrão

Quando uma propriedade não existe, você pode fornecer um valor padrão:

```javascript
const { nome, email, telefone = "sem-telefone" } = pessoa;
console.log(telefone);  // "sem-telefone"
```

### Renomear Propriedades

Às vezes você quer renomear a variável:

```javascript
const { nome: nomeCompleto, email: endereco } = pessoa;
console.log(nomeCompleto);  // "Bruno"
console.log(endereco);       // "bruno@email.com"
```

### Desestruturação Aninhada

Extrair propriedades de objetos dentro de objetos:

```javascript
const usuario = {
  id: 1,
  nome: "Carlos",
  endereco: {
    rua: "Rua A",
    cidade: "São Paulo"
  }
};

const { endereco: { rua, cidade } } = usuario;
console.log(rua);    // "Rua A"
console.log(cidade); // "São Paulo"
```

### Rest Operator (...)

Extrair algumas propriedades e agrupar o resto:

```javascript
const { nome, ...resto } = usuario;
// resto conterá: { id, email, telefone, ativo, ... }
```

## Desestruturação de Arrays

### Sintaxe Básica

```javascript
const [primeiro, segundo, terceiro] = array;
```

### Exemplo Prático

```javascript
const cores = ["vermelho", "azul", "verde"];
const [cor1, cor2, cor3] = cores;

console.log(cor1);  // "vermelho"
console.log(cor2);  // "azul"
console.log(cor3);  // "verde"
```

### Pular Elementos

```javascript
const [primeiro, , terceiro] = cores;
console.log(primeiro);  // "vermelho"
console.log(terceiro);  // "verde"
```

### Rest Operator com Arrays

```javascript
const [primeiro, ...resto] = cores;
// primeiro = "vermelho"
// resto = ["azul", "verde"]
```

### Trocar Valores

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];  // Swap!
console.log(a);   // 20
console.log(b);   // 10
```

## Desestruturação em Funções

### Parâmetro de Função

```javascript
// Sem desestruturação
function exibir(usuario) {
  console.log(usuario.nome);
  console.log(usuario.email);
}

// Com desestruturação
function exibir({ nome, email }) {
  console.log(nome);
  console.log(email);
}
```

### Valores Padrão em Parâmetros

```javascript
function criarUsuario({ nome, email = "default@email.com", ativo = true }) {
  return { nome, email, ativo };
}
```

## Casos de Uso Práticos

### API Response

```javascript
// Resposta da API
const response = {
  success: true,
  data: {
    usuario: { id: 1, nome: "Ana", email: "ana@email.com" },
    token: "abc123xyz"
  }
};

// Extrair dados de forma prática
const { data: { usuario: { nome, email }, token } } = response;
console.log(nome);   // "Ana"
console.log(token);  // "abc123xyz"
```

### Formulário com Valores Padrão

```javascript
const formulario = {
  nome: "Bruno",
  email: "bruno@email.com"
  // telefone não foi preenchido
};

const { nome, email, telefone = "não preenchido" } = formulario;
console.log(telefone);  // "não preenchido"
```

### Extrair de Array de Objetos

```javascript
const usuarios = [
  { id: 1, nome: "Carlos" },
  { id: 2, nome: "Diana" }
];

const [{ nome: nomeFirst }, { nome: nameSecond }] = usuarios;
console.log(nomeFirst);   // "Carlos"
console.log(nameSecond);  // "Diana"
```

## Comparação com Acesso Normal

| Situação | Sem Desestruturação | Com Desestruturação |
|----------|-------------------|-------------------|
| Extrair 1 propriedade | `const a = obj.a;` | `const { a } = obj;` |
| Extrair 2 propriedades | `const a = obj.a; const b = obj.b;` | `const { a, b } = obj;` |
| Propriedade com padrão | `const a = obj.a \|\| 'padrão';` | `const { a = 'padrão' } = obj;` |
| Renomear | `const x = obj.a;` | `const { a: x } = obj;` |
| Aninhada | `const c = obj.a.b.c;` | `const { a: { b: { c } } } = obj;` |

## Dicas Práticas

✏️ **Use desestruturação** para parâmetros de função - torna a intenção clara  
✏️ **Use valores padrão** para dados opcionais  
✏️ **Use renomeação** se a propriedade tiver nome confuso  
✏️ **Use rest operator** quando precisar do resto dos dados  
✏️ **Combine com objetos** para criar variações sem modificar o original  

## Casos de Uso no Dia a Dia

### E-commerce
```javascript
// Processar pedido
const pedido = { id: 101, cliente: "Ana", itens: [...], total: 500 };
const { id, cliente, total } = pedido;
```

### Autenticação
```javascript
// Response do login
const { token, usuario: { id, email, nome } } = loginResponse;
```

### Processamento de Dados
```javascript
// Arquivo CSV ou JSON
const registros = [
  { nome: "Bruno", salario: 5000, departamento: "TI" }
];

registros.forEach(({ nome, salario }) => {
  console.log(`${nome} ganha R$ ${salario}`);
});
```

## Referências

📖 [MDN - Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)  
📖 [JavaScript.info - Destructuring](https://javascript.info/destructuring-assignment)  
