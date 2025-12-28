// ============================================
// CRIAÇÃO DE ARRAYS - EXEMPLOS PRÁTICOS
// ============================================

// 1. ARRAY LITERAL - FORMA MAIS COMUM
const numeros = [1, 2, 3, 4, 5];
const nomes = ["Ana", "Bruno", "Carlos"];
const frutas = ["maçã", "banana", "laranja"];

console.log("Array de números:", numeros);
console.log("Array de nomes:", nomes);
console.log("Array de frutas:", frutas);

// -------------------------------------------

// 2. ACESSAR ELEMENTOS DO ARRAY
const produtos = ["Notebook", "Mouse", "Teclado"];

console.log("\n--- Acessar Elementos ---");
console.log(produtos[0]);           // "Notebook" (primeiro)
console.log(produtos[1]);           // "Mouse"
console.log(produtos[2]);           // "Teclado"
console.log(produtos.length);       // 3 (quantidade)
console.log(produtos.at(-1));       // "Teclado" (último)

// -------------------------------------------

// 3. ARRAY DE OBJETOS (USO REAL)
const usuarios = [
  { id: 1, nome: "Ana Silva", email: "ana@email.com", ativo: true },
  { id: 2, nome: "Bruno Santos", email: "bruno@email.com", ativo: false },
  { id: 3, nome: "Carlos Oliveira", email: "carlos@email.com", ativo: true }
];

console.log("\n--- Array de Objetos ---");
console.log(usuarios[0]);
console.log(usuarios[1].nome);      // "Bruno Santos"
console.log(usuarios.length);       // 3

// -------------------------------------------

// 4. ARRAY VAZIO E ADIÇÃO DE ELEMENTOS
const lista = [];

lista.push("primeiro");              // Adiciona no final
lista.push("segundo");
lista.push("terceiro");

console.log("\n--- Array Vazio com Push ---");
console.log(lista);

// -------------------------------------------

// 5. USANDO NEW ARRAY()
const array1 = new Array(1, 2, 3);
const array2 = new Array(5);        // 5 posições vazias

console.log("\n--- New Array() ---");
console.log("Array1:", array1);
console.log("Array2 (5 posições):", array2);
console.log("Array2 length:", array2.length);

// -------------------------------------------

// 6. SPREAD OPERATOR (...) - CLONAR/COMBINAR
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];    // [1, 2, 3, 4, 5, 6]

const clone = [...arr1];             // Cópia do array
clone.push(999);

console.log("\n--- Spread Operator ---");
console.log("Array combinado:", arr3);
console.log("Original:", arr1);
console.log("Clone modificado:", clone);

// -------------------------------------------

// 7. ARRAY.FROM() - CONVERTER PARA ARRAY
const string = "Hello";
const letras = Array.from(string);

console.log("\n--- Array.from() ---");
console.log("String:", string);
console.log("Convertido:", letras);

// Criar array com números
const numerosGerados = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("Números gerados:", numerosGerados); // [1, 2, 3, 4, 5]

// -------------------------------------------

// 8. ARRAY.OF() - CRIAR COM VALORES
const arrayOf1 = Array.of(1, 2, 3);
const arrayOf2 = Array.of(5);       // [5] (diferente de new Array(5))

console.log("\n--- Array.of() ---");
console.log("Array.of(1, 2, 3):", arrayOf1);
console.log("Array.of(5):", arrayOf2);

// -------------------------------------------

// 9. ARRAY MULTIDIMENSIONAL
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("\n--- Array Multidimensional ---");
console.log("Matriz:");
console.log(matriz);
console.log("Elemento [1][2]:", matriz[1][2]);  // 6
console.log("Primeira linha:", matriz[0]);      // [1, 2, 3]

// -------------------------------------------

// 10. ARRAY HETEROGÊNEO (VÁRIOS TIPOS)
const misto = [
  1,
  "texto",
  true,
  null,
  undefined,
  { id: 1 },
  [1, 2, 3]
];

console.log("\n--- Array Heterogêneo ---");
console.log(misto);
console.log("Tipo do elemento 0:", typeof misto[0]); // "number"
console.log("Tipo do elemento 1:", typeof misto[1]); // "string"

// -------------------------------------------

// 11. ADICIONAR E REMOVER ELEMENTOS
const carrinho = ["Notebook", "Mouse"];

console.log("\n--- Adicionar/Remover Elementos ---");
console.log("Inicial:", carrinho);

carrinho.push("Teclado");            // Adiciona no final
console.log("Após push:", carrinho);

