# 📚 Fundamentos de JavaScript

Bem-vindo ao guia completo de fundamentos de JavaScript! Este material foi estruturado de forma progressiva para que você aprenda desde os conceitos básicos até padrões mais avançados.

## 📖 Módulos Disponíveis

### 1️⃣ **Variáveis** `variaveis/`
Como declarar e trabalhar com variáveis
- `var`, `let`, `const`
- Escopo
- Hoisting
- Boas práticas

### 2️⃣ **Tipos de Dados** `tipos/`
Compreenda os tipos de dados do JavaScript
- String, Number, Boolean
- Null, Undefined
- Array, Object, Symbol
- Conversão de tipos

### 3️⃣ **Operadores** `operadores/`
Aprenda a usar operadores
- Aritméticos, Lógicos, de Comparação
- Ternário, Spread, Desestruturação
- Operadores de atribuição

### 4️⃣ **Estruturas de Controle** `estruturas-controle/`
Controle o fluxo do seu programa
- if, else, switch
- try/catch
- Tratamento de erros

### 5️⃣ **Laços** `lacos/`
Repita operações
- for, while, do...while
- for...in, for...of
- break, continue

### 6️⃣ **Funções** `funcoes/` (não exibido na lista, mas já existe)
Crie e use funções
- Declaração, arrow functions, funções anônimas
- Parâmetros e retorno
- Escopo de funções

### 7️⃣ **Arrays** `arrays/`
Trabalhe com listas de dados
- Criação de arrays
- Métodos: map, filter, reduce, forEach
- Transformação e processamento de dados

### 8️⃣ **Objetos** `objetos/`
Agrupe dados relacionados
- Criação de objetos
- Acesso a propriedades
- Desestruturação

---

## 🎯 Sugestão de Aprendizado

### 👶 Iniciante (Comece por aqui!)
Ordem recomendada:
1. **Variáveis** - Entenda como armazenar dados
2. **Tipos de Dados** - Conheça que tipo de dados existem
3. **Operadores** - Aprenda a fazer operações
4. **Estruturas de Controle** - Controle decisões
5. **Laços** - Repita operações
6. **Funções** - Organize seu código
7. **Arrays** - Trabalhe com listas
8. **Objetos** - Organize dados complexos

### 🟡 Intermediário
- Combine vários módulos em pequenos projetos
- Foque em **Arrays** e **Objetos** para processamento de dados
- Use **Funções** como blocos construtores
- Pratique **Desestruturação** em Objetos

### 🔴 Avançado
- Padrões avançados com funções (closures, currying)
- Métodos complexos de array (reduce com objetos)
- Orientação a objetos com classes
- Composição de funções

---

## 📊 Estrutura de Cada Módulo

Cada módulo contém:

```
modulo/
├── README.md        → Teoria e conceitos
├── example.js       → 15-20 exemplos práticos
└── sub-topicos/
    ├── README.md
    └── example.js
```

### Dentro de cada arquivo:

**README.md:**
- 📖 Conceitos teóricos
- 💡 Sintaxe e exemplos
- 🎯 Quando usar
- 📋 Casos de uso práticos

**example.js:**
- 20 exemplos numerados
- 💬 Comentários explicativos
- 🖨️ console.log com saída esperada
- 🌍 Cenários do dia a dia (e-commerce, banco, formulário)

---

## 🚀 Como Usar Este Material

### Opção 1: Estudo Sequencial
1. Abra o `README.md` de cada módulo
2. Leia a teoria e entenda os conceitos
3. Abra o `example.js` e estude os exemplos
4. Execute o código no seu navegador ou Node.js
5. Modifique os exemplos e experimente!

### Opção 2: Prática Rápida
1. Abra direto o `example.js`
2. Estude os exemplos
3. Volte ao `README.md` se tiver dúvidas

### Opção 3: Desenvolvimento de Projeto
1. Comece com um desafio em mente
2. Pesquise os módulos relacionados
3. Combine conhecimento de vários módulos
4. Implemente seu projeto

---

## 💡 Dicas de Estudo

