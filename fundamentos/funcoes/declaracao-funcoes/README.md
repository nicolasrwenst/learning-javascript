# Declaração de Funções

## O que é uma declaração de função?

Uma **declaração de função** (function declaration) é a forma tradicional de definir uma função em JavaScript. A função é registrada no escopo antes do código ser executado (devido a **hoisting**).

## Características

✅ **Vantagens:**
- Pode ser chamada **antes** de ser declarada (hoisting)
- Código mais legível e explícito
- Nomes descritivos deixam claro o que a função faz
- Ideal para funções reutilizáveis

❌ **Quando evitar:**
- Em loops ou condições (use expressões de função)
- Quando precisa de escopo local restrito

## Sintaxe

```javascript
function nomeDaFuncao(parametros) {
  // corpo da função
  return resultado;
}
```

## Exemplos Práticos do Dia a Dia

### 1. Calcular imposto de um produto
```javascript
function calcularImposto(preco) {
  return preco * 0.15; // 15% de imposto
}

console.log(calcularImposto(100)); // 15
```

### 2. Validar email
```javascript
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(validarEmail("user@example.com")); // true
console.log(validarEmail("email-invalido")); // false
```

### 3. Formatar moeda brasileira
```javascript
function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  });
}

console.log(formatarMoeda(1299.90)); // R$ 1.299,90
```

### 4. Converter temperatura
```javascript
function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusParaFahrenheit(0));   // 32
console.log(celsiusParaFahrenheit(25));  // 77
```

## Hoisting (Comportamento Importante!)

As declarações de função são **hoisted** (elevadas) para o topo do escopo. Você pode chamar a função **antes** de declará-la:

```javascript
// Isso funciona!
console.log(saudacao("João")); // "Olá, João!"

function saudacao(nome) {
  return `Olá, ${nome}!`;
}
```

### ⚠️ Cuidado com variáveis!

```javascript
// Isso NÃO funciona (hoisting parcial)
console.log(calcular(5)); // undefined ❌

var calcular = function(x) {
  return x * 2;
};
```

## Dicas de Boas Práticas

1. **Use nomes descritivos**: `calcularPrecoFinal()` é melhor que `calc()`
2. **Mantenha funções pequenas**: Responsabilidade única é melhor
3. **Documente parâmetros**: Use comentários para esclarecer entradas/saídas
4. **Prefira parâmetros a variáveis globais**

## Quando Usar

- ✅ Funções reutilizáveis
- ✅ Código principal da aplicação
- ✅ Funções helpers e utilitárias
- ❌ Callbacks simples (use arrow functions)
- ❌ Quando precisa evitar poluição de escopo global
