# Arrays em JavaScript

Bem-vindo ao módulo completo sobre **Arrays em JavaScript**! Aqui você aprenderá tudo sobre criação, manipulação e transformação de arrays.

## 📚 Tópicos Cobertos

### 1. [Criação de Arrays](./criacao-arrays)
Aprenda as diferentes formas de criar e inicializar arrays.
- ✅ Array literal `[]`
- ✅ Constructor `new Array()`
- ✅ Spread operator `...`
- ✅ Array.from(), Array.of()
- 📄 [README](./criacao-arrays/README.md) | 💻 [Exemplos](./criacao-arrays/example.js)

### 2. [Array.map()](./map)
Transforme cada elemento do array em algo novo.
- ✅ Transformar dados
- ✅ Extrair propriedades
- ✅ Converter formatos
- ✅ Encadeamento
- 📄 [README](./map/README.md) | 💻 [Exemplos](./map/example.js)

### 3. [Array.filter()](./filter)
Selecione apenas elementos que atendem a uma condição.
- ✅ Filtrar por critério
- ✅ Remover inválidos
- ✅ Múltiplas condições
- ✅ Buscar e segmentar
- 📄 [README](./filter/README.md) | 💻 [Exemplos](./filter/example.js)

### 4. [Array.reduce()](./reduce)
Acumule valores do array em um único resultado.
- ✅ Somar/contar
- ✅ Agrupar dados
- ✅ Encontrar máximos/mínimos
- ✅ Transformar estrutura
- 📄 [README](./reduce/README.md) | 💻 [Exemplos](./reduce/example.js)

### 5. [Array.forEach()](./forEach)
Execute uma função para cada elemento do array.
- ✅ Iterar e processar
- ✅ Efeitos colaterais
- ✅ Construir HTML
- ✅ Executar ações
- 📄 [README](./forEach/README.md) | 💻 [Exemplos](./forEach/example.js)

---

## 🎯 Guia de Aprendizado

### Iniciante
1. Comece com [Criação de Arrays](./criacao-arrays)
2. Aprenda [Array.forEach()](./forEach) para iteração simples
3. Explore [Array.map()](./map) para transformação

### Intermediário
4. Domine [Array.filter()](./filter) para seleção
5. Explore casos de uso de cada método
6. Combine métodos (map + filter + reduce)

### Avançado
7. Domine [Array.reduce()](./reduce) para operações complexas
8. Implemente padrões funcionais
9. Otimize performance

---

## 💡 Comparação Rápida dos Métodos

| Método | Retorna | Para Quê | Exemplo |
|--------|---------|----------|---------|
| **map()** | Novo array | Transformar | Dobrar números |
| **filter()** | Novo array | Selecionar | Usuários ativos |
| **reduce()** | Um valor | Acumular | Somar preços |
| **forEach()** | undefined | Executar | Imprimir itens |

## 🚀 Exemplos Rápidos

### map() - Transformar
```javascript
const numeros = [1, 2, 3];
const dobrados = numeros.map(n => n * 2);
// [2, 4, 6]
```

### filter() - Selecionar
```javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(n => n % 2 === 0);
// [2, 4]
```

### reduce() - Acumular
```javascript
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acc, n) => acc + n, 0);
// 10
```

### forEach() - Executar
```javascript
const nomes = ["Ana", "Bruno"];
nomes.forEach(nome => console.log(nome));
// Ana
// Bruno
```

## 🔗 Encadeamento (Chaining)

Uma das partes mais poderosas do JavaScript é encadear múltiplos métodos:

```javascript
const usuarios = [
  { nome: "Ana", idade: 25, ativo: true },
  { nome: "Bruno", idade: 17, ativo: false },
  { nome: "Carlos", idade: 30, ativo: true }
];

const resultado = usuarios
  .filter(u => u.ativo)              // Apenas ativos
  .map(u => u.nome.toUpperCase())    // Transformar nomes
  .sort();                           // Ordenar

console.log(resultado);  // ["ANA", "CARLOS"]
```

## ✅ Melhores Práticas

### 1. Escolha o Método Certo
```javascript
// ✅ USE map() para transformar
const nomes = usuarios.map(u => u.nome);

// ❌ NÃO use forEach() para criar novo array
let nomes = [];
usuarios.forEach(u => nomes.push(u.nome));
```

### 2. Encadeie com Cuidado
```javascript
// ✅ BOM - Cria 3 arrays intermediários mas é legível
const resultado = array
  .filter(x => x > 5)
  .map(x => x * 2)
  .filter(x => x < 20);

// Se performance é crítica, use reduce() ou for loop
```

### 3. Use Spread com Arrays Grandes
```javascript
// ✅ Clonar array
const copia = [...original];

// ❌ Menos eficiente para arrays gigantes
const copia = original.map(x => x);
```

## 📊 Performance Considerations

Para arrays com +10.000 itens:
- **forEach()** - Rápido para efeitos colaterais
- **map()** - Bom para transformação
- **filter()** - Pode ser lento, considere reduzir antes
- **reduce()** - Eficiente para acumulação
- **for loop** - Mais rápido para operações intensivas

## 🎓 Próximos Passos

Após dominar arrays, estude:
- Objetos e Desestruturação
- Métodos adicionais (find, findIndex, includes, etc)
- Performance e Big O notation
- Programação Funcional

---

## 📚 Referências Úteis

- [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- [JavaScript.info - Arrays](https://javascript.info/array)

---

**Bom aprendizado! 🎓**
