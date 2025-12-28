// ============================================
// ARRAY.forEach() - EXEMPLOS PRÁTICOS
// ============================================

// 1. FOREACH BÁSICO - ITERAR E IMPRIMIR
const nomes = ["Ana", "Bruno", "Carlos", "Diana"];

console.log("--- Imprimir Cada Nome ---");
nomes.forEach(nome => {
  console.log(nome);
});

// -------------------------------------------

// 2. ITERAR COM ÍNDICE
const frutas = ["maçã", "banana", "laranja", "morango"];

console.log("\n--- Iterar com Índice ---");
frutas.forEach((fruta, indice) => {
  console.log(`${indice + 1}. ${fruta}`);
});

// -------------------------------------------

// 3. PROCESSAR ARRAY DE OBJETOS (MUITO COMUM)
const usuarios = [
  { id: 1, nome: "Ana Silva", email: "ana@email.com", ativo: true },
  { id: 2, nome: "Bruno Santos", email: "bruno@email.com", ativo: false },
  { id: 3, nome: "Carlos Oliveira", email: "carlos@email.com", ativo: true },
  { id: 4, nome: "Diana Gomes", email: "diana@email.com", ativo: true }
];

console.log("\n--- Processar Objetos ---");
usuarios.forEach(usuario => {
  const status = usuario.ativo ? "✓ Ativo" : "✗ Inativo";
  console.log(`${usuario.id}. ${usuario.nome} (${status})`);
});

// -------------------------------------------

// 4. EXECUTAR AÇÃO PARA CADA ITEM
const pedidos = [
  { id: 101, cliente: "Ana", valor: 500, status: "pendente" },
  { id: 102, cliente: "Bruno", valor: 750, status: "confirmado" },
  { id: 103, cliente: "Carlos", valor: 300, status: "entregue" }
];

console.log("\n--- Executar Ação ---");
pedidos.forEach(pedido => {
  console.log(`Processando pedido ${pedido.id} de ${pedido.cliente}: R$ ${pedido.valor}`);
  console.log(`  Status: ${pedido.status}\n`);
});

// -------------------------------------------

// 5. MODIFICAR PROPRIEDADES DE OBJETOS
const produtos = [
  { nome: "Notebook", preco: 2500, estoque: 5 },
  { nome: "Mouse", preco: 50, estoque: 20 },
  { nome: "Monitor", preco: 800, estoque: 8 }
];

console.log("\n--- Antes do Desconto ---");
console.log(produtos);

// Aplicar 10% de desconto
produtos.forEach(p => {
  p.preco = p.preco * 0.9;
  p.desconto_aplicado = true;
});

console.log("\n--- Depois do Desconto ---");
produtos.forEach(p => {
  console.log(`${p.nome}: R$ ${p.preco.toFixed(2)}`);
});

// -------------------------------------------

// 6. CONSTRUIR LISTA HTML
const itens = [
  { id: 1, nome: "JavaScript Básico" },
  { id: 2, nome: "Arrays e Objetos" },
  { id: 3, nome: "Funções Avançadas" }
];

let html = "<ul class='lista'>\n";

console.log("\n--- Construir HTML ---");
itens.forEach(item => {
  html += `  <li id="item-${item.id}">${item.nome}</li>\n`;
});

html += "</ul>";
console.log(html);

// -------------------------------------------

// 7. PROCESSAR FORMULÁRIO
const campos = [
  { id: "nome", valor: "Ana Silva", tipo: "text" },
  { id: "email", valor: "ana@email.com", tipo: "email" },
  { id: "idade", valor: "25", tipo: "number" },
  { id: "ativo", valor: true, tipo: "checkbox" }
];

console.log("\n--- Processar Formulário ---");
campos.forEach(campo => {
  console.log(`${campo.id.toUpperCase()}: ${campo.valor} (${campo.tipo})`);
});

// -------------------------------------------

// 8. VALIDAR DADOS
const emails = [
  "ana@email.com",
  "bruno@email",
  "carlos@gmail.com",
  "diana@",
  "eduardo@empresa.com.br"
];

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

console.log("\n--- Validar Emails ---");
emails.forEach((email, indice) => {
  const valido = validarEmail(email);
  const status = valido ? "✓ Válido" : "✗ Inválido";
  console.log(`${indice + 1}. ${email} - ${status}`);
});

// -------------------------------------------

// 9. ENVIAR NOTIFICAÇÕES (FICTÍCIO)
const notificacoes = [
  { id: 1, usuario: "Ana", mensagem: "Seu pedido foi confirmado", tipo: "sucesso" },
  { id: 2, usuario: "Bruno", mensagem: "Produto sem estoque", tipo: "aviso" },
  { id: 3, usuario: "Carlos", mensagem: "Erro ao processar", tipo: "erro" }
];

console.log("\n--- Enviar Notificações ---");
notificacoes.forEach(notif => {
  console.log(`[${notif.tipo.toUpperCase()}] ${notif.usuario}: ${notif.mensagem}`);
});

// -------------------------------------------

// 10. REGISTRAR AUDITORIA
const operacoes = [
  { timestamp: "2025-01-15 10:30", usuario: "ana", acao: "Login", resultado: "sucesso" },
  { timestamp: "2025-01-15 10:32", usuario: "ana", acao: "Editar perfil", resultado: "sucesso" },
  { timestamp: "2025-01-15 10:35", usuario: "ana", acao: "Deletar item", resultado: "falha" }
];

