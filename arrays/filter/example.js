// ============================================
// ARRAY.FILTER() - EXEMPLOS PRÁTICOS
// ============================================

// 1. FILTER BÁSICO - NÚMEROS PARES
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(n => n % 2 === 0);
const impares = numeros.filter(n => n % 2 !== 0);

console.log("Originais:", numeros);
console.log("Pares:", pares);      // [2, 4, 6, 8, 10]
console.log("Ímpares:", impares);  // [1, 3, 5, 7, 9]

// -------------------------------------------

// 2. FILTRAR USUÁRIOS ATIVOS (MUITO COMUM)
const usuarios = [
  { id: 1, nome: "Ana Silva", ativo: true, email: "ana@email.com" },
  { id: 2, nome: "Bruno Santos", ativo: false, email: "bruno@email.com" },
  { id: 3, nome: "Carlos Oliveira", ativo: true, email: "carlos@email.com" },
  { id: 4, nome: "Diana Gomes", ativo: false, email: "diana@email.com" }
];

const usuariosAtivos = usuarios.filter(u => u.ativo);

console.log("\n--- Filtrar Usuários Ativos ---");
console.log(`Total: ${usuarios.length}, Ativos: ${usuariosAtivos.length}`);
console.log(usuariosAtivos);

// -------------------------------------------

// 3. FILTRAR PRODUTOS POR PREÇO
const produtos = [
  { nome: "Notebook", preco: 2500, estoque: 5 },
  { nome: "Mouse", preco: 50, estoque: 20 },
  { nome: "Monitor", preco: 800, estoque: 0 },
  { nome: "Teclado", preco: 150, estoque: 15 },
  { nome: "Webcam", preco: 300, estoque: 8 }
];

const caros = produtos.filter(p => p.preco > 500);
const baratos = produtos.filter(p => p.preco <= 100);
const comEstoque = produtos.filter(p => p.estoque > 0);

console.log("\n--- Filtrar Produtos ---");
console.log("Caros (> 500):", caros.map(p => p.nome));
console.log("Baratos (<= 100):", baratos.map(p => p.nome));
console.log("Com estoque:", comEstoque.map(p => p.nome));

// -------------------------------------------

// 4. FILTRAR TAREFAS INCOMPLETAS
const tarefas = [
  { id: 1, titulo: "Estudar JavaScript", completa: false, prioridade: "alta" },
  { id: 2, titulo: "Fazer exercícios", completa: true, prioridade: "alta" },
  { id: 3, titulo: "Ler documentação", completa: false, prioridade: "média" },
  { id: 4, titulo: "Revisar código", completa: true, prioridade: "baixa" },
  { id: 5, titulo: "Publicar blog", completa: false, prioridade: "alta" }
];

const pendentes = tarefas.filter(t => !t.completa);
const altas = tarefas.filter(t => t.prioridade === "alta");
const urgentes = tarefas.filter(t => !t.completa && t.prioridade === "alta");

console.log("\n--- Filtrar Tarefas ---");
console.log(`Pendentes: ${pendentes.length}`, pendentes.map(t => t.titulo));
console.log(`Altas prioridade: ${altas.length}`);
console.log(`Urgentes: ${urgentes.length}`, urgentes.map(t => t.titulo));

// -------------------------------------------

// 5. FILTRAR STRINGS QUE CONTÊM TEXTO
const nomes = [
  "Ana Silva",
  "Bruno Santos",
  "Ana Oliveira",
  "Carlos Mendes",
  "Ana Gomes"
];

const comAna = nomes.filter(n => n.includes("Ana"));
const silva = nomes.filter(n => n.includes("Silva"));

console.log("\n--- Filtrar Strings ---");
console.log("Nomes com 'Ana':", comAna);
console.log("Nomes com 'Silva':", silva);

// -------------------------------------------

// 6. FILTRAR POR IDADE MÍNIMA
const pessoas = [
  { nome: "Ana", idade: 25, ativo: true },
  { nome: "Bruno", idade: 17, ativo: false },
  { nome: "Carlos", idade: 30, ativo: true },
  { nome: "Diana", idade: 16, ativo: true },
  { nome: "Eduardo", idade: 22, ativo: false }
];

const maioresDeIdade = pessoas.filter(p => p.idade >= 18);
const menoresDeIdade = pessoas.filter(p => p.idade < 18);

console.log("\n--- Filtrar por Idade ---");
console.log("Maiores:", maioresDeIdade.map(p => p.nome));
console.log("Menores:", menoresDeIdade.map(p => p.nome));

