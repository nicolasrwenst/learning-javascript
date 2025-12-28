# Objetos em JavaScript

Objetos são estruturas fundamentais do JavaScript. Eles permitem agrupar dados relacionados e comportamentos em uma única entidade.

## 📚 Módulos do Objeto

Este módulo está organizado em **3 tópicos** que guiam você desde a criação de objetos até padrões avançados:

### 1️⃣ [Criação de Objetos](criacao-objetos/)
**O que você vai aprender:**
- Criar objetos usando literal `{}`
- Usar constructor functions
- Usar classes ES6
- Adicionar propriedades e métodos
- Getters e setters
- Objetos aninhados

**Quando usar:**
- Definir estrutura de dados
- Criar modelos de entidades (Usuario, Produto, Pedido)
- Adicionar comportamento aos dados

**Exemplos:** usuário com métodos, produto com preço com desconto, conta bancária

---

### 2️⃣ [Acessar Propriedades](acessar-propriedades/)
**O que você vai aprender:**
- Notação de ponto vs colchetes
- Acessar propriedades aninhadas
- Optional chaining (`?.`)
- Nullish coalescing (`??`)
- Iterar sobre propriedades (for...in, Object.keys(), Object.values(), Object.entries())
- Verificar existência de propriedade

**Quando usar:**
- Extrair dados de um objeto
- Acessar dados de forma segura
- Iterar e processar propriedades

**Exemplos:** acessar dados de usuário, verificar se propriedade existe, iterar sobre configurações

---

### 3️⃣ [Desestruturação](desestruturacao/)
**O que você vai aprender:**
- Desestruturação de objetos
- Desestruturação de arrays
- Valores padrão
- Renomear propriedades
- Rest operator (`...`)
- Desestruturação em funções

**Quando usar:**
- Extrair valores de forma concisa
- Simplificar código
- Trabalhar com parâmetros de função

**Exemplos:** extrair dados de API response, usar em parâmetro de função, combinar dados

---

## 🎯 Guia de Aprendizado

### 👶 Iniciante
1. **Comece com:** Criação de Objetos - entenda como são criados
2. **Depois aprenda:** Acessar Propriedades - como pegar dados dele
3. **Por fim, pratique:** Desestruturação - sintaxe mais prática

### 🟡 Intermediário
- Combine os 3 tópicos em exemplos reais
- Crie objetos, acesse e desestruture em um único fluxo
- Trabalhe com arrays de objetos
- Use valores padrão e optional chaining

### 🔴 Avançado
- Desestruturação aninhada complexa
- Patterns com rest operator
- Desestruturação em callbacks/funções
- Transformação de estruturas de dados

---

## 📊 Comparação Rápida

| Tópico | Sintaxe | Uso Principal |
|--------|---------|---------------|
| **Criar** | `const obj = { ... }` | Definir nova estrutura |
| **Acessar (ponto)** | `obj.propriedade` | Leitura rápida |
| **Acessar (colchete)** | `obj["prop"]` | Propriedades dinâmicas |
| **Seguro** | `obj?.prop` | Evitar erros |
| **Padrão** | `obj ?? "padrão"` | Valores nulos |
| **Desestruturar** | `const { a, b } = obj` | Múltiplas extrações |

---

## 🔗 Combinando Tópicos

### Exemplo: Processar usuário de API

```javascript
// 1. Recebe resposta da API
const apiResponse = {
  success: true,
  data: {
    usuario: {
      id: 1,
      nome: "Ana",
      email: "ana@email.com",
      endereco: { cidade: "São Paulo" }
    }
  }
};

// 2. DESESTRUTURA para extrair dados (Tópico 3)
const { data: { usuario: { id, nome, email, endereco } } } = apiResponse;

// 3. CRIA novo objeto estruturado (Tópico 1)
const usuarioFormatado = {
  id,
  nomeCompleto: nome.toUpperCase(),
  emailContato: email,
  cidade: endereco?.cidade ?? "não informada"
};

// 4. ACESSA propriedades (Tópico 2)
console.log(usuarioFormatado.nomeCompleto);
```

---

## ✅ Melhores Práticas

### 1️⃣ Use valores padrão
```javascript
const { email = "sem-email" } = usuario;
```

### 2️⃣ Use optional chaining para segurança
```javascript
const cidade = usuario?.endereco?.cidade;
```

### 3️⃣ Use desestruturação em parâmetros
```javascript
function enviarEmail({ email, nome }) {
  // Mais claro qual é o esperado
}
```

### 4️⃣ Renomear se necessário
```javascript
const { nomeAbreviado: nome } = usuario;
```

### 5️⃣ Use Object.keys/values/entries para iterar
```javascript
Object.entries(usuario).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});
```

---

## 🎓 Casos de Uso Práticos no Dia a Dia

### E-commerce
```javascript
// Criar produto
const produto = { id: 1, nome: "Notebook", preco: 3000, desconto: 10 };

// Acessar propriedade
const precoFinal = produto.preco * (1 - produto.desconto / 100);

// Desestruturar para enviar
const { nome, preco } = produto;
```

### Autenticação
```javascript
// Response do servidor
const loginResponse = {
  token: "xyz123",
  usuario: { id: 1, nome: "Bruno", email: "bruno@email.com" }
};

// Desestruturar dados importantes
const { token, usuario: { nome, email } } = loginResponse;
```

### Processamento de Formulário
```javascript
// Dados do formulário
const formData = {
  nome: "Carlos",
  email: "carlos@email.com",
  telefone: ""  // Campo vazio
};

// Desestruturar com valores padrão
const { nome, email, telefone = "não fornecido" } = formData;
```

### API / GraphQL
```javascript
// Extrair apenas dados necessários
const { data: { users } } = apiResponse;

users.forEach(({ id, nome, email }) => {
  // Processar cada usuário
});
```

---

## 📈 Fluxo de Aprendizado Sugerido

```
Criar Objetos
     ↓
Entender estrutura (Criação)
     ↓
Acessar dados (Acessar Propriedades)
     ↓
Extrair de forma limpa (Desestruturação)
     ↓
Combinar em exemplos reais
     ↓
Aplicar em projetos próprios
```

---

## 🚀 Próximos Passos

Após dominar objetos, você pode estudar:
- **Spread operator** (`...`) para cópia/mesclagem
- **Object.assign()** para combinar objetos
- **JSON.stringify()** / **JSON.parse()** para serialização
- **Classes avançadas** com herança
- **Prototypes** e prototipagem

---

## 📖 Referências

📚 [MDN - Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)  
📚 [MDN - Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)  
📚 [JavaScript.info - Objects](https://javascript.info/object)  
📚 [JavaScript.info - Destructuring](https://javascript.info/destructuring-assignment)
