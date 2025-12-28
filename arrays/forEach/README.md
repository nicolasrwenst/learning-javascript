# Array.forEach()

## O que é forEach()?

O método `forEach()` **executa uma função para cada elemento** do array, sem retornar um novo array. É útil para efeitos colaterais.

## Características

✅ **Vantagens:**
- Executa ações para cada elemento
- Sintaxe clara e direta
- Perfeito para iteração simples
- Suporta break/continue (com cuidado)

❌ **Limitações:**
- Sempre retorna `undefined`
- Não pode parar no meio (sem exceção)
- Não modifica o array original

## Sintaxe

```javascript
array.forEach((elemento, indice, array) => {
  // Código para executar
});
```

## Parâmetros

- `elemento` - Valor atual
- `indice` - Posição do elemento (opcional)
- `array` - Array completo (opcional)

## Exemplos Práticos do Dia a Dia

### 1. Imprimir Elementos
```javascript
const nomes = ["Ana", "Bruno", "Carlos"];

nomes.forEach(nome => {
  console.log(nome);
});

// Output:
// Ana
// Bruno
// Carlos
```

### 2. Executar Ação para Cada Item
```javascript
const pedidos = [
  { id: 101, cliente: "Ana", valor: 500 },
  { id: 102, cliente: "Bruno", valor: 750 }
];

pedidos.forEach(pedido => {
  console.log(`Processando pedido ${pedido.id} de ${pedido.cliente}`);
  // Aqui você poderia enviar email, salvar BD, etc
});
```

### 3. Atualizar Elementos (Cuidado!)
```javascript
const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 50 }
];

// ✅ Modificar propriedades
produtos.forEach(p => {
  p.preco = p.preco * 0.9;  // 10% de desconto
});

console.log(produtos);  // Preços alterados
```

### 4. Processar Dados de Formulário
```javascript
const campos = [
  { id: "nome", valor: "Ana Silva" },
  { id: "email", valor: "ana@email.com" },
  { id: "idade", valor: "25" }
];

campos.forEach(campo => {
  console.log(`${campo.id}: ${campo.valor}`);
});
```

### 5. Iterar com Índice
```javascript
const frutas = ["maçã", "banana", "laranja"];

frutas.forEach((fruta, indice) => {
  console.log(`${indice + 1}. ${fruta}`);
});

// Output:
// 1. maçã
// 2. banana
// 3. laranja
```

### 6. Adicionar Eventos
```javascript
// Simulando DOM
const botoes = [
  { id: "btn1", label: "Salvar" },
  { id: "btn2", label: "Cancelar" },
  { id: "btn3", label: "Deletar" }
];

botoes.forEach(botao => {
  console.log(`Adicionando click ao ${botao.id}`);
  // document.getElementById(botao.id).addEventListener('click', function() {...})
});
```

### 7. Enviar Dados para API (Fictício)
```javascript
const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carlos" }
];

usuarios.forEach(usuario => {
  console.log(`Enviando dados de ${usuario.nome} para API`);
  // fetch('/api/usuarios', { method: 'POST', body: JSON.stringify(usuario) })
});
```

### 8. Construir Lista HTML
```javascript
const itens = ["Item 1", "Item 2", "Item 3"];
let html = "<ul>";

itens.forEach(item => {
  html += `<li>${item}</li>`;
});

html += "</ul>";
console.log(html);
```

### 9. Acumular Valores (use reduce ao invés)
```javascript
const precos = [100, 200, 300];
let total = 0;

// Evite isso com forEach, use reduce
precos.forEach(preco => {
  total += preco;
});

console.log(total);  // 600
```

### 10. Executar Função Customizada
```javascript
function processar(valor) {
  return valor * 2;
}

const numeros = [1, 2, 3];

numeros.forEach(num => {
  console.log(processar(num));
});
```

## forEach vs Alternativas

### forEach vs for...of
```javascript
// forEach
[1, 2, 3].forEach(n => console.log(n));

// for...of (pode usar break)
for (const n of [1, 2, 3]) {
  console.log(n);
  // if (n === 2) break;  // Funciona
}

// forEach não pode quebrar facilmente
```

### forEach vs map
```javascript
const numeros = [1, 2, 3];

// forEach - não retorna nada
numeros.forEach(n => console.log(n * 2));

// map - retorna novo array
const dobrados = numeros.map(n => n * 2);
```

## Casos Comuns

### 1. Validar e Alertar
```javascript
const emails = ["ana@email", "bruno@email.com", "carlos@"];

emails.forEach((email, i) => {
  const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valido) {
    console.log(`Email ${i}: ${email} é inválido`);
  }
});
```

### 2. Registrar Alterações
```javascript
const atualizacoes = [
  { campo: "nome", antigo: "Ana", novo: "Ana Silva" },
  { campo: "email", antigo: "ana@email.com", novo: "ana.silva@email.com" }
];

atualizacoes.forEach(att => {
  console.log(`${att.campo}: "${att.antigo}" → "${att.novo}"`);
});
```

## ⚠️ Erros Comuns

### Tentar Usar break
```javascript
// ❌ Não funciona
[1, 2, 3, 4, 5].forEach(n => {
  if (n === 3) break;  // SyntaxError!
  console.log(n);
});

// ✅ Use for...of ao invés
for (const n of [1, 2, 3, 4, 5]) {
  if (n === 3) break;
  console.log(n);
}
```

### forEach com Async
```javascript
// ❌ Problema com async
const usuarios = [1, 2, 3];
usuarios.forEach(async (id) => {
  await fetch(`/api/usuarios/${id}`);  // Executa em paralelo!
});

// ✅ Use for...of
for (const id of usuarios) {
  await fetch(`/api/usuarios/${id}`);  // Executa sequencialmente
}
```

## Dicas de Boas Práticas

1. **Use forEach para efeitos colaterais** (console.log, API calls)
2. **Use map() quando criar novo array**
3. **Use for...of para loops que podem quebrar**
4. **Prefira métodos funcionais quando possível**
5. **Cuidado com async/await no forEach**

## Quando Usar forEach

✅ **USE:**
- Processar cada elemento
- Executar ações (logging, API calls)
- Iteração simples
- Atualizar propriedades de objetos

❌ **EVITE:**
- Quando precisa do retorno (use map)
- Quando precisa quebrar o loop (use for)
- Quando precisa de async sequencial (use for...of)
- Transformações complexas (use map/filter/reduce)
