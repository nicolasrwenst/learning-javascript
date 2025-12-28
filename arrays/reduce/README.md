# Array.reduce()

## O que é reduce()?

O método `reduce()` **acumula valores** do array em um único resultado, aplicando uma função a cada elemento.

## Características

✅ **Vantagens:**
- Acumula/combina valores
- Muito versátil (soma, contagem, agrupamento)
- Perfeito para cálculos complexos
- Retorna um único valor (ou objeto)

❌ **Limitações:**
- Sintaxe mais complexa no início
- Requer entendimento de acumulador
- Pode ser lento em arrays gigantes

## Sintaxe

```javascript
const resultado = array.reduce((acumulador, elemento, indice, array) => {
  // Lógica de combinação
  return novoAcumulador;
}, valorInicial);
```

## Parâmetros

- `acumulador` - Valor acumulado até agora
- `elemento` - Elemento atual
- `indice` - Posição (opcional)
- `array` - Array completo (opcional)
- `valorInicial` - Valor inicial do acumulador

## Exemplos Práticos do Dia a Dia

### 1. Somar Números
```javascript
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acc, n) => acc + n, 0);

console.log(soma);  // 15
```

### 2. Calcular Total de Compra
```javascript
const carrinho = [
  { produto: "Notebook", preco: 2500, qtd: 1 },
  { produto: "Mouse", preco: 50, qtd: 2 },
  { produto: "Teclado", preco: 150, qtd: 1 }
];

const total = carrinho.reduce((acc, item) => {
  return acc + (item.preco * item.qtd);
}, 0);

console.log(total);  // 2850
```

### 3. Contar Ocorrências
```javascript
const frutas = ["maçã", "banana", "maçã", "laranja", "maçã"];

const contagem = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});

console.log(contagem);
// { maçã: 3, banana: 1, laranja: 1 }
```

### 4. Agrupar por Propriedade
```javascript
const usuarios = [
  { nome: "Ana", cidade: "SP", ativo: true },
  { nome: "Bruno", cidade: "RJ", ativo: false },
  { nome: "Carlos", cidade: "SP", ativo: true }
];

const porCidade = usuarios.reduce((acc, u) => {
  const cidade = u.cidade;
  acc[cidade] = acc[cidade] || [];
  acc[cidade].push(u.nome);
  return acc;
}, {});

console.log(porCidade);
// { SP: ["Ana", "Carlos"], RJ: ["Bruno"] }
```

### 5. Encontrar Máximo e Mínimo
```javascript
const precos = [100, 250, 50, 750, 300];

const { max, min } = precos.reduce((acc, p) => ({
  max: Math.max(acc.max, p),
  min: Math.min(acc.min, p)
}), { max: -Infinity, min: Infinity });

console.log(max, min);  // 750, 50
```

### 6. Calcular Média
```javascript
const notas = [7, 8, 9, 6, 8.5];

const media = notas.reduce((acc, n) => acc + n) / notas.length;
console.log(media);  // 7.7
```

### 7. Concatenar Strings
```javascript
const palavras = ["JavaScript", "é", "incrível"];

const frase = palavras.reduce((acc, p) => acc + " " + p);
console.log(frase);  // "JavaScript é incrível"
```

### 8. Mesclar Arrays
```javascript
const grupos = [[1, 2], [3, 4], [5, 6]];

const mesclado = grupos.reduce((acc, g) => acc.concat(g), []);
console.log(mesclado);  // [1, 2, 3, 4, 5, 6]
```

### 9. Filtrar e Somar Simultaneamente
```javascript
const vendas = [
  { produto: "A", valor: 100 },
  { produto: "B", valor: 50 },
  { produto: "C", valor: 200 }
];

const totalAlto = vendas.reduce((acc, v) => {
  return v.valor > 75 ? acc + v.valor : acc;
}, 0);

console.log(totalAlto);  // 300
```

### 10. Criar Objeto a Partir de Array
```javascript
const dados = [["nome", "Ana"], ["idade", 25], ["ativo", true]];

const objeto = dados.reduce((acc, [chave, valor]) => {
  acc[chave] = valor;
  return acc;
}, {});

console.log(objeto);
// { nome: "Ana", idade: 25, ativo: true }
```

## Reduce Avançado

### Transformar Array em Objeto
```javascript
const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" }
];

const mapa = usuarios.reduce((acc, u) => {
  acc[u.id] = u.nome;
  return acc;
}, {});

console.log(mapa);  // { 1: "Ana", 2: "Bruno" }
```

### Reduce com Múltiplas Acumulações
```javascript
const vendas = [
  { mes: "Jan", valor: 5000 },
  { mes: "Fev", valor: 3000 },
  { mes: "Mar", valor: 7000 }
];

const stats = vendas.reduce((acc, v) => ({
  total: acc.total + v.valor,
  media: (acc.total + v.valor) / (acc.count + 1),
  count: acc.count + 1
}), { total: 0, media: 0, count: 0 });
```

## Dicas de Boas Práticas

1. **Sempre forneça valorInicial** para evitar erros
2. **Use nomes descritivos** para o acumulador
3. **Mantenha a lógica simples**
4. **Considere usar map/filter antes do reduce** se possível
5. **Teste com arrays vazios**

## Reduce vs Alternativas

```javascript
const numeros = [1, 2, 3, 4, 5];

// reduce()
const soma1 = numeros.reduce((a, b) => a + b, 0);

// forEach()
let soma2 = 0;
numeros.forEach(n => soma2 += n);

// for...of
let soma3 = 0;
for (const n of numeros) soma3 += n;

// Todos resultam em 15, mas reduce() é mais funcional
```

## Casos de Uso Frequentes

| Situação | Exemplo |
|----------|---------|
| Somar/acumular | Total de compra, soma de notas |
| Contar | Ocorrências, frequência |
| Agrupar | Por categoria, por cidade |
| Encontrar extremos | Máximo, mínimo |
| Transformar formato | Array para objeto |
| Combinar | Mesclar arrays, concatenar |
