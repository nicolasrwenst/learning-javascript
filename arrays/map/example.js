// ============================================
// ARRAY.MAP() - EXEMPLOS PRÁTICOS
// ============================================

// 1. MAP BÁSICO - DOBRAR NÚMEROS
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);

console.log("Originais:", numeros);
console.log("Dobrados:", dobrados);  // [2, 4, 6, 8, 10]

// -------------------------------------------

// 2. EXTRAIR NOMES DE ARRAY DE OBJETOS (MUITO COMUM)
const usuarios = [
  { id: 1, nome: "Ana Silva", email: "ana@email.com" },
  { id: 2, nome: "Bruno Santos", email: "bruno@email.com" },
  { id: 3, nome: "Carlos Oliveira", email: "carlos@email.com" }
];

const nomes = usuarios.map(u => u.nome);
const emails = usuarios.map(u => u.email);

console.log("\n--- Extrair Propriedades ---");
console.log("Nomes:", nomes);        // ["Ana Silva", "Bruno Santos", ...]
console.log("Emails:", emails);      // ["ana@email.com", "bruno@email.com", ...]

// -------------------------------------------

// 3. CONVERTER PREÇOS PARA REAIS (REAL DO DIA A DIA)
const precos = [99.90, 249.50, 1500.00, 50.00];

const emReais = precos.map(preco =>
  preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
);

console.log("\n--- Converter para Reais ---");
console.log("Originais:", precos);
console.log("Formatados:", emReais);

// -------------------------------------------

// 4. APLICAR DESCONTO E CALCULAR NOVO PREÇO
const produtosPrecosOriginais = [100, 200, 300, 500];

const comDesconto10 = produtosPrecosOriginais.map(p => p * 0.9);
const comDesconto20 = produtosPrecosOriginais.map(p => p * 0.8);

console.log("\n--- Aplicar Desconto ---");
console.log("Originais:", produtosPrecosOriginais);
console.log("Com 10% desc:", comDesconto10);
console.log("Com 20% desc:", comDesconto20);

// -------------------------------------------

// 5. TRANSFORMAR STRINGS EM NÚMEROS
const stringsNumeros = ["10", "20", "30", "40", "50"];

const numerosConvertidos = stringsNumeros.map(Number);
// Ou: stringsNumeros.map(s => parseInt(s))
// Ou: stringsNumeros.map(s => +s)

console.log("\n--- Converter Strings para Números ---");
console.log("Strings:", stringsNumeros);
console.log("Números:", numerosConvertidos);

// -------------------------------------------

// 6. CAPITALIZAR NOMES (PRIMEIRA LETRA MAIÚSCULA)
const nomesMinusculos = ["ana silva", "bruno santos", "carlos oliveira"];

const namesCapitalizados = nomesMinusculos.map(nome => {
  const partes = nome.split(' ');
  return partes.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
});

console.log("\n--- Capitalizar Nomes ---");
console.log("Originais:", nomesMinusculos);
console.log("Capitalizados:", namesCapitalizados);

// -------------------------------------------

// 7. CRIAR OBJETOS COM DADOS TRANSFORMADOS
const pedidos = [
  { id: 101, cliente: "Ana", valor: 500 },
  { id: 102, cliente: "Bruno", valor: 750 },
  { id: 103, cliente: "Carlos", valor: 300 }
];

const pedidosComDesconto = pedidos.map(p => ({
  id: p.id,
  cliente: p.cliente,
  valorOriginal: p.valor,
  desconto: p.valor * 0.1,
  valorFinal: p.valor * 0.9
}));

console.log("\n--- Criar Objetos Transformados ---");
console.log(pedidosComDesconto);

// -------------------------------------------

// 8. USAR SPREAD OPERATOR (...) PARA COPIAR E ALTERAR
const produtosOriginais = [
  { nome: "Notebook", preco: 2500, estoque: 5 },
  { nome: "Mouse", preco: 50, estoque: 20 }
];

const produtosComDesconto = produtosOriginais.map(p => ({
  ...p,
  precoComDesconto: p.preco * 0.85,
  estoqueBaixado: p.estoque - 2
}));

console.log("\n--- Spread Operator em Map ---");
console.log(produtosComDesconto);

// -------------------------------------------

// 9. FORMATAR DATAS
const datas = [
  new Date('2025-01-15'),
  new Date('2025-02-20'),
  new Date('2025-03-10'),
  new Date('2025-12-25')
];

const datasFormatadas = datas.map(d => d.toLocaleDateString('pt-BR'));

console.log("\n--- Formatar Datas ---");
console.log("Formatadas:", datasFormatadas);

// -------------------------------------------

// 10. MAP COM ÍNDICE (ENUMERAR)
const frutas = ["maçã", "banana", "laranja", "morango"];

const comIndice = frutas.map((fruta, index) => `${index + 1}. ${fruta}`);

console.log("\n--- Map com Índice ---");
console.log(comIndice);
// ["1. maçã", "2. banana", "3. laranja", "4. morango"]

// -------------------------------------------

