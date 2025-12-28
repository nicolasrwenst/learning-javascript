# Funções com Parâmetros e Retorno

## O que são Parâmetros e Retorno?

- **Parâmetros**: Valores que você passa para a função (entrada de dados)
- **Retorno**: O resultado que a função devolve para você (saída de dados)

## Sintaxe Básica

```javascript
function soma(a, b) {        // a e b são PARÂMETROS
  return a + b;              // return envia o RESULTADO
}

soma(5, 3);                  // 5 e 3 são ARGUMENTOS
```

## Tipos de Parâmetros

### 1. Parâmetros Obrigatórios
```javascript
function subtrair(a, b) {
  return a - b;
}
```

### 2. Parâmetros Opcionais (com valor padrão)
```javascript
function saudacao(nome = "Visitante") {
  return `Olá, ${nome}!`;
}

saudacao();           // "Olá, Visitante!"
saudacao("Maria");    // "Olá, Maria!"
```

### 3. Rest Parameters (...) - Múltiplos parâmetros
```javascript
function somar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

somar(1, 2, 3, 4, 5); // 15
```

## Tipos de Retorno

### 1. Retornar Valor Simples
```javascript
function dobrar(numero) {
  return numero * 2;
}
```

### 2. Retornar Objeto
```javascript
function criar Pessoa(nome, idade) {
  return { nome, idade, ativo: true };
}
```

### 3. Retornar Array
```javascript
function obterNumerosPares(lista) {
  return lista.filter(n => n % 2 === 0);
}
```

### 4. Retornar Função (Higher Order Function)
```javascript
function criar Multiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}

const multiplicarPor2 = criarMultiplicador(2);
multiplicarPor2(5); // 10
```

### 5. Não Retornar Nada (undefined)
```javascript
function mostrarMensagem(texto) {
  console.log(texto); // Sem return
}
```

## Exemplos Práticos do Dia a Dia

### 1. Buscar Preço Após Desconto
```javascript
function obterPrecoComDesconto(precoOriginal, percentualDesconto) {
  const desconto = precoOriginal * (percentualDesconto / 100);
  return precoOriginal - desconto;
}

console.log(obterPrecoComDesconto(100, 15)); // 85
```

### 2. Processar Dados de Compra
```javascript
function processarPedido(itens, frete = 0, cupom = 0) {
  const subtotal = itens.reduce((total, item) => total + item.preco, 0);
  const desconto = subtotal * (cupom / 100);
  const total = subtotal + frete - desconto;
  
  return {
    subtotal: subtotal.toFixed(2),
    frete: frete.toFixed(2),
    desconto: desconto.toFixed(2),
    total: total.toFixed(2)
  };
}

const carrinho = [
  { nome: "Produto A", preco: 50 },
  { nome: "Produto B", preco: 75 }
];

console.log(processarPedido(carrinho, 10, 5));
```

### 3. Validar e Transformar Dados
```javascript
function validarESalvarEmail(email) {
  const emailLimpo = email.trim().toLowerCase();
  const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpo);
  
  return {
    email: valido ? emailLimpo : null,
    valido: valido,
    mensagem: valido ? "Email válido" : "Email inválido"
  };
}

console.log(validarESalvarEmail("  USUARIO@GMAIL.COM  "));
```

### 4. Calcular Estatísticas
```javascript
function obterEstatisticas(notas) {
  const media = notas.reduce((a, b) => a + b) / notas.length;
  const maior = Math.max(...notas);
  const menor = Math.min(...notas);
  
  return {
    media: media.toFixed(2),
    maiorNota: maior,
    menorNota: menor,
    totalNotas: notas.length
  };
}

console.log(obterEstatisticas([7, 8, 9, 6, 8.5]));
```

### 5. Formatar Data para Exibição
```javascript
function formatarData(dia, mes, ano) {
  const diaFormatado = String(dia).padStart(2, '0');
  const mesFormatado = String(mes).padStart(2, '0');
  
  return `${diaFormatado}/${mesFormatado}/${ano}`;
}

console.log(formatarData(5, 3, 2025)); // "05/03/2025"
```

### 6. Autenticar Usuário
```javascript
function autenticar(email, senha) {
  const usuariosCadastrados = {
    "joao@email.com": "senha123",
    "maria@email.com": "senha456"
  };
  
  if (usuariosCadastrados[email] === senha) {
    return {
      sucesso: true,
      usuario: email,
      mensagem: "Login realizado com sucesso"
    };
  }
  
  return {
    sucesso: false,
    usuario: null,
    mensagem: "Email ou senha incorretos"
  };
}

console.log(autenticar("joao@email.com", "senha123"));
```

### 7. Gerar Relatório com Múltiplos Dados
```javascript
function gerarRelatorio(vendas) {
  const total = vendas.reduce((acc, v) => acc + v.valor, 0);
  const quantidade = vendas.length;
  const media = total / quantidade;
  const maiorVenda = Math.max(...vendas.map(v => v.valor));
  
  return {
    totalVendas: total.toFixed(2),
    quantidadeVendas: quantidade,
    mediaVenda: media.toFixed(2),
    maiorVenda: maiorVenda.toFixed(2)
  };
}

const vendas = [
  { data: "01/12", valor: 150 },
  { data: "02/12", valor: 250 },
  { data: "03/12", valor: 300 }
];

console.log(gerarRelatorio(vendas));
```

### 8. Aplicar Regras de Negócio
```javascript
function classificarCliente(totalGasto) {
  if (totalGasto >= 5000) {
    return { categoria: "VIP", desconto: 20 };
  } else if (totalGasto >= 2000) {
    return { categoria: "Ouro", desconto: 15 };
  } else if (totalGasto >= 500) {
    return { categoria: "Prata", desconto: 10 };
  } else {
    return { categoria: "Bronze", desconto: 5 };
  }
}

console.log(classificarCliente(3000)); // { categoria: "Ouro", desconto: 15 }
```

## Dicas Importantes

### ✅ Use Rest Parameters para Flexibilidade
```javascript
function calcularMedia(...valores) {
  return valores.reduce((a, b) => a + b) / valores.length;
}

calcularMedia(7, 8, 9); // 8
```

### ⚠️ Cuidado com Parâmetros Não Usados
```javascript
// Ruim - parâmetro não utilizado
function calcular(a, b, c) {
  return a + b; // c nunca é usado!
}

// Melhor - remova o parâmetro desnecessário
function calcular(a, b) {
  return a + b;
}
```

### ✅ Use Valores Padrão em Lugar de Verificações
```javascript
// Evite isso
function config(opcoes) {
  const timeout = opcoes && opcoes.timeout ? opcoes.timeout : 3000;
}

// Faça assim
function config({ timeout = 3000 } = {}) {
  // timeout já terá o valor padrão
}
```

## Quando Usar Cada Tipo

| Situação | Use |
|----------|-----|
| Dados obrigatórios | Parâmetro sem valor padrão |
| Dados opcionais | Parâmetro com valor padrão |
| Muitos parâmetros similares | Rest parameters (`...`) |
| Muitos dados relacionados | Parâmetro objeto |
| Cálculos simples | Retornar valor primitivo |
| Múltiplos resultados | Retornar objeto/array |
| Encadear operações | Retornar função |