carrinho.unshift("Monitor");         // Adiciona no início
console.log("Após unshift:", carrinho);

carrinho.pop();                      // Remove último
console.log("Após pop:", carrinho);

carrinho.shift();                    // Remove primeiro
console.log("Após shift:", carrinho);

// -------------------------------------------

// 12. VERIFICAR SE É ARRAY
const arr = [1, 2, 3];
const obj = { a: 1 };
const num = 42;

console.log("\n--- Verificar se é Array ---");
console.log("Array.isArray(arr):", Array.isArray(arr));     // true
console.log("Array.isArray(obj):", Array.isArray(obj));     // false
console.log("Array.isArray(num):", Array.isArray(num));     // false

// -------------------------------------------

// 13. CLONAR ARRAY (NÃO AFETAR ORIGINAL)
const original = [1, 2, 3];
const copia1 = [...original];       // Spread
const copia2 = original.slice();    // Slice
const copia3 = Array.from(original); // Array.from

copia1[0] = 999;
copia2[1] = 888;
copia3[2] = 777;

console.log("\n--- Clonar Array ---");
console.log("Original:", original);
console.log("Cópia 1 modificada:", copia1);
console.log("Cópia 2 modificada:", copia2);
console.log("Cópia 3 modificada:", copia3);

// -------------------------------------------

// 14. LISTA DE COMPRAS (EXEMPLO REAL)
const listaCompras = [
  { item: "Leite", quantidade: 2, preco: 5 },
  { item: "Pão", quantidade: 1, preco: 8 },
  { item: "Ovos", quantidade: 1, preco: 15 }
];

console.log("\n--- Lista de Compras ---");
listaCompras.forEach((compra, index) => {
  console.log(`${index + 1}. ${compra.item} - Qtd: ${compra.quantidade} - R$ ${compra.preco}`);
});

// -------------------------------------------

// 15. ARRAY COM TAREFAS
const tarefas = [
  { id: 1, titulo: "Estudar JS", completa: false, prioridade: "alta" },
  { id: 2, titulo: "Fazer exercícios", completa: true, prioridade: "alta" },
  { id: 3, titulo: "Ler doc", completa: false, prioridade: "média" }
];

console.log("\n--- Lista de Tarefas ---");
console.log(`Total de tarefas: ${tarefas.length}`);
console.log(`Incompletas: ${tarefas.filter(t => !t.completa).length}`);
console.log("Tarefas altas:", tarefas.filter(t => t.prioridade === "alta"));

// -------------------------------------------

// 16. CONCATENAR ARRAYS
const grupo1 = ["Ana", "Bruno"];
const grupo2 = ["Carlos", "Diana"];

const todos1 = grupo1.concat(grupo2);   // Método concat
const todos2 = [...grupo1, ...grupo2];  // Spread operator

console.log("\n--- Concatenar Arrays ---");
console.log("Todos (concat):", todos1);
console.log("Todos (spread):", todos2);

// -------------------------------------------

// 17. PREENCHER ARRAY COM VALORES
const preenchido1 = new Array(5).fill(0);       // [0, 0, 0, 0, 0]
const preenchido2 = Array.from({ length: 3 }, () => "item");  // ["item", "item", "item"]

console.log("\n--- Preencher Array ---");
console.log("Preenchido com 0:", preenchido1);
console.log("Preenchido com 'item':", preenchido2);

// -------------------------------------------

// 18. CRIAR INTERVALO DE NÚMEROS
function criarIntervalo(inicio, fim) {
  return Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i);
}

console.log("\n--- Criar Intervalo ---");
console.log("De 1 a 10:", criarIntervalo(1, 10));
console.log("De 5 a 15:", criarIntervalo(5, 15));

// -------------------------------------------

// 19. ARRAY COM PROPRIEDADE LENGTH
const dynamico = [];
dynamico[0] = "primeiro";
dynamico[5] = "sexto";

console.log("\n--- Array Dinâmico ---");
console.log("Array:", dynamico);
console.log("Length:", dynamico.length);       // 6
console.log("Índice 2:", dynamico[2]);         // undefined

// -------------------------------------------

// 20. USAR SLICE PARA CLONAR E EXTRAIR
const original2 = [1, 2, 3, 4, 5];
const copia = original2.slice();               // Cópia completa
const parcial = original2.slice(1, 4);         // [2, 3, 4]

console.log("\n--- Usar Slice ---");
console.log("Original:", original2);
console.log("Cópia:", copia);
console.log("Parcial (1 a 4):", parcial);
