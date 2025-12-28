// ============================================
// ARRAY.REDUCE() - EXEMPLOS PRÁTICOS
// ============================================

// 1. REDUCE BÁSICO - SOMAR NÚMEROS
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log("Números:", numeros);
console.log("Soma:", soma);  // 15

// -------------------------------------------

// 2. CALCULAR TOTAL DE COMPRA (MUITO COMUM)
const carrinho = [
  { produto: "Notebook", preco: 2500, quantidade: 1 },
  { produto: "Mouse", preco: 50, quantidade: 2 },
  { produto: "Teclado", preco: 150, quantidade: 1 },
  { produto: "Monitor", preco: 800, quantidade: 1 }
];

const totalCompra = carrinho.reduce((acc, item) => {
  const subtotal = item.preco * item.quantidade;
  return acc + subtotal;
}, 0);

console.log("\n--- Total de Compra ---");
console.log("Total:", totalCompra.toFixed(2));  // 5300.00

// -------------------------------------------

// 3. CONTAR OCORRÊNCIAS (FREQUÊNCIA)
const frutas = ["maçã", "banana", "maçã", "laranja", "maçã", "banana"];

const contagem = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});

console.log("\n--- Contar Ocorrências ---");
console.log("Contagem:", contagem);
// { maçã: 3, banana: 2, laranja: 1 }

// -------------------------------------------

// 4. AGRUPAR POR PROPRIEDADE
const usuarios = [
  { nome: "Ana", cidade: "São Paulo", ativo: true },
  { nome: "Bruno", cidade: "Rio de Janeiro", ativo: false },
  { nome: "Carlos", cidade: "São Paulo", ativo: true },
  { nome: "Diana", cidade: "Belo Horizonte", ativo: true },
  { nome: "Eduardo", cidade: "Rio de Janeiro", ativo: false }
];

const porCidade = usuarios.reduce((acc, usuario) => {
  const cidade = usuario.cidade;
  acc[cidade] = acc[cidade] || [];
  acc[cidade].push(usuario.nome);
  return acc;
}, {});

console.log("\n--- Agrupar por Cidade ---");
console.log(porCidade);

// -------------------------------------------

// 5. ENCONTRAR MÁXIMO E MÍNIMO
const precos = [100, 250, 50, 750, 300, 120];

const resultado = precos.reduce(
  (acc, preco) => ({
    maximo: Math.max(acc.maximo, preco),
    minimo: Math.min(acc.minimo, preco),
    soma: acc.soma + preco,
    quantidade: acc.quantidade + 1
  }),
  { maximo: -Infinity, minimo: Infinity, soma: 0, quantidade: 0 }
);

console.log("\n--- Máximo, Mínimo e Média ---");
console.log("Máximo:", resultado.maximo);
console.log("Mínimo:", resultado.minimo);
console.log("Média:", (resultado.soma / resultado.quantidade).toFixed(2));

// -------------------------------------------

// 6. CALCULAR MÉDIA DE NOTAS
const notas = [7, 8, 9, 6, 8.5, 7.5];

const mediaNotas = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

console.log("\n--- Calcular Média ---");
console.log("Notas:", notas);
console.log("Média:", mediaNotas.toFixed(2));

// -------------------------------------------

// 7. CONCATENAR STRINGS
const palavras = ["JavaScript", "é", "incrível", "e", "poderoso"];

const frase = palavras.reduce((acc, palavra) => {
  return acc === "" ? palavra : acc + " " + palavra;
}, "");

console.log("\n--- Concatenar Strings ---");
console.log(frase);  // "JavaScript é incrível e poderoso"

// -------------------------------------------

// 8. MESCLAR MÚLTIPLOS ARRAYS
const grupos = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];

const mesclado = grupos.reduce((acc, grupo) => {
  return acc.concat(grupo);
}, []);

console.log("\n--- Mesclar Arrays ---");
console.log("Grupos:", grupos);
console.log("Mesclado:", mesclado);

// -------------------------------------------

// 9. FILTRAR E SOMAR SIMULTANEAMENTE
const vendas = [
  { produto: "Notebook", valor: 2500 },
  { produto: "Mouse", valor: 50 },
  { produto: "Monitor", valor: 800 },
  { produto: "Teclado", valor: 150 },
  { produto: "Webcam", valor: 300 }
];

const totalProdutosCaros = vendas.reduce((acc, item) => {
  return item.valor > 200 ? acc + item.valor : acc;
}, 0);

console.log("\n--- Filtrar e Somar ---");
console.log("Produtos > R$ 200: R$", totalProdutosCaros);

// -------------------------------------------

// 10. CRIAR OBJETO A PARTIR DE ARRAY DE PARES
const pares = [
  ["nome", "Ana"],
  ["idade", 25],
  ["cidade", "São Paulo"],
  ["ativo", true]
];

const objeto = pares.reduce((acc, [chave, valor]) => {
  acc[chave] = valor;
  return acc;
}, {});

console.log("\n--- Criar Objeto de Pares ---");
console.log(objeto);
// { nome: "Ana", idade: 25, cidade: "São Paulo", ativo: true }

// -------------------------------------------

// 11. INDEXAR ARRAY POR ID
const pedidos = [
  { id: 101, cliente: "Ana", valor: 500 },
  { id: 102, cliente: "Bruno", valor: 750 },
  { id: 103, cliente: "Carlos", valor: 300 }
];

const indice = pedidos.reduce((acc, pedido) => {
  acc[pedido.id] = pedido;
  return acc;
}, {});

