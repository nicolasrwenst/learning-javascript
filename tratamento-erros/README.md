# Tratamento de Erros em JavaScript

## O que é um Erro?

Um erro é uma situação excepcional que interrompe a execução normal do programa. JavaScript fornece mecanismos para capturar e tratar esses erros.

```javascript
// Erro não tratado (quebra o programa)
JSON.parse("JSON inválido");  // SyntaxError

// Erro tratado (programa continua)
try {
  JSON.parse("JSON inválido");
} catch (erro) {
  console.log("Erro capturado:", erro.message);
}
```

## Tipos de Erros

### TypeError
```javascript
const obj = null;
obj.propriedade;  // TypeError: Cannot read property 'propriedade' of null
```

### ReferenceError
```javascript
console.log(varivelIndefinida);  // ReferenceError: varivelIndefinida is not defined
```

### SyntaxError
```javascript
eval("código {inválido}");  // SyntaxError: Unexpected token
```

### RangeError
```javascript
const arr = new Array(-1);  // RangeError: Invalid array length
```

### Error Customizado
```javascript
throw new Error("Erro personalizado");
```

## try/catch/finally

### Sintaxe Básica
```javascript
try {
  // Código que pode gerar erro
  arriscado();
} catch (erro) {
  // Tratamento do erro
  console.error("Capturado:", erro.message);
} finally {
  // Sempre executa
  console.log("Limpeza de recursos");
}
```

## throw - Lançar Erro Customizado

```javascript
function validarEmail(email) {
  if (!email.includes("@")) {
    throw new Error("Email inválido!");
  }
  return "Email válido";
}

try {
  validarEmail("email-errado");
} catch (erro) {
  console.log("Erro:", erro.message);
}
```

## Objeto Error

```javascript
const erro = new Error("Mensagem do erro");

console.log(erro.message);   // "Mensagem do erro"
console.log(erro.name);      // "Error"
console.log(erro.stack);     // Stack trace
```

## try/catch com async/await

```javascript
async function buscar() {
  try {
    const response = await fetch("url-inválida");
    const dados = await response.json();
    return dados;
  } catch (erro) {
    console.error("Erro na requisição:", erro.message);
  } finally {
    console.log("Requisição finalizada");
  }
}
```

## Tratamento de Erro em Promises

```javascript
fetch("url")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
  })
  .then(dados => console.log(dados))
  .catch(erro => console.error("Erro:", erro.message))
  .finally(() => console.log("Concluído"));
```

## Padrão Try/Catch vs .catch()

```javascript
// Promises com .catch()
promiseA()
  .then(resultado => promiseB(resultado))
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro));

// async/await com try/catch
async function exemplo() {
  try {
    const resultado = await promiseA();
    const resultado2 = await promiseB(resultado);
    console.log(resultado2);
  } catch (erro) {
    console.error(erro);
  }
}
```

## Error Customizado - Classe Própria

```javascript
class MeuErro extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "MeuErro";
  }
}

try {
  throw new MeuErro("Erro personalizado");
} catch (erro) {
  if (erro instanceof MeuErro) {
    console.log("É um MeuErro:", erro.message);
  }
}
```

## Validação com Erro

```javascript
function validar(dados) {
  if (!dados.nome) {
    throw new Error("Nome é obrigatório");
  }
  if (dados.idade < 18) {
    throw new Error("Deve ser maior de 18 anos");
  }
  return "Dados válidos";
}

try {
  validar({ nome: "Ana", idade: 16 });
} catch (erro) {
  console.log("Erro de validação:", erro.message);
}
```

## Tratamento em Cascata

```javascript
async function processar() {
  try {
    // Pode falhar
    const dados = await buscar();
    
    // Pode falhar
    const validado = validar(dados);
    
    // Pode falhar
    const salvo = await salvar(validado);
    
    return salvo;
  } catch (erro) {
    // Trata qualquer erro acima
    console.error("Erro no processamento:", erro.message);
    // Retorna valor padrão ou relança erro
    return null;
  }
}
```

## Stack Trace

```javascript
function funcaoA() {
  funcaoB();
}

function funcaoB() {
  funcaoC();
}

function funcaoC() {
  throw new Error("Erro aqui!");
}

try {
  funcaoA();
} catch (erro) {
  console.log("Stack:", erro.stack);
  // Mostra funcaoC → funcaoB → funcaoA
}
```

## Melhores Práticas

✏️ **Sempre trate erros** - Não deixe Promises/async pendurados  
✏️ **Mensagens descritivas** - Ajuda a debugar  
✏️ **Use try/catch em async/await** - Mais legível que `.catch()`  
✏️ **Não engula erros** - Sempre registre ou relance  
✏️ **Valide dados** - Antes de processar  
✏️ **Teste cenários de erro** - Não apenas o caminho feliz  

## Tratamento de Erro em Node.js

```javascript
// Capturar erros não tratados
process.on("unhandledRejection", (motivo, promise) => {
  console.error("Promise rejeitada:", motivo);
});

process.on("uncaughtException", (erro) => {
  console.error("Exceção não capturada:", erro);
  process.exit(1);
});
```

## Debugging

```javascript
try {
  perigoso();
} catch (erro) {
  console.error("Nome:", erro.name);
  console.error("Mensagem:", erro.message);
  console.error("Stack:", erro.stack);
  // Use debugger para mais detalhes
  debugger;
}
```

## Erros Comuns

### ❌ Não tratar erro
```javascript
try {
  JSON.parse("inválido");
} catch (e) {
  // Não faz nada - silencia o erro
}
```

### ✅ Tratar corretamente
```javascript
try {
  JSON.parse("inválido");
} catch (e) {
  console.error("Erro ao parsear JSON:", e.message);
  // Registra para análise ou trata adequadamente
}
```

## Próximo Passo

Após dominar tratamento de erros, estude **[Módulos](../modulos/)** para estruturar projetos maiores.

## Referências

📚 [MDN - Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)  
📚 [JavaScript.info - Error Handling](https://javascript.info/error-handling)  