// 11. GERAR HTML (EXEMPLO REAL)
const itens = [
  { id: 1, nome: "Notebook", preco: 2500 },
  { id: 2, nome: "Mouse", preco: 50 },
  { id: 3, nome: "Teclado", preco: 150 }
];

const htmlItems = itens.map(item =>
  `<div class="item">
    <h3>${item.nome}</h3>
    <p>R$ ${item.preco.toFixed(2)}</p>
   </div>`
);

console.log("\n--- Gerar HTML ---");
console.log(htmlItems.join('\n'));

// -------------------------------------------

// 12. EXTRAIR E TRANSFORMAR PROPRIEDADES
const usuarios2 = [
  { nome: "Ana", idade: 25, ativo: true },
  { nome: "Bruno", idade: 30, ativo: false },
  { nome: "Carlos", idade: 28, ativo: true }
];

const usuariosFormatados = usuarios2.map(u => ({
  nome: u.nome.toUpperCase(),
  idade: u.idade,
  status: u.ativo ? "Ativo" : "Inativo"
}));

console.log("\n--- Transformar Propriedades ---");
console.log(usuariosFormatados);

// -------------------------------------------

// 13. ENCADEAMENTO (CHAINING) - MAP + MAP
const numerosChain = [1, 2, 3, 4, 5];

const resultado = numerosChain
  .map(n => n * 2)                    // [2, 4, 6, 8, 10]
  .map(n => n + 10)                   // [12, 14, 16, 18, 20]
  .map(n => `R$ ${n.toFixed(2)}`);    // ["R$ 12.00", ...]

console.log("\n--- Encadeamento ---");
console.log(resultado);

// -------------------------------------------

// 14. TRANSFORMAR LISTA DE COMPRAS
const listaCompras = [
  { item: "Leite", quantidade: 2, precoUnitario: 5.50 },
  { item: "Pão", quantidade: 1, precoUnitario: 8.00 },
  { item: "Ovos", quantidade: 1, precoUnitario: 15.00 }
];

const listaComTotal = listaCompras.map(l => ({
  ...l,
  subtotal: l.quantidade * l.precoUnitario,
  desconto: (l.quantidade * l.precoUnitario) * 0.05
}));

console.log("\n--- Calcular Totais ---");
listaComTotal.forEach(item => {
  console.log(`${item.item}: ${item.quantidade}x R$ ${item.precoUnitario.toFixed(2)} = R$ ${item.subtotal.toFixed(2)}`);
});

// -------------------------------------------

// 15. EXTRAIR VALORES ÚNICOS COM MAP
const pedidosMultiplos = [
  { id: 1, cliente: "Ana" },
  { id: 2, cliente: "Bruno" },
  { id: 3, cliente: "Ana" },
  { id: 4, cliente: "Carlos" }
];

const clientesUnicos = [...new Set(pedidosMultiplos.map(p => p.cliente))];

console.log("\n--- Extrair Valores Únicos ---");
console.log(clientesUnicos);  // ["Ana", "Bruno", "Carlos"]

// -------------------------------------------

// 16. CALCULAR MÉDIA DE GRUPO
const notas = [
  { aluno: "Ana", nota: 8.5 },
  { aluno: "Bruno", nota: 7.0 },
  { aluno: "Carlos", nota: 9.0 }
];

const apenasNotas = notas.map(n => n.nota);
const media = apenasNotas.reduce((a, b) => a + b) / apenasNotas.length;

console.log("\n--- Calcular Média ---");
console.log("Notas:", apenasNotas);
console.log("Média:", media.toFixed(2));

// -------------------------------------------

// 17. CONVERTER TEMPERATURA
const celsius = [0, 15, 25, 30];

const fahrenheit = celsius.map(c => (c * 9/5) + 32);

console.log("\n--- Converter Temperatura ---");
console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit.map(f => f.toFixed(1)));

// -------------------------------------------

// 18. VALIDAR E MARCAR ITENS
const tarefas = [
  { id: 1, titulo: "Estudar", completa: false },
  { id: 2, titulo: "Exercitar", completa: true },
  { id: 3, titulo: "Ler", completa: false }
];

const tarefasComStatus = tarefas.map(t => ({
  ...t,
  icone: t.completa ? "✓" : "✗",
  classe: t.completa ? "completa" : "pendente"
}));

console.log("\n--- Adicionar Status ---");
console.log(tarefasComStatus);

// -------------------------------------------

// 19. GERAR LINKS DE ARQUIVO
const arquivos = ["documento", "planilha", "apresentacao"];

const urlsArquivos = arquivos.map(arquivo =>
  `https://exemplo.com/download/${arquivo}.pdf`
);

console.log("\n--- Gerar URLs ---");
console.log(urlsArquivos);

// -------------------------------------------

// 20. CONVERTER PARA SLUG (URL-FRIENDLY)
const titulos = [
  "Bem-vindo ao JavaScript",
  "Array Methods Explicado",
  "Guia Completo de Funções"
];

const slugs = titulos.map(titulo =>
  titulo
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
);

console.log("\n--- Gerar Slugs ---");
console.log(slugs);
// ["bem-vindo-ao-javascript", "array-methods-explicado", ...]