console.log("\n--- Indexar por ID ---");
console.log("Pedido 102:", indice[102]);

// -------------------------------------------

// 12. CALCULAR DESCONTO PROGRESSIVO
const itensCarrinho = [
  { nome: "A", preco: 100 },
  { nome: "B", preco: 200 },
  { nome: "C", preco: 300 }
];

const resultado2 = itensCarrinho.reduce((acc, item) => {
  const subtotal = item.preco;
  let desconto = 0;

  if (acc.total >= 300) desconto = 0.05;
  if (acc.total >= 500) desconto = 0.10;

  return {
    total: acc.total + subtotal,
    itens: acc.itens + 1,
    desconto: acc.total * desconto
  };
}, { total: 0, itens: 0, desconto: 0 });

console.log("\n--- Desconto Progressivo ---");
console.log(resultado2);

// -------------------------------------------

// 13. AGRUPAR POR MÚLTIPLAS PROPRIEDADES
const transacoes = [
  { tipo: "entrada", valor: 1000, mes: "Janeiro" },
  { tipo: "saída", valor: 200, mes: "Janeiro" },
  { tipo: "entrada", valor: 1500, mes: "Fevereiro" },
  { tipo: "saída", valor: 300, mes: "Fevereiro" },
  { tipo: "entrada", valor: 2000, mes: "Janeiro" }
];

const agrupado = transacoes.reduce((acc, trans) => {
  const chave = `${trans.mes}-${trans.tipo}`;
  acc[chave] = (acc[chave] || 0) + trans.valor;
  return acc;
}, {});

console.log("\n--- Agrupar por Múltiplas Chaves ---");
console.log(agrupado);

// -------------------------------------------

// 14. ENCONTRAR MAIS FREQUENTE
const numeros2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];

const frequencia = numeros2.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

const maisFrequente = Object.keys(frequencia).reduce((a, b) =>
  frequencia[a] > frequencia[b] ? a : b
);

console.log("\n--- Mais Frequente ---");
console.log("Frequências:", frequencia);
console.log("Mais frequente:", maisFrequente, "aparece", frequencia[maisFrequente], "vezes");

// -------------------------------------------

// 15. VERIFICAR SE TODOS ATENDEM CRITÉRIO
const usuarios2 = [
  { nome: "Ana", ativo: true, premium: true },
  { nome: "Bruno", ativo: true, premium: false },
  { nome: "Carlos", ativo: false, premium: true }
];

const todosAtivos = usuarios2.reduce((acc, u) => acc && u.ativo, true);
const totosPremium = usuarios2.reduce((acc, u) => acc && u.premium, true);

console.log("\n--- Verificar Atributos ---");
console.log("Todos ativos?:", todosAtivos);
console.log("Todos premium?:", totosPremium);

// -------------------------------------------

// 16. APLICAR TRANSFORMAÇÃO CONDICIONAL
const produtos = [
  { nome: "Notebook", preco: 2500, categoria: "eletrônico" },
  { nome: "Livro", preco: 50, categoria: "livro" },
  { nome: "Monitor", preco: 800, categoria: "eletrônico" }
];

const comTaxa = produtos.reduce((acc, p) => {
  const taxa = p.categoria === "eletrônico" ? 1.10 : 1.05;
  return acc + (p.preco * taxa);
}, 0);

console.log("\n--- Aplicar Taxa Condicional ---");
console.log("Total com taxa:", comTaxa.toFixed(2));

// -------------------------------------------

// 17. CRIAR PIPELINE DE TRANSFORMAÇÕES
const dados = [
  { valor: 100 },
  { valor: 200 },
  { valor: 300 }
];

const transformado = dados.reduce((acc, item) => {
  const comJuros = item.valor * 1.05;
  const comDesconto = comJuros * 0.90;
  const formatado = comDesconto.toFixed(2);
  return acc + parseFloat(formatado);
}, 0);

console.log("\n--- Pipeline de Transformações ---");
console.log("Total final:", transformado.toFixed(2));

// -------------------------------------------

// 18. SEPARAR EM DUAS CATEGORIAS
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const separado = numeros3.reduce(
  (acc, num) => {
    if (num % 2 === 0) {
      acc.pares.push(num);
    } else {
      acc.impares.push(num);
    }
    return acc;
  },
  { pares: [], impares: [] }
);

console.log("\n--- Separar em Categorias ---");
console.log("Pares:", separado.pares);
console.log("Ímpares:", separado.impares);

// -------------------------------------------

// 19. CALCULAR COMISSÃO
const vendedores = [
  { nome: "Ana", vendas: 15000 },
  { nome: "Bruno", vendas: 8000 },
  { nome: "Carlos", vendas: 25000 }
];

const resultado3 = vendedores.reduce((acc, v) => {
  const comissao = v.vendas * 0.05;
  return {
    totalVendas: acc.totalVendas + v.vendas,
    totalComissoes: acc.totalComissoes + comissao,
    vendedores: [...acc.vendedores, { ...v, comissao }]
  };
}, { totalVendas: 0, totalComissoes: 0, vendedores: [] });

console.log("\n--- Calcular Comissões ---");
console.log("Total de vendas:", resultado3.totalVendas);
console.log("Total de comissões:", resultado3.totalComissoes.toFixed(2));

// -------------------------------------------

// 20. REMOVER DUPLICATAS
const itemsDuplicados = [1, 2, 2, 3, 3, 3, 4, 5, 5];

const unicos = itemsDuplicados.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

console.log("\n--- Remover Duplicatas ---");
console.log("Original:", itemsDuplicados);
console.log("Únicos:", unicos);
