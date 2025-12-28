// ============================================
// FUNÇÕES COM PARÂMETROS E RETORNO
// EXEMPLOS PRÁTICOS DO DIA A DIA
// ============================================

// 1. PARÂMETRO OBRIGATÓRIO E RETORNO SIMPLES
function areaRetangulo(largura, altura) {
  return largura * altura;
}

console.log("Área:", areaRetangulo(5, 3)); // 15

// -------------------------------------------

// 2. PARÂMETROS COM VALORES PADRÃO
function criarConexao(host = "localhost", porta = 3000) {
  return `Conectando em ${host}:${porta}...`;
}

console.log(criarConexao());                    // localhost:3000
console.log(criarConexao("192.168.1.1", 8080)); // 192.168.1.1:8080

// -------------------------------------------

// 3. RETORNAR OBJETO COM MÚLTIPLOS VALORES
function obterTemperatura(celsius) {
  return {
    celsius: celsius,
    fahrenheit: (celsius * 9/5) + 32,
    kelvin: celsius + 273.15,
    tipo: celsius < 0 ? "Congelante" : "Normal"
  };
}

console.log(obterTemperatura(25));

// -------------------------------------------

// 4. REST PARAMETERS - SOMAR MÚLTIPLOS VALORES
function somarTodos(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(somarTodos(1, 2, 3, 4, 5));           // 15
console.log(somarTodos(10, 20, 30));              // 60
console.log(somarTodos(100));                     // 100

// -------------------------------------------

// 5. PROCESSAR PEDIDO DE E-COMMERCE (REAL)
function processarPedido(cliente, itens, cupomDesconto = 0, cobrarFrete = true) {
  // Calcular subtotal
  const subtotal = itens.reduce((total, item) => {
    return total + (item.preco * item.quantidade);
  }, 0);
  
  // Aplicar desconto do cupom
  const desconto = subtotal * (cupomDesconto / 100);
  
  // Calcular frete (5% do valor)
  const frete = cobrarFrete ? subtotal * 0.05 : 0;
  
  // Total final
  const total = subtotal - desconto + frete;
  
  // Retornar objeto com informações completas
  return {
    cliente: cliente,
    itens: itens.length,
    subtotal: subtotal.toFixed(2),
    desconto: desconto.toFixed(2),
    frete: frete.toFixed(2),
    total: total.toFixed(2),
    dataPedido: new Date().toLocaleDateString('pt-BR')
  };
}

const meuPedido = processarPedido(
  "João Silva",
  [
    { nome: "Notebook", preco: 2500, quantidade: 1 },
    { nome: "Mouse", preco: 50, quantidade: 2 }
  ],
  10,  // 10% de desconto
  true // cobrar frete
);

console.log(meuPedido);

// -------------------------------------------

// 6. VALIDAR E TRANSFORMAR EMAIL
function validarEmail(email) {
  const emailLimpo = email.trim().toLowerCase();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valido = regex.test(emailLimpo);
  
  return {
    original: email,
    processado: emailLimpo,
    valido: valido,
    mensagem: valido ? "✓ Email válido" : "✗ Email inválido"
  };
}

console.log(validarEmail("  USUARIO@GMAIL.COM  "));
console.log(validarEmail("email-invalido"));

// -------------------------------------------

// 7. CALCULAR SALÁRIO COM DESCONTOS
function calcularFolhaPagamento(salarioBruto, dependentes = 0, bonus = 0) {
  // Descontos obrigatórios
  const inss = salarioBruto * 0.08;     // 8%
  const irpf = salarioBruto * 0.10;     // 10% (simplificado)
  const totalDescontos = inss + irpf;
  
  // Abonos
  const abonoDependente = dependentes * 189.59;
  
  // Cálculo final
  const salarioLiquido = salarioBruto - totalDescontos + abonoDependente + bonus;
  
  return {
    salarioBruto: parseFloat(salarioBruto.toFixed(2)),
    descontos: {
      inss: parseFloat(inss.toFixed(2)),
      irpf: parseFloat(irpf.toFixed(2)),
      total: parseFloat(totalDescontos.toFixed(2))
    },
    abonos: {
      dependentes: parseFloat(abonoDependente.toFixed(2)),
      bonus: parseFloat(bonus.toFixed(2)),
      total: parseFloat((abonoDependente + bonus).toFixed(2))
    },
    salarioLiquido: parseFloat(salarioLiquido.toFixed(2))
  };
}

console.log(calcularFolhaPagamento(3500, 2, 500));

// -------------------------------------------

// 8. BUSCAR USUÁRIO E RETORNAR DADOS FORMATADOS
function buscarUsuario(email) {
  // Simulando busca em banco de dados
  const usuarios = {
    "joao@email.com": { id: 1, nome: "João Silva", ativo: true },
    "maria@email.com": { id: 2, nome: "Maria Santos", ativo: false }
  };
  
  const usuario = usuarios[email];
  
  if (!usuario) {
    return { encontrado: false, erro: "Usuário não encontrado" };
  }
  
  return {
    encontrado: true,
    id: usuario.id,
    nome: usuario.nome,
    email: email,
    ativo: usuario.ativo,
    ultimoAcesso: new Date().toLocaleString('pt-BR')
  };
}

console.log(buscarUsuario("joao@email.com"));
console.log(buscarUsuario("desconhecido@email.com"));

// -------------------------------------------

// 9. FILTRAR E ORDENAR PRODUTOS
function filtrarProdutos(produtos, priceMin, priceMax, ordenarPor = 'preco') {
  // Filtrar por preço
  const filtrados = produtos.filter(p => p.preco >= priceMin && p.preco <= priceMax);
  
  // Ordenar
  if (ordenarPor === 'preco') {
    filtrados.sort((a, b) => a.preco - b.preco);
  } else if (ordenarPor === 'nome') {
    filtrados.sort((a, b) => a.nome.localeCompare(b.nome));
  }
  
  return filtrados;
}

const produtos = [
  { nome: "Notebook", preco: 2500, estoque: 5 },
  { nome: "Mouse", preco: 50, estoque: 20 },
  { nome: "Teclado", preco: 150, estoque: 10 },
  { nome: "Monitor", preco: 800, estoque: 8 }
];

console.log(filtrarProdutos(produtos, 100, 1000, 'preco'));

// -------------------------------------------

// 10. GERAR CÓDIGO ALEATÓRIO (CUPOM, PEDIDO, ETC)
function gerarCodigo(tipo = "PEDIDO", tamanho = 6) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let codigo = tipo + "-";
  
  for (let i = 0; i < tamanho; i++) {
    codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  
  return codigo;
}

console.log(gerarCodigo("CUPOM", 8));
console.log(gerarCodigo("PEDIDO", 10));

// -------------------------------------------

// 11. FUNÇÃO COM MÚLTIPLOS RETORNOS (OBJETO)
function analisarDesempenho(vendas) {
  const total = vendas.reduce((a, b) => a + b, 0);
  const media = total / vendas.length;
  const maxima = Math.max(...vendas);
  const minima = Math.min(...vendas);
  const variacao = maxima - minima;
  const emAlta = vendas[vendas.length - 1] > vendas[vendas.length - 2];
  
  return {
    total,
    media: media.toFixed(2),
    maxima,
    minima,
    variacao,
    tendencia: emAlta ? "📈 Crescimento" : "📉 Queda"
  };
}

console.log(analisarDesempenho([1000, 1500, 1200, 1800, 2000]));

// -------------------------------------------

// 12. FUNÇÃO QUE RETORNA OUTRA FUNÇÃO
function criarCalculadora(operacao) {
  return function(a, b) {
    switch(operacao) {
      case 'soma': return a + b;
      case 'subtracao': return a - b;
      case 'multiplicacao': return a * b;
      case 'divisao': return b !== 0 ? a / b : 'Erro: divisão por zero';
      default: return 'Operação inválida';
    }
  };
}

const somar = criarCalculadora('soma');
const multiplicar = criarCalculadora('multiplicacao');

console.log(somar(5, 3));          // 8
console.log(multiplicar(5, 3));    // 15