// -------------------------------------------

// 7. REMOVER VALORES VAZIOS/NULOS
const dados = [
  1,
  null,
  2,
  undefined,
  3,
  "",
  4,
  0,
  false,
  5,
  null,
  "texto"
];

const apenasValidos = dados.filter(d => d);  // Remove falsy values

console.log("\n--- Remover Vazios ---");
console.log("Originais:", dados.length, "itens");
console.log("Válidos:", apenasValidos.length, "itens");
console.log("Resultado:", apenasValidos);

// -------------------------------------------

// 8. FILTRAR COM MÚLTIPLAS CONDIÇÕES
const usuariosPremium = [
  { nome: "Ana", ativo: true, premium: true, credito: 500 },
  { nome: "Bruno", ativo: false, premium: true, credito: 0 },
  { nome: "Carlos", ativo: true, premium: false, credito: 1000 },
  { nome: "Diana", ativo: true, premium: true, credito: 0 },
  { nome: "Eduardo", ativo: false, premium: false, credito: 500 }
];

const especialistas = usuariosPremium.filter(u => u.ativo && u.premium && u.credito > 0);

console.log("\n--- Múltiplas Condições ---");
console.log("Especialistas:", especialistas.map(u => u.nome));

// -------------------------------------------

// 9. FILTRAR + MAP (COMBINAÇÃO PODEROSA)
const pedidos = [
  { id: 101, valor: 500, status: "completo", cliente: "Ana" },
  { id: 102, valor: 0, status: "cancelado", cliente: "Bruno" },
  { id: 103, valor: 750, status: "completo", cliente: "Carlos" },
  { id: 104, valor: 300, status: "pendente", cliente: "Diana" },
  { id: 105, valor: 1200, status: "completo", cliente: "Eduardo" }
];

const totaisCompletos = pedidos
  .filter(p => p.status === "completo")
  .map(p => p.valor);

const clientesCompletos = pedidos
  .filter(p => p.status === "completo")
  .map(p => p.cliente);

console.log("\n--- Filter + Map ---");
console.log("Valores concluídos:", totaisCompletos);
console.log("Clientes com pedidos completos:", clientesCompletos);

// -------------------------------------------

// 10. FILTRAR COM ÍNDICE
const letras = ["a", "b", "c", "d", "e", "f"];

const posicoesPares = letras.filter((_, i) => i % 2 === 0);
const posicoeImpares = letras.filter((_, i) => i % 2 !== 0);

console.log("\n--- Filter com Índice ---");
console.log("Posições pares:", posicoesPares);
console.log("Posições ímpares:", posicoeImpares);

// -------------------------------------------

// 11. ENCONTRAR DUPLICATAS
const numeros2 = [1, 2, 2, 3, 3, 3, 4, 5, 5];

const duplicatas = numeros2.filter((n, i) => numeros2.indexOf(n) !== i);
const unicos = numeros2.filter((n, i) => numeros2.indexOf(n) === i);

console.log("\n--- Encontrar Duplicatas ---");
console.log("Originais:", numeros2);
console.log("Duplicatas:", [...new Set(duplicatas)]);
console.log("Únicos:", unicos);

// -------------------------------------------

// 12. FILTRAR E CONTAR
const vendas = [
  { mes: "Janeiro", valor: 5000, concluida: true },
  { mes: "Fevereiro", valor: 3000, concluida: false },
  { mes: "Março", valor: 7000, concluida: true },
  { mes: "Abril", valor: 4500, concluida: true },
  { mes: "Maio", valor: 2000, concluida: false }
];

const vendasConcluidas = vendas.filter(v => v.concluida);
const totalConcluido = vendasConcluidas.reduce((a, b) => a + b.valor, 0);

console.log("\n--- Filter e Contar ---");
console.log("Vendas concluídas:", vendasConcluidas.length);
console.log("Total concluído:", totalConcluido);

// -------------------------------------------

// 13. FILTRAR OBJETOS POR PROPRIEDADE
const lojas = [
  { nome: "Loja Centro", cidade: "SP", ativa: true },
  { nome: "Loja Norte", cidade: "RJ", ativa: false },
  { nome: "Loja Sul", cidade: "SP", ativa: true },
  { nome: "Loja Oeste", cidade: "RJ", ativa: true }
];

const lojasEmSP = lojas.filter(l => l.cidade === "SP");
const lojasAtivas = lojas.filter(l => l.ativa);

