# Funções em JavaScript

Bem-vindo ao módulo completo de **Funções em JavaScript**! Aqui você aprenderá tudo sobre como criar, usar e dominar funções.

## 📚 Tópicos Cobertos

### 1. [Declaração de Funções](./declaracao-funcoes)
Aprenda a forma tradicional de declarar funções em JavaScript.
- ✅ Sintaxe básica
- ✅ Hoisting
- ✅ Exemplos práticos do dia a dia
- 📄 [README](./declaracao-funcoes/README.md) | 💻 [Exemplos](./declaracao-funcoes/example.js)

### 2. [Funções com Parâmetros e Retorno](./parametros-retorno)
Domine como passar dados para funções e obter resultados.
- ✅ Parâmetros obrigatórios e opcionais
- ✅ Rest parameters (`...`)
- ✅ Diferentes tipos de retorno
- 📄 [README](./parametros-retorno/README.md) | 💻 [Exemplos](./parametros-retorno/example.js)

### 3. [Arrow Functions](./arrow-functions)
A forma moderna e concisa de escrever funções.
- ✅ Sintaxe `() => {}`
- ✅ Retorno implícito
- ✅ Uso em callbacks (map, filter, reduce)
- 📄 [README](./arrow-functions/README.md) | 💻 [Exemplos](./arrow-functions/example.js)

### 4. [Funções Anônimas](./funcoes-anonimas)
Funções sem nome, perfeitas para callbacks e padrões avançados.
- ✅ Expressões de função
- ✅ IIFE (Immediately Invoked Function Expression)
- ✅ Closures
- ✅ Padrão Module
- 📄 [README](./funcoes-anonimas/README.md) | 💻 [Exemplos](./funcoes-anonimas/example.js)

### 5. [Escopo de Funções](./escopo-funcoes)
Entenda como JavaScript gerencia variáveis e acessibilidade.
- ✅ Escopo global, local, de bloco
- ✅ Hoisting
- ✅ Closures
- ✅ Encapsulamento de dados
- 📄 [README](./escopo-funcoes/README.md) | 💻 [Exemplos](./escopo-funcoes/example.js)

---

## 🎯 Guia de Aprendizado

### Iniciante
1. Comece com [Declaração de Funções](./declaracao-funcoes)
2. Depois aprenda [Parâmetros e Retorno](./parametros-retorno)
3. Explore [Escopo de Funções](./escopo-funcoes)

### Intermediário
4. Domine [Arrow Functions](./arrow-functions)
5. Compreenda [Funções Anônimas](./funcoes-anonimas)
6. Aplique closures e padrões avançados

### Avançado
- Combine todos os conceitos
- Implemente padrões como Module Pattern
- Use Factory e Closure para encapsulamento

---

## 💡 Dicas Rápidas

### Quando Usar Cada Uma

| Tipo | Quando Usar | Exemplo |
|------|------------|---------|
| **Declaração** | Funções reutilizáveis | Helpers, utilitários |
| **Arrow** | Callbacks simples | `.map()`, `.filter()` |
| **Anônima** | Callbacks complexos, IIFE | Event listeners, módulos |
| **Closure** | Dados privados | Factory, módulos |

### Boas Práticas

✅ **USE:**
- `let` e `const` em lugar de `var`
- Arrow functions para callbacks
- Nomes descritivos
- Funções pequenas (responsabilidade única)

❌ **EVITE:**
- Variáveis globais
- Funções muito longas
- Shadowing desnecessário
- Callbacks profundos (use async/await)

---

## 🚀 Exemplos Rápidos

### Básico
```javascript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("João")); // "Olá, João!"
```

### Arrow Function
```javascript
const quadrado = x => x * x;
console.log(quadrado(5)); // 25
```

### Closure
```javascript
function criar Contador() {
  let count = 0;
  return () => ++count;
}

const contador = criar Contador();
console.log(contador()); // 1
console.log(contador()); // 2
```

### Array Methods
```javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(n => n % 2 === 0);
const dobrados = pares.map(n => n * 2);
const soma = dobrados.reduce((a, b) => a + b, 0);

console.log(soma); // 12
```

---

## 📝 Como Usar Este Módulo

1. **Leia o README** de cada tópico para entender os conceitos
2. **Execute os exemplos** em `example.js` no seu editor ou console
3. **Modifique os exemplos** para praticar
4. **Crie seus próprios exemplos** baseado no que aprendeu
5. **Combine conceitos** para resolver problemas complexos

---

## 🔗 Próximos Passos

Após dominar funções, você pode estudar:
- Async/Await e Promises
- Decoradores e Higher Order Functions
- Functional Programming
- Programação Orientada a Objetos com Classes

---

## 📚 Referências Úteis

- [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [ES6 Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

**Bom aprendizado! 🎓**
