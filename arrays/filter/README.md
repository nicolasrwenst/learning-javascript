# Array.filter()

## O que é filter()?

O método `filter()` **seleciona elementos** que atendem a uma condição, retornando um **novo array** apenas com os elementos que passaram no teste.

## Características

✅ **Vantagens:**
- Seleciona elementos conforme critério
- Não altera o array original
- Sintaxe limpa e intuitiva
- Perfeito para buscas e filtragens

❌ **Limitações:**
- Sempre itera TODOS os elementos
- Retorna array com tamanho variável
- Não funciona para estruturas mais complexas

## Sintaxe

```javascript
const filtrado = array.filter((elemento, indice, array) => {
  // Retorna true se deve incluir
  return condicao;
});
```

## Parâmetros

- `elemento` - Valor atual
- `indice` - Posição (opcional)
- `array` - Array completo (opcional)

## Exemplos Práticos do Dia a Dia

### 1. Filtrar Números Pares
```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const pares = numeros.filter(n => n % 2 === 0);

console.log(pares);  // [2, 4, 6, 8]
```

### 2. Filtrar Usuários Ativos
```javascript
const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Bruno", ativo: false },
  { nome: "Carlos", ativo: true }
];

const ativos = usuarios.filter(u => u.ativo);
console.log(ativos);  // [{ nome: "Ana", ... }, { nome: "Carlos", ... }]
```

### 3. Filtrar Produtos por Preço
```javascript
const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 800 }
];

const caros = produtos.filter(p => p.preco > 100);
console.log(caros);  // Notebook e Monitor
```

### 4. Filtrar Tarefas Incompletas
```javascript
const tarefas = [
  { titulo: "Estudar", completa: false },
  { titulo: "Exercitar", completa: true },
  { titulo: "Ler", completa: false }
];

const pendentes = tarefas.filter(t => !t.completa);
```

### 5. Filtrar Strings que Contêm Texto
```javascript
const nomes = ["Ana Silva", "Bruno Santos", "Ana Oliveira", "Carlos"];

const comAna = nomes.filter(n => n.includes("Ana"));
console.log(comAna);  // ["Ana Silva", "Ana Oliveira"]
```

### 6. Filtrar por Idade Mínima
```javascript
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 17 },
  { nome: "Carlos", idade: 30 }
];

const maioresDeIdade = usuarios.filter(u => u.idade >= 18);
```

### 7. Remover Valores Vazios/Nulos
```javascript
const dados = [1, null, 2, undefined, 3, "", 4];

const validos = dados.filter(d => d);  // Remove falsy values
console.log(validos);  // [1, 2, 3, 4]
```

### 8. Filtrar Produtos em Estoque
```javascript
const estoque = [
  { produto: "Notebook", qtd: 0 },
  { produto: "Mouse", qtd: 15 },
  { produto: "Teclado", qtd: 8 }
];

const disponivel = estoque.filter(e => e.qtd > 0);
```

### 9. Filtrar Pedidos por Data
```javascript
const pedidos = [
  { id: 1, data: new Date('2025-01-15') },
  { id: 2, data: new Date('2024-12-10') },
  { id: 3, data: new Date('2025-01-20') }
];

const de Janeiro = pedidos.filter(p => p.data.getFullYear() === 2025);
```

### 10. Filtrar com Múltiplas Condições
```javascript
const usuarios = [
  { nome: "Ana", ativo: true, premium: true },
  { nome: "Bruno", ativo: false, premium: true },
  { nome: "Carlos", ativo: true, premium: false }
];

const usuariosEspeciais = usuarios.filter(u => u.ativo && u.premium);
```

## Filter Encadeado

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const resultado = numeros
  .filter(n => n > 3)      // [4, 5, 6, 7, 8]
  .filter(n => n % 2 === 0); // [4, 6, 8]

console.log(resultado);
```

## Filter + Map (Combinação Poderosa)

```javascript
const pedidos = [
  { id: 1, valor: 500, status: "completo" },
  { id: 2, valor: 0, status: "cancelado" },
  { id: 3, valor: 750, status: "completo" }
];

const totaisCompletos = pedidos
  .filter(p => p.status === "completo")
  .map(p => p.valor);

console.log(totaisCompletos);  // [500, 750]
```

## Filter com Índice

```javascript
const nomes = ["Ana", "Bruno", "Carlos", "Diana"];

const novosPares = nomes.filter((_, i) => i % 2 === 0);
console.log(novosPares);  // ["Ana", "Carlos"]
```

## Casos Comuns

### Buscar por Múltiplos Critérios
```javascript
function filtrarUsuarios(usuarios, { ativo, idade, premium }) {
  return usuarios.filter(u =>
    (!ativo || u.ativo) &&
    (!idade || u.idade >= idade) &&
    (!premium || u.premium)
  );
}
```

### Filtrar e Contar
```javascript
const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Bruno", ativo: false },
  { nome: "Carlos", ativo: true }
];

const totalAtivos = usuarios.filter(u => u.ativo).length;
```

### Encontrar Duplicatas
```javascript
const numeros = [1, 2, 2, 3, 3, 3, 4];

const duplicatas = numeros.filter((n, i) => numeros.indexOf(n) !== i);
console.log(duplicatas);  // [2, 3, 3]
```

## Dicas de Boas Práticas

1. **Use filter() para selecionar dados**
2. **Combine com map() para transformar**
3. **Mantenha a condição simples e clara**
4. **Use variáveis descritivas**
5. **Considere performance com grandes arrays**

## Comparação com Alternativas

```javascript
const numeros = [1, 2, 3, 4, 5];

// filter()
const pares1 = numeros.filter(n => n % 2 === 0);

// forEach()
const pares2 = [];
numeros.forEach(n => {
  if (n % 2 === 0) pares2.push(n);
});

// for...of
const pares3 = [];
for (const n of numeros) {
  if (n % 2 === 0) pares3.push(n);
}

// Todos resultam em [2, 4], mas filter() é mais limpo
```

## Casos de Uso Frequentes

| Situação | Exemplo |
|----------|---------|
| Selecionar itens | Usuários ativos, produtos em estoque |
| Buscar | Por ID, por nome, por categoria |
| Remover | Valores vazios, itens inválidos |
| Segmentar | Por categoria, por faixa de preço |
| Validar | Dados que atendem critério |