✅ **Execute o código** - Não apenas leia  
✅ **Modifique os exemplos** - Teste suas hipóteses  
✅ **Combine módulos** - Use o conhecimento junto  
✅ **Pratique regularmente** - Consistência é melhor que intensidade  
✅ **Crie pequenos projetos** - Aplique o que aprendeu  
✅ **Use o console** - F12 no navegador é seu melhor amigo  

---

## 🛠️ Ferramentas para Praticar

### No Navegador
```javascript
// Cole direto no console (F12)
const exemplo = "Teste aqui";
console.log(exemplo);
```

### No Node.js
```bash
# Execute um arquivo example.js
node fundamentos/arrays/map/example.js

# Ou entre no modo interativo
node
> const x = 10;
> console.log(x);
```

### Online
- [JSFiddle](https://jsfiddle.net)
- [CodePen](https://codepen.io)
- [Repl.it](https://replit.com)

---

## 📈 Mapa Conceitual

```
FUNDAMENTOS DE JAVASCRIPT
│
├─ DADOS (Como armazenar)
│  ├─ Variáveis (var, let, const)
│  ├─ Tipos (String, Number, Boolean, etc)
│  └─ Estruturas (Array, Object)
│
├─ LÓGICA (Como processar)
│  ├─ Operadores (Aritmética, Lógica, Comparação)
│  ├─ Estruturas de Controle (if, switch)
│  ├─ Laços (for, while)
│  └─ Funções (Reutilizar código)
│
└─ APLICAÇÃO (Trabalhar com dados reais)
   ├─ Arrays (Listas de dados)
   │  ├─ Criação
   │  ├─ Transformação (map)
   │  ├─ Filtragem (filter)
   │  ├─ Agregação (reduce)
   │  └─ Iteração (forEach)
   │
   └─ Objetos (Dados estruturados)
      ├─ Criação
      ├─ Acesso
      └─ Desestruturação
```

---

## 📝 Exercício Integrador

Um exemplo que usa todos os módulos:

```javascript
// ❶ VARIÁVEIS + TIPOS + OPERADORES
const usuarios = [
  { nome: "Ana", idade: 25, salario: 3000 },
  { nome: "Bruno", idade: 30, salario: 4000 }
];

// ❷ FUNÇÕES + OBJETOS + DESESTRUTURAÇÃO
function aplicarAumento(usuario, percentual) {
  const { nome, salario } = usuario;
  const novoSalario = salario * (1 + percentual);
  return { ...usuario, salario: novoSalario };
}

// ❸ ARRAYS + MAP + ESTRUTURA DE CONTROLE
const usuariosComatual = usuarios.map(user => {
  if (user.idade > 25) {
    return aplicarAumento(user, 0.1);  // 10% de aumento
  }
  return user;
});

// ❹ LAÇOS + ACESSO A OBJETOS
usuariosComatual.forEach(user => {
  console.log(`${user.nome}: R$ ${user.salario}`);
});
```

---

## 🎓 Próximos Níveis

Depois de dominar estes fundamentos:
- **Async/Await** - Trabalhar com operações assincronas
- **Callbacks e Promises** - Controlar execução
- **DOM Manipulation** - Interagir com páginas web
- **APIs e Fetch** - Buscar dados do servidor
- **Classes Avançadas** - Herança e polimorfismo
- **Padrões de Design** - Observer, Factory, etc.

---

## 📚 Recursos Externos

📖 [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
📖 [JavaScript.info](https://javascript.info/)  
📖 [W3Schools JavaScript](https://www.w3schools.com/js/)  
📖 [ECMAScript Specification](https://tc39.es/ecma262/)  

---

## ✨ Dúvidas Frequentes

**P: Qual é a melhor maneira de aprender?**  
R: Pratique! Não apenas leia. Execute o código, modifique, teste.

**P: Quanto tempo leva para aprender?**  
R: Depende. Conceitos básicos: 2-4 semanas. Ser proficiente: 3-6 meses de prática.

**P: Preciso memorizar tudo?**  
R: Não. Use consulta de referência. Repetição leva à memorização.

**P: Qual é a ordem mais importante?**  
R: Variáveis → Tipos → Operadores → Controle → Funções → Arrays → Objetos

**P: Como praticar?**  
R: Faça projetos pequenos. Uma calculadora, lista de tarefas, conversor de moedas.

---

**Bom aprendizado! 🚀**
