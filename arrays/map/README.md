# Array.map()

## O que é map()?

O método `map()` **transforma cada elemento** de um array, aplicando uma função e retornando um **novo array** com os resultados.

## Características

✅ **Vantagens:**
- Transforma elementos sem alterar o original
- Sintaxe limpa e legível
- Perfeito para converter dados
- Retorna novo array com mesmo tamanho

❌ **Limitações:**
- Sempre itera TODOS os elementos
- Sempre retorna array do mesmo tamanho
- Não pode parar no meio

## Sintaxe

```javascript
const novo = array.map((elemento, indice, array) => {
  // Transformação
  return resultado;
});
```

## Parâmetros da Função

- `elemento` - Valor atual
- `indice` - Posição do elemento (opcional)
- `array` - O array completo (opcional)

## Exemplos Práticos do Dia a Dia

### 1. Converter Preços para Reais
```javascript
const precos = [100, 250, 1500];

const emReais = precos.map(preco => 
  preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
);

console.log(emReais);
// ["R$ 100,00", "R$ 250,00", "R$ 1.500,00"]
```

### 2. Extrair Nomes de Objetos
```javascript
const usuarios = [
  { id: 1, nome: "Ana", email: "ana@email.com" },
  { id: 2, nome: "Bruno", email: "bruno@email.com" }
];

const nomes = usuarios.map(u => u.nome);
console.log(nomes);  // ["Ana", "Bruno"]
```

### 3. Dobrar Números
```javascript
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);

console.log(dobrados);  // [2, 4, 6, 8, 10]
```

### 4. Calcular Desconto
```javascript
const precos = [100, 200, 300];

const comDesconto = precos.map(p => p * 0.9);  // 10% de desconto
console.log(comDesconto);  // [90, 180, 270]
```

### 5. Formatar Datas
```javascript
const datas = [
  new Date('2025-01-15'),
  new Date('2025-02-20'),
  new Date('2025-03-10')
];

const formatadas = datas.map(d => d.toLocaleDateString('pt-BR'));
console.log(formatadas);
// ["15/01/2025", "20/02/2025", "10/03/2025"]
```

### 6. Criar HTML de Lista
```javascript
const frutas = ["maçã", "banana", "laranja"];

const html = frutas.map(f => `<li>${f}</li>`);
console.log(html.join(''));
// <li>maçã</li><li>banana</li><li>laranja</li>
```

### 7. Transformar Strings em Números
```javascript
const strings = ["10", "20", "30", "40"];

const numeros = strings.map(Number);
// Ou: strings.map(s => parseInt(s))
// Ou: strings.map(s => +s)

console.log(numeros);  // [10, 20, 30, 40]
```

### 8. Obter Apenas IDs
```javascript
const pedidos = [
  { id: 101, cliente: "Ana", valor: 500 },
  { id: 102, cliente: "Bruno", valor: 750 },
  { id: 103, cliente: "Carlos", valor: 300 }
];

const ids = pedidos.map(p => p.id);
console.log(ids);  // [101, 102, 103]
```

### 9. Duplicar Objetos com Alterações
```javascript
const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 50 }
];

const comDesconto = produtos.map(p => ({
  ...p,
  precoComDesconto: p.preco * 0.85
}));

console.log(comDesconto);
// [
//   { nome: "Notebook", preco: 2500, precoComDesconto: 2125 },
//   { nome: "Mouse", preco: 50, precoComDesconto: 42.5 }
// ]
```

### 10. Capitalizar Nomes
```javascript
const nomes = ["ana", "bruno", "carlos"];

const capitalizados = nomes.map(n => 
  n.charAt(0).toUpperCase() + n.slice(1)
);

console.log(capitalizados);
// ["Ana", "Bruno", "Carlos"]
```

## Map com Índice

```javascript
const frutas = ["maçã", "banana", "laranja"];

const com Indice = frutas.map((f, i) => `${i + 1}. ${f}`);
console.log(com Indice);
// ["1. maçã", "2. banana", "3. laranja"]
```

## Map Encadeado (Chaining)

```javascript
const numeros = [1, 2, 3, 4, 5];

const resultado = numeros
  .map(n => n * 2)        // [2, 4, 6, 8, 10]
  .map(n => n + 1)        // [3, 5, 7, 9, 11]
  .map(n => `R$ ${n}`);   // ["R$ 3", "R$ 5", ...]

console.log(resultado);
```

## Map com Arrays Aninhados

```javascript
const matriz = [[1, 2], [3, 4], [5, 6]];

const somados = matriz.map(linha => 
  linha.reduce((a, b) => a + b, 0)
);

console.log(somados);  // [3, 7, 11]
```

## Diferença: map() vs forEach()

```javascript
// map() - retorna novo array
const dobrados = [1, 2, 3].map(n => n * 2);  // [2, 4, 6]

// forEach() - executa função, retorna undefined
[1, 2, 3].forEach(n => console.log(n * 2));  // não retorna nada
```

## Dicas de Boas Práticas

1. **Use map() quando precisa transformar dados**
2. **Prefira ao foreach() quando criar novo array**
3. **Encadeie com filter() e reduce() conforme necessário**
4. **Mantenha a função simples e pura**
5. **Use arrow functions para sintaxe concisa**

## Casos de Uso Comuns

| Situação | Exemplo |
|----------|---------|
| Converter formatos | Preços, datas, strings |
| Extrair propriedades | IDs, nomes de objetos |
| Aplicar operações | Dobrar, somar, calcular |
| Transformar tipos | String → Number |
| Preparar dados | Para API, para exibição |