console.log("\n--- Filtrar por Propriedade ---");
console.log("Lojas SP:", lojasEmSP.map(l => l.nome));
console.log("Lojas ativas:", lojasAtivas.map(l => l.nome));

// -------------------------------------------

// 14. FILTRAR COM BUSCA DINÂMICA
function buscarUsuarios(lista, termo) {
  const termoLower = termo.toLowerCase();
  return lista.filter(u =>
    u.nome.toLowerCase().includes(termoLower) ||
    u.email.toLowerCase().includes(termoLower)
  );
}

const usuarios2 = [
  { nome: "Ana Silva", email: "ana@email.com" },
  { nome: "Bruno Santos", email: "bruno@email.com" },
  { nome: "Carlos Anjos", email: "carlos@email.com" }
];

console.log("\n--- Busca Dinâmica ---");
console.log("Buscando 'ana':", buscarUsuarios(usuarios2, "ana").map(u => u.nome));
console.log("Buscando 'santos':", buscarUsuarios(usuarios2, "santos").map(u => u.nome));

// -------------------------------------------

// 15. FILTRAR ELEMENTOS DENTRO DE INTERVALO
const idades = [12, 18, 25, 35, 42, 55, 65, 70];

const intervalo25a50 = idades.filter(i => i >= 25 && i <= 50);

console.log("\n--- Intervalo ---");
console.log("Idades entre 25 e 50:", intervalo25a50);

// -------------------------------------------

// 16. FILTRAR E LIMITAR RESULTADOS
const artigos = [
  { titulo: "JavaScript Básico", visualizacoes: 5000 },
  { titulo: "Arrays em JS", visualizacoes: 3000 },
  { titulo: "Funções", visualizacoes: 8000 },
  { titulo: "Objetos", visualizacoes: 2000 },
  { titulo: "Closures", visualizacoes: 6000 }
];

const top3 = artigos
  .filter(a => a.visualizacoes > 2000)
  .sort((a, b) => b.visualizacoes - a.visualizacoes)
  .slice(0, 3);

console.log("\n--- Top 3 ---");
console.log(top3.map(a => `${a.titulo} (${a.visualizacoes})`));

// -------------------------------------------

// 17. AGRUPAR POR FILTRO
const produtos2 = [
  { nome: "Notebook", categoria: "Eletrônicos", preco: 2500 },
  { nome: "Livro", categoria: "Livros", preco: 50 },
  { nome: "Monitor", categoria: "Eletrônicos", preco: 800 },
  { nome: "Teclado", categoria: "Eletrônicos", preco: 150 },
  { nome: "Almofada", categoria: "Casa", preco: 40 }
];

const eletronicos = produtos2.filter(p => p.categoria === "Eletrônicos");
const produtoBaratos = produtos2.filter(p => p.preco < 200);

console.log("\n--- Agrupar por Filtro ---");
console.log("Eletrônicos:", eletronicos.map(p => p.nome));
console.log("Baratos:", produtoBaratos.map(p => p.nome));
// -------------------------------------------

// 18. FILTRAR ENCADEADO
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numeros3
  .filter(n => n > 3)        // [4, 5, 6, 7, 8, 9, 10]
  .filter(n => n < 9)        // [4, 5, 6, 7, 8]
  .filter(n => n % 2 === 0); // [4, 6, 8]

console.log("\n--- Filter Encadeado ---");
console.log(resultado);

// -------------------------------------------

// 19. FILTRAR E VALIDAR
function validarEmail(emails) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emails.filter(e => regex.test(e));
}

const emailsList = [
  "ana@email.com",
  "bruno@email",
  "carlos@email.com",
  "diana@",
  "eduardo@empresa.com.br"
];

console.log("\n--- Validar e Filtrar ---");
console.log("Válidos:", validarEmail(emailsList));

// -------------------------------------------

// 20. FILTRAR COM TRANSFORMAÇÃO CONDICIONAL
const vendedores = [
  { nome: "Ana", vendas: 15000 },
  { nome: "Bruno", vendas: 8000 },
  { nome: "Carlos", vendas: 25000 },
  { nome: "Diana", vendas: 5000 }
];

const comBonus = vendedores
  .filter(v => v.vendas > 10000)
  .map(v => ({
    ...v,
    bonus: v.vendas * 0.05
  }));

console.log("\n--- Filter + Map Condicional ---");
console.log(comBonus);