console.log("\n--- Auditoria ---");
operacoes.forEach(op => {
  console.log(`${op.timestamp} | ${op.usuario} | ${op.acao} | ${op.resultado}`);
});

// -------------------------------------------

// 11. ATUALIZAR ESTADO (SIMULADO)
const tarefas = [
  { id: 1, titulo: "Estudar", completa: false },
  { id: 2, titulo: "Exercitar", completa: false },
  { id: 3, titulo: "Ler", completa: false }
];

console.log("\n--- Marcar Tarefas Completas ---");
console.log("Antes:");
tarefas.forEach(t => console.log(`  ${t.titulo}: ${t.completa ? "✓" : "✗"}`));

tarefas.forEach(t => {
  t.completa = true;
});

console.log("Depois:");
tarefas.forEach(t => console.log(`  ${t.titulo}: ${t.completa ? "✓" : "✗"}`));

// -------------------------------------------

// 12. EXECUTAR CALLBACK CUSTOMIZADO
function processar(valor) {
  return valor * 2;
}

const numeros = [1, 2, 3, 4, 5];

console.log("\n--- Callback Customizado ---");
numeros.forEach(num => {
  const resultado = processar(num);
  console.log(`${num} * 2 = ${resultado}`);
});

// -------------------------------------------

// 13. FILTRAR E IMPRIMIR (SEM CRIAR NOVO ARRAY)
const vendas = [
  { mes: "Janeiro", valor: 5000 },
  { mes: "Fevereiro", valor: 3000 },
  { mes: "Março", valor: 7000 },
  { mes: "Abril", valor: 2000 },
  { mes: "Maio", valor: 6000 }
];

console.log("\n--- Filtrar e Imprimir ---");
console.log("Vendas acima de R$ 4000:");
vendas.forEach(v => {
  if (v.valor >= 4000) {
    console.log(`  ${v.mes}: R$ ${v.valor}`);
  }
});

// -------------------------------------------

// 14. CONSTRUIR OBJETO A PARTIR DE ARRAY
const pessoas = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carlos" }
];

let mapa = {};

console.log("\n--- Construir Objeto ---");
pessoas.forEach(p => {
  mapa[p.id] = p.nome;
});

console.log(mapa);  // { 1: "Ana", 2: "Bruno", 3: "Carlos" }

// -------------------------------------------

// 15. IMPRIMIR ESTRUTURA ANINHADA
const categorias = [
  {
    nome: "Eletrônicos",
    produtos: ["Notebook", "Mouse", "Teclado"]
  },
  {
    nome: "Livros",
    produtos: ["JavaScript", "Python", "Web Design"]
  },
  {
    nome: "Casa",
    produtos: ["Almofada", "Tapete", "Cortina"]
  }
];

console.log("\n--- Estrutura Aninhada ---");
categorias.forEach(cat => {
  console.log(`\n${cat.nome}:`);
  cat.produtos.forEach(prod => {
    console.log(`  - ${prod}`);
  });
});

// -------------------------------------------

// 16. COLETAR DADOS COM FOREACH
const relatorio = [];

const vendedores = [
  { nome: "Ana", vendas: 15000 },
  { nome: "Bruno", vendas: 8000 },
  { nome: "Carlos", vendas: 25000 }
];

console.log("\n--- Coletar Dados ---");
vendedores.forEach(v => {
  const comissao = v.vendas * 0.05;
  relatorio.push({
    vendedor: v.nome,
    vendas: v.vendas,
    comissao: comissao.toFixed(2)
  });
  console.log(`${v.nome}: R$ ${v.vendas} → Comissão: R$ ${comissao.toFixed(2)}`);
});

// -------------------------------------------

// 17. ITERAR COM ACESSO AO ARRAY ORIGINAL
const numeros2 = [1, 2, 3];

console.log("\n--- Acesso ao Array Original ---");
numeros2.forEach((num, indice, array) => {
  console.log(`Elemento: ${num}, Próximo: ${array[indice + 1] || "último"}`);
});

// -------------------------------------------

// 18. EXECUTAR EM SEQUÊNCIA (SEM ASYNC)
const tarefasSequencia = [
  { ordem: 1, descricao: "Preparar dados" },
  { ordem: 2, descricao: "Validar" },
  { ordem: 3, descricao: "Salvar" },
  { ordem: 4, descricao: "Notificar" }
];

console.log("\n--- Executar em Sequência ---");
tarefasSequencia.forEach(t => {
  console.log(`${t.ordem}. ${t.descricao}`);
});

// -------------------------------------------

// 19. CONTABILIZAR COM FOREACH
const tipos = ["A", "B", "A", "C", "B", "A"];
let contagem2 = {};

console.log("\n--- Contabilizar ---");
tipos.forEach(tipo => {
  contagem2[tipo] = (contagem2[tipo] || 0) + 1;
});

console.log(contagem2);  // { A: 3, B: 2, C: 1 }

// -------------------------------------------

// 20. ENCONTRAR E PROCESSAR
const usuarios2 = [
  { id: 1, nome: "Ana", ativo: true },
  { id: 2, nome: "Bruno", ativo: false },
  { id: 3, nome: "Carlos", ativo: true }
];

console.log("\n--- Encontrar e Processar ---");
const id_procurado = 2;
usuarios2.forEach(u => {
  if (u.id === id_procurado) {
    console.log(`Usuário encontrado: ${u.nome} (${u.ativo ? "Ativo" : "Inativo"})`);
  }
});
