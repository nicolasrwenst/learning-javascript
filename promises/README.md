# Promises em JavaScript

## O que é uma Promise?

Uma **Promise** é um objeto que representa o resultado eventual de uma operação assincrónica. Ela é um padrão melhor que callbacks para lidar com código assincrónico.

```javascript
const promise = new Promise((resolve, reject) => {
  // Operação assincrónica
  if (sucesso) {
    resolve(resultado);  // Sucesso
  } else {
    reject(erro);        // Erro
  }
});
```

## Estados de uma Promise

```
        ┌─────────────┐
        │   PENDENTE  │
        └─────────────┘
         /             \
        /               \
   ┌────────────┐    ┌─────────────┐
   │  RESOLVIDA │    │   REJEITADA │
   └────────────┘    └─────────────┘
   (sucesso)         (erro)
```

Uma Promise começa **pendente** e passa para **resolvida** ou **rejeitada**.

## Sintaxe Básica

```javascript
// Criar uma Promise
const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Sucesso!");
  }, 1000);
});

// Usar a Promise
minhaPromise
  .then(resultado => console.log(resultado))    // Se resolvida
  .catch(erro => console.error(erro))           // Se rejeitada
  .finally(() => console.log("Concluído"));     // Sempre executa
```

## Por que Usar Promises?

✅ **Melhor que callbacks** - Evita callback hell  
✅ **Encadeamento** - Use `.then()` sequencialmente  
✅ **Tratamento de erro** - `.catch()` centralizado  
✅ **Composição** - `Promise.all()`, `Promise.race()`  
✅ **Padrão padrão** - Base para async/await  

## Métodos Principais

### `.then()`
```javascript
promise.then(resultado => {
  console.log("Sucesso:", resultado);
});
```

### `.catch()`
```javascript
promise.catch(erro => {
  console.log("Erro:", erro);
});
```

### `.finally()`
```javascript
promise.finally(() => {
  console.log("Sempre executa, sucesso ou erro");
});
```

## Métodos Estáticos

### `Promise.resolve()`
```javascript
Promise.resolve("valor")
  .then(v => console.log(v));  // "valor"
```

### `Promise.reject()`
```javascript
Promise.reject("erro")
  .catch(e => console.log(e));  // "erro"
```

### `Promise.all()`
```javascript
// Aguarda todas as promises
Promise.all([promise1, promise2, promise3])
  .then(resultados => {
    // resultados = [resultado1, resultado2, resultado3]
  });
```

### `Promise.race()`
```javascript
// Primeiro a resolver/rejeitar
Promise.race([promise1, promise2])
  .then(resultado => {
    // Primeiro resultado
  });
```

### `Promise.allSettled()`
```javascript
// Aguarda todas, mesmo se algumas falharem
Promise.allSettled([promise1, promise2])
  .then(resultados => {
    // Todos os resultados: { status: "fulfilled/rejected", value/reason }
  });
```

### `Promise.any()`
```javascript
// Primeira a ser resolvida (ignora rejeições)
Promise.any([promise1, promise2])
  .then(resultado => {
    // Primeira resolução
  });
```

## Encadeamento de Promises

```javascript
fetch("https://api.example.com/user/1")
  .then(response => response.json())
  .then(usuario => {
    console.log("Usuário:", usuario);
    return fetch(`https://api.example.com/posts/${usuario.id}`);
  })
  .then(response => response.json())
  .then(posts => console.log("Posts:", posts))
  .catch(erro => console.error("Erro:", erro))
  .finally(() => console.log("Requisição finalizada"));
```

## Convertendo Callbacks para Promises

```javascript
// Antes (Callback)
function buscarDados(callback) {
  setTimeout(() => {
    callback(null, "dados");
  }, 1000);
}

// Depois (Promise)
function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dados");
    }, 1000);
  });
}
```

## Tratamento de Erros

```javascript
promise
  .then(resultado => {
    // Se erro aqui, vai para catch
    throw new Error("Algo deu errado");
  })
  .catch(erro => {
    console.error("Capturado:", erro.message);
  });
```

## Casos de Uso Comuns

### Requisição HTTP
```javascript
fetch("https://api.github.com/users/github")
  .then(response => response.json())
  .then(usuario => console.log(usuario))
  .catch(erro => console.error("Erro:", erro));
```

### Operação em Arquivo (Node.js)
```javascript
const fs = require("fs").promises;

fs.readFile("arquivo.txt", "utf8")
  .then(conteudo => console.log(conteudo))
  .catch(erro => console.error("Erro ao ler:", erro));
```

### Aguardar Múltiplas Operações
```javascript
Promise.all([
  fetch("url1").then(r => r.json()),
  fetch("url2").then(r => r.json()),
  fetch("url3").then(r => r.json())
])
  .then(([dados1, dados2, dados3]) => {
    console.log("Todos os dados recebidos");
  })
  .catch(erro => console.error("Erro em uma das requisições"));
```

## Promise Chain vs async/await

```javascript
// Promises (com .then())
function buscar() {
  return fetch("url")
    .then(r => r.json())
    .then(dados => processar(dados))
    .catch(e => console.error(e));
}

// async/await (mais legível)
async function buscar() {
  try {
    const r = await fetch("url");
    const dados = await r.json();
    return processar(dados);
  } catch (e) {
    console.error(e);
  }
}
```

## Dicas Práticas

✏️ **Use `.catch()`** - Sempre trate erros  
✏️ **Use `.finally()`** - Para limpeza de recursos  
✏️ **Evite callback neste `.then()`** - Use arrow functions  
✏️ **Retorne promises** - Para encadeamento continuado  
✏️ **Use async/await para código novo** - Mais legível que Promises  

## Quando Usar Promises

✅ **Code legado** - Código mais antigo usa Promises  
✅ **Entender foundation** - Promises são base do async/await  
✅ **Métodos de Array** - Como `.map()` com Promises  
✅ **Casos complexos** - `Promise.all()`, `Promise.race()`  
❌ **Novo código** - Prefira async/await  

## Próximo Passo

Após dominar Promises, estude **[async/await](../async-await/)** para código ainda mais legível.

## Referências

📚 [MDN - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)  
📚 [JavaScript.info - Promises](https://javascript.info/promise-basics)  
