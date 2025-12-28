# async / await em JavaScript

## O que é async/await?

**async/await** é uma forma mais legível de trabalhar com Promises. `async` declara que uma função é assincrónica, e `await` pausa a execução até que uma Promise seja resolvida.

```javascript
// Antes (Promises com .then())
function buscar() {
  return fetch("url")
    .then(r => r.json())
    .then(dados => console.log(dados));
}

// Depois (async/await)
async function buscar() {
  const r = await fetch("url");
  const dados = await r.json();
  console.log(dados);
}
```

## Por que Usar async/await?

✅ **Mais legível** - Parece código síncrono  
✅ **Fácil de entender** - Fluxo linear  
✅ **Tratamento de erro simples** - Use try/catch  
✅ **Menos `.then()`** - Código mais limpo  
✅ **Padrão moderno** - Recomendado em 2025  

## Sintaxe

### Declarar uma função async
```javascript
async function minhaFuncao() {
  const resultado = await promise;
  return resultado;
}

// Ou arrow function
const minhaFuncao = async () => {
  const resultado = await promise;
  return resultado;
};
```

### Usar await
```javascript
async function exemplo() {
  const resultado = await Promise.resolve("valor");
  console.log(resultado);  // "valor"
}
```

## Pontos Importantes

1. **`await` só funciona em `async`** - Não pode usar fora
2. **`await` pausa a função** - Até a Promise resolver
3. **Função `async` sempre retorna Promise** - Mesmo se não retornar nada
4. **Erros são tratados com try/catch** - Não com `.catch()`

## Exemplo Básico

```javascript
async function buscarUsuario(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    const usuario = await response.json();
    console.log("Usuário:", usuario);
    return usuario;
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

buscarUsuario(1);  // Executa a função
```

## Aguardar Múltiplas Promises

### Sequencial
```javascript
async function sequencial() {
  const dados1 = await fetch("url1").then(r => r.json());
  const dados2 = await fetch("url2").then(r => r.json());
  // Executa um depois do outro
}
```

### Paralelo
```javascript
async function paralelo() {
  const [dados1, dados2] = await Promise.all([
    fetch("url1").then(r => r.json()),
    fetch("url2").then(r => r.json())
  ]);
  // Executa ao mesmo tempo
}
```

## Try/Catch com async/await

```javascript
async function operacao() {
  try {
    const resultado = await promise;
    console.log("Sucesso:", resultado);
  } catch (erro) {
    console.error("Erro:", erro);
  } finally {
    console.log("Sempre executa");
  }
}
```

## Comparação: Callbacks → Promises → async/await

```javascript
// ❌ Callbacks (difícil de ler)
getUser(userId, (err, user) => {
  if (!err) {
    getOrders(user.id, (err2, orders) => {
      if (!err2) {
        console.log(orders);
      }
    });
  }
});

// 🟡 Promises (melhor)
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => console.log(orders))
  .catch(err => console.error(err));

// ✅ async/await (melhor ainda!)
async function mostrarOrders() {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    console.log(orders);
  } catch (err) {
    console.error(err);
  }
}
```

## Casos de Uso Comuns

### Requisições HTTP
```javascript
async function buscarDados() {
  const response = await fetch("https://api.github.com/users/github");
  const usuario = await response.json();
  console.log(usuario);
}
```

### Operações em Arquivo (Node.js)
```javascript
async function lerArquivo() {
  const fs = require("fs").promises;
  const conteudo = await fs.readFile("arquivo.txt", "utf8");
  console.log(conteudo);
}
```

### Aguardar Múltiplas Operações
```javascript
async function buscarTudo() {
  const [users, posts, comments] = await Promise.all([
    fetch("url/users").then(r => r.json()),
    fetch("url/posts").then(r => r.json()),
    fetch("url/comments").then(r => r.json())
  ]);
  return { users, posts, comments };
}
```

### Loop com async/await
```javascript
async function processarUsuarios(ids) {
  for (const id of ids) {
    const usuario = await buscarUsuario(id);
    console.log(usuario);
  }
}
```

## Erros Comuns

### ❌ Esquecer await
```javascript
async function erro1() {
  const dados = fetch("url");  // Retorna Promise, não dados!
  console.log(dados);          // [object Promise]
}

// ✅ Correto
async function correto1() {
  const response = await fetch("url");
  const dados = await response.json();
}
```

### ❌ Misturar .then() com await
```javascript
async function erro2() {
  const dados = await fetch("url").then(r => r.json());
  // Funciona, mas é inconsistente
}

// ✅ Melhor
async function correto2() {
  const response = await fetch("url");
  const dados = await response.json();
}
```

### ❌ Não trata erro
```javascript
async function erro3() {
  const dados = await fetch("url");  // Se falhar, não é capturado
}

// ✅ Correto
async function correto3() {
  try {
    const dados = await fetch("url");
  } catch (erro) {
    console.error(erro);
  }
}
```

## Dicas Práticas

✏️ **Sempre use try/catch** - Trate erros assincronos  
✏️ **Use Promise.all() para paralelo** - Evite múltiplos awaits sequenciais  
✏️ **Nomeie funções async** - Fica claro que é assincrónica  
✏️ **Lembre: função async retorna Promise** - Mesmo sem `return`  
✏️ **Use await apenas no necessário** - Não é preciso para tudo  

## async/await vs Promises

| Aspecto | Promises | async/await |
|---------|----------|------------|
| Legibilidade | Médio | Alto |
| Tratamento de erro | `.catch()` | try/catch |
| Curva de aprendizado | Média | Fácil |
| Performance | Igual | Igual |
| Suporte navegador | Excelente | Muito bom |
| Recomendação | Para aprender | Para código novo |

## Próximo Passo

Após dominar async/await, estude **[Tratamento de Erros](../tratamento-erros/)** para lidar com todos os cenários.

## Referências

📚 [MDN - async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
📚 [JavaScript.info - async/await](https://javascript.info/async-await)  
