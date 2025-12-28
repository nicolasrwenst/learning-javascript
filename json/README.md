# JSON em JavaScript

## O que é JSON?

**JSON** (JavaScript Object Notation) é um formato de dados leve e legível usado para transmitir dados estruturados. É baseado em JavaScript mas é linguagem-agnóstica.

```javascript
// JSON
{
  "nome": "Ana",
  "idade": 25,
  "ativo": true,
  "emails": ["ana@email.com", "ana2@email.com"]
}

// Diferença: JSON usa aspas duplas (não simples)
// Não pode ter funções ou undefined em JSON
```

## Por que Usar JSON?

✅ **Leve** - Pouco overhead de dados  
✅ **Legível** - Fácil de entender  
✅ **Universal** - Funciona em qualquer linguagem  
✅ **Estruturado** - Suporta objetos e arrays  
✅ **Padrão da Web** - APIs REST usam JSON  

## Sintaxe JSON

```javascript
{
  "propriedade": "valor",
  "número": 42,
  "booleano": true,
  "nulo": null,
  "array": [1, 2, 3],
  "objeto": { "aninhado": "sim" }
}
```

## Tipos de Dados em JSON

- `"string"` - Texto entre aspas duplas
- `123` - Número
- `true` / `false` - Booleano
- `null` - Nulo
- `[...]` - Array
- `{...}` - Objeto

## JSON.stringify() - Converter para String

```javascript
const usuario = {
  nome: "Bruno",
  email: "bruno@email.com",
  ativo: true
};

// Converter para JSON string
const json = JSON.stringify(usuario);
console.log(json);
// {"nome":"Bruno","email":"bruno@email.com","ativo":true}

// Com formatação (indentação)
const jsonFormatado = JSON.stringify(usuario, null, 2);
console.log(jsonFormatado);
// {
//   "nome": "Bruno",
//   "email": "bruno@email.com",
//   "ativo": true
// }
```

## JSON.parse() - Converter para Objeto

```javascript
const jsonString = '{"nome":"Carlos","idade":30}';

// Converter JSON string para objeto
const usuario = JSON.parse(jsonString);
console.log(usuario.nome);  // "Carlos"
console.log(usuario.idade); // 30
```

## Casos de Uso Comuns

### API Response
```javascript
const response = '{"status":200,"data":{"id":1,"nome":"Diana"}}';
const resultado = JSON.parse(response);
console.log(resultado.data.nome);  // "Diana"
```

### Armazenar em localStorage
```javascript
const usuario = { id: 1, nome: "Eduardo" };
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar
const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
```

### Enviar dados ao servidor
```javascript
const dados = { nome: "Fernanda", email: "fernanda@email.com" };
fetch("https://api.example.com/usuarios", {
  method: "POST",
  body: JSON.stringify(dados),
  headers: { "Content-Type": "application/json" }
});
```

## Tratamento de Erro em JSON.parse()

```javascript
try {
  const dados = JSON.parse("{ inválido }");
} catch (erro) {
  console.log("JSON inválido:", erro.message);
}
```

## JSON com Funções (Replacer)

```javascript
const pessoa = {
  nome: "Gustavo",
  idade: 28,
  apresentar: function() {
    return "Olá";
  }
};

// Sem replacer (perde função)
JSON.stringify(pessoa);
// {"nome":"Gustavo","idade":28}

// Com replacer (seleciona propriedades)
JSON.stringify(pessoa, ["nome", "idade"], 2);
// {
//   "nome": "Gustavo",
//   "idade": 28
// }

// Com função replacer customizada
JSON.stringify(pessoa, (chave, valor) => {
  if (typeof valor === "function") {
    return "FUNÇÃO";
  }
  return valor;
});
```

## JSON com Reviver

```javascript
const jsonString = '{"data":"2025-01-01","valor":100}';

// Sem reviver
const obj1 = JSON.parse(jsonString);
console.log(obj1.data);  // "2025-01-01" (string)

// Com reviver - converte para Date
const obj2 = JSON.parse(jsonString, (chave, valor) => {
  if (chave === "data" && typeof valor === "string") {
    return new Date(valor);
  }
  return valor;
});
console.log(obj2.data);  // Date object
```

## Deep Copy com JSON

```javascript
const original = {
  nome: "Helena",
  endereco: { cidade: "São Paulo" }
};

// Cópia profunda usando JSON
const copia = JSON.parse(JSON.stringify(original));

// Modificar não afeta original
copia.endereco.cidade = "Rio";
console.log(original.endereco.cidade);  // "São Paulo"
console.log(copia.endereco.cidade);     // "Rio"
```

## Validar se é JSON

```javascript
function isJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

console.log(isJSON('{"nome":"Igor"}'));    // true
console.log(isJSON("{ inválido }"));       // false
```

## Comparar Objetos

```javascript
const obj1 = { nome: "Joana", idade: 25 };
const obj2 = { nome: "Joana", idade: 25 };

// Igualdade de referência (false)
console.log(obj1 === obj2);  // false

// Comparar como JSON (true)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));  // true
```

## Diferenças JSON vs JavaScript

| Aspecto | JSON | JavaScript |
|---------|------|------------|
| Chaves | Aspas duplas obrigatório | Opcional |
| Valores | String, número, booleano, null, array, objeto | + função, undefined, Symbol |
| Comentários | ❌ Não | ✅ Sim |
| Trailing comma | ❌ Não | ✅ Sim |
| Funções | ❌ Não | ✅ Sim |

## Melhores Práticas

✏️ **Sempre trate erros** - JSON.parse() pode falhar  
✏️ **Valide JSON** - Antes de usar em produção  
✏️ **Use revisores** - Para conversão de tipos  
✏️ **Cuidado com passwords** - Não serialize dados sensíveis  
✏️ **Formatação** - Use para debug e leitura  

## Próximo Passo

Após dominar JSON, estude **[APIs e Fetch](../../../)** para trabalhar com dados reais de servidores.

## Referências

📚 [MDN - JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)  
📚 [JSON.org](https://www.json.org)  
📚 [JavaScript.info - JSON](https://javascript.info/json)  
