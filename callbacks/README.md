# Callbacks em JavaScript

## O que é um Callback?

Um **callback** é uma função que é passada como argumento para outra função e que será executada em algum momento posterior. É a forma tradicional do JavaScript lidar com código assincrónico antes de Promises e async/await.

```javascript
// Função que recebe um callback
function processar(dados, callback) {
  console.log("Processando:", dados);
  callback(dados);  // Executa o callback
}

// Passando uma função como callback
processar("dados importantes", function(resultado) {
  console.log("Resultado:", resultado);
});
```

## Por que Usar Callbacks?

✅ **Simples** - Conceito direto  
✅ **Suportado** - Funciona em qualquer versão do JavaScript  
✅ **Útil para eventos** - Muito usado em DOM e Node.js  
✅ **Sem dependências** - Não precisa de bibliotecas  

⚠️ **Problema: Callback Hell** - Aninhamento excessivo fica confuso

## Sintaxe Básica

### Função que recebe callback
```javascript
function minhaFuncao(callback) {
  console.log("Antes do callback");
  callback();
  console.log("Depois do callback");
}
```

### Passando o callback
```javascript
// Opção 1: Função nomeada
function meuCallback() {
  console.log("Callback executado!");
}
minhaFuncao(meuCallback);

// Opção 2: Função anônima
minhaFuncao(function() {
  console.log("Callback executado!");
});

// Opção 3: Arrow function
minhaFuncao(() => {
  console.log("Callback executado!");
});
```

## Casos de Uso Comuns

### 1. Processamento de Dados
```javascript
function processar(dados, sucesso, erro) {
  if (dados) {
    sucesso(dados);
  } else {
    erro("Dados inválidos");
  }
}
```

### 2. Eventos
```javascript
botao.addEventListener("click", function() {
  console.log("Clicado!");
});
```

### 3. Assincronismo (Callback Hell)
```javascript
buscarDados(function(erro, dados) {
  if (erro) {
    console.error("Erro ao buscar");
  } else {
    processar(dados, function(resultado) {
      salvar(resultado, function(erro2) {
        if (!erro2) {
          console.log("Salvo!");
        }
      });
    });
  }
});
```

## Padrão: Callback com Sucesso e Erro

Padrão comum em Node.js:
```javascript
// Padrão Node.js (erro como primeiro argumento)
fs.readFile("arquivo.txt", function(erro, dados) {
  if (erro) {
    console.error("Erro:", erro);
  } else {
    console.log("Dados:", dados);
  }
});
```

## Problema: Callback Hell (Pyramid of Doom)

```javascript
// ❌ Ruim - Callback aninhado demais
getUser(userId, function(erro, user) {
  if (!erro) {
    getOrders(user.id, function(erro2, orders) {
      if (!erro2) {
        getItems(orders[0].id, function(erro3, items) {
          if (!erro3) {
            // Finalmente podemos usar os dados!
            console.log(items);
          }
        });
      }
    });
  }
});
```

### Solução: Use Promises ou async/await

```javascript
// ✅ Melhor - Com Promises
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => getItems(orders[0].id))
  .then(items => console.log(items))
  .catch(erro => console.error(erro));
```

## Melhores Práticas

✏️ **Use arrow functions** - Sintaxe mais clara
✏️ **Nomeie callbacks** - Fica mais legível
✏️ **Evite aninhamento excessivo** - Use Promises ou async/await
✏️ **Trate erros** - Sempre tenha tratamento de erro
✏️ **Limite profundidade** - Máximo 2-3 níveis

## Casos de Uso Práticos

### Array.forEach (Callback)
```javascript
[1, 2, 3].forEach(function(item) {
  console.log(item);
});
```

### Array.map (Callback)
```javascript
const numeros = [1, 2, 3];
const dobrados = numeros.map(function(n) {
  return n * 2;
});
```

### setTimeout (Callback)
```javascript
console.log("Agora");
setTimeout(function() {
  console.log("Depois de 1 segundo");
}, 1000);
```

## Evolução do JavaScript Assincrónico

| Geração | Padrão | Vantagens | Desvantagens |
|---------|--------|-----------|---------------|
| 1ª (2000s) | Callbacks | Simples | Callback Hell |
| 2ª (2015) | Promises | Melhor legibilidade | Ainda alguns `.then()` |
| 3ª (2017) | async/await | Muito legível | Requer transpiling antigo |

## Quando Usar Callbacks

✅ **Callbacks simples** - Uma ou duas operações  
✅ **Eventos DOM** - Muito comum em navegadores  
✅ **Array methods** - map, filter, forEach  
❌ **Operações complexas** - Use Promises ou async/await  

## Dicas Práticas

💡 Se vê callback aninhado → Use Promises  
💡 Se vê Promises → Considere async/await  
💡 Em Node.js moderno → Prefira async/await  
💡 Em navegadores antigos → Callbacks/Promises são obrigatórios  

---

## Próximo Passo

Após dominar callbacks, estude **[Promises](../promises/)** para um código mais limpo e organizado.

## Referências

📚 [MDN - Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)  
📚 [JavaScript.info - Callbacks](https://javascript.info/callbacks)  
