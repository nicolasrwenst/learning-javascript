# Funções Anônimas

## O que é uma Função Anônima?

Uma **função anônima** é uma função que **não possui nome**. Ela é geralmente atribuída a uma variável ou usada como callback, permitindo flexibilidade no código.

## Características

✅ **Vantagens:**
- Úteis como callbacks
- Podem ser armazenadas em variáveis
- Podem ser passadas como argumentos
- Escopo local restrito

❌ **Limitações:**
- Difícil de debugar (stack trace menos claro)
- Sem hoisting em expressões de variável
- Mais verbose do que arrow functions em muitos casos

## Sintaxe Básica

```javascript
// Atribuida a uma variável
const minhaFuncao = function() {
  console.log("Função anônima");
};

// Usada como callback
array.forEach(function(item) {
  console.log(item);
});

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("Executa imediatamente!");
})();
```

## Tipos de Funções Anônimas

### 1. Expressão de Função Anônima
```javascript
const quadrado = function(x) {
  return x * x;
};

console.log(quadrado(5)); // 25
```

### 2. Como Callback
```javascript
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(num) {
  console.log(num * 2);
});
```

### 3. IIFE (Immediately Invoked Function Expression)
```javascript
(function() {
  console.log("Executa imediatamente!");
})();
```

### 4. Retornada por Outra Função
```javascript
function criar Multiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}

const multiplicarPor2 = criar Multiplicador(2);
console.log(multiplicarPor2(5)); // 10
```

## Exemplos Práticos do Dia a Dia

### 1. Callback em Array.map()
```javascript
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(function(n) {
  return n * 2;
});

console.log(dobrados); // [2, 4, 6, 8, 10]
```

### 2. Callback em Array.filter()
```javascript
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 17 },
  { nome: "Carlos", idade: 30 }
];

const maiores = usuarios.filter(function(u) {
  return u.idade >= 18;
});
```

### 3. Callback em setTimeout()
```javascript
setTimeout(function() {
  console.log("Mensagem após 2 segundos");
}, 2000);
```

### 4. Event Listener
```javascript
// Em HTML: <button id="meuBotao">Clique</button>

document.getElementById('meuBotao').addEventListener('click', function() {
  console.log("Botão foi clicado!");
});
```

### 5. Promise com .then()
```javascript
fetch('https://api.github.com/users/github')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Usuário:", data.name);
  });
```

### 6. IIFE para Criar Escopo Privado
```javascript
const contador = (function() {
  let count = 0;  // Privado
  
  return {
    incrementar: function() {
      count++;
      return count;
    },
    decrementar: function() {
      count--;
      return count;
    },
    obterValor: function() {
      return count;
    }
  };
})();

console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.obterValor());  // 2
```

### 7. Padrão Module (Encapsulamento)
```javascript
const calculadora = (function() {
  // Privado
  const historico = [];
  
  // Público
  return {
    somar: function(a, b) {
      const resultado = a + b;
      historico.push(`${a} + ${b} = ${resultado}`);
      return resultado;
    },
    obterHistorico: function() {
      return historico;
    }
  };
})();

console.log(calculadora.somar(5, 3));    // 8
console.log(calculadora.somar(10, 2));   // 12
console.log(calculadora.obterHistorico()); // ["5 + 3 = 8", "10 + 2 = 12"]
```

### 8. Função Anônima com Closure
```javascript
function criar Saudacao(prefixo) {
  return function(nome) {
    return `${prefixo}, ${nome}!`;
  };
}

const saudacaoFormal = criar Saudacao("Prezado");
const saudacaoInformal = criar Saudacao("E aí");

console.log(saudacaoFormal("Dr. Silva"));    // Prezado, Dr. Silva!
console.log(saudacaoInformal("João"));       // E aí, João!
```

### 9. Callback em Função Personalizada
```javascript
function processar Dados(dados, callback) {
  const resultado = dados.map(x => x * 2);
  return callback(resultado);
}

const resultado = processar Dados([1, 2, 3], function(dados) {
  return dados.reduce((a, b) => a + b, 0);
});

console.log(resultado); // 12
```

### 10. IIFE com Parâmetros
```javascript
(function(nome, idade) {
  console.log(`${nome} tem ${idade} anos`);
})("João", 28);
```

## Anônima vs Arrow Function

```javascript
// Função anônima tradicional
const quadrado1 = function(x) {
  return x * x;
};

// Arrow function (mais moderna e concisa)
const quadrado2 = (x) => x * x;

// Ambas funcionam igual:
console.log(quadrado1(5)); // 25
console.log(quadrado2(5)); // 25
```

## IIFE - Casos de Uso

### Evitar Poluição Global
```javascript
// SEM IIFE - Polui o escopo global
var contador = 0;
function incrementar() {
  contador++;
}

// COM IIFE - Escopo privado
const minhaAplicacao = (function() {
  let contador = 0;  // Privado!
  
  return {
    incrementar: function() {
      return ++contador;
    }
  };
})();
```

### Inicializar Código
```javascript
(function() {
  console.log("Aplicação iniciada");
  
  const config = {
    debug: true,
    versao: "1.0"
  };
  
  console.log(config); // Só acessível aqui
})();
```

## Dicas de Boas Práticas

1. **Prefira arrow functions** para callbacks simples
2. **Use IIFE** apenas quando precisar de escopo privado
3. **Considere nomeá-las** se a função for complexa (`const minhaFunc = function nomear() {}`)
4. **Use async/await** em lugar de callbacks quando possível
5. **Documente o propósito** de funções anônimas complexas

## Quando Usar Cada Uma

| Situação | Use |
|----------|-----|
| Callback simples | Arrow function `=>` |
| Callback com lógica | Função anônima tradicional |
| Criar escopo privado | IIFE |
| Padrão Module | IIFE com return |
| Handlers de eventos | Arrow function ou anônima |
| Operações com promise | Arrow function |
