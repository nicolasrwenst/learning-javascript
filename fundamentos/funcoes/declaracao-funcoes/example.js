// ============================================
// DECLARAÇÃO DE FUNÇÕES - EXEMPLOS PRÁTICOS
// ============================================

// 1. FUNÇÃO BÁSICA SEM PARÂMETROS
function cumprimentar() {
  console.log("Bem-vindo ao meu programa!");
}

cumprimentar(); // Output: Bem-vindo ao meu programa!

// -------------------------------------------

// 2. FUNÇÃO COM RETORNO SIMPLES
function obterAno() {
  return new Date().getFullYear();
}

const ano = obterAno();
console.log(`Estamos em ${ano}`); // Output: Estamos em 2025

// -------------------------------------------

// 3. CALCULAR TOTAL DE UMA COMPRA (USO DO DIA A DIA)
function calcularTotalCompra(preco, quantidade, desconto = 0) {
  const subtotal = preco * quantidade;
  const percentualDesconto = desconto / 100;
  const valorDesconto = subtotal * percentualDesconto;
  const total = subtotal - valorDesconto;
  
  return total;
}

console.log(calcularTotalCompra(50, 3, 10)); // 135 (150 com 10% de desconto)

// -------------------------------------------

// 4. PROCESSAR DADOS DE USUÁRIO
function criarUsuario(nome, email, idade) {
  return {
    id: Math.random().toString(36).substring(7),
    nome: nome.toUpperCase(),
    email: email.toLowerCase(),
    idade: idade,
    ativo: true,
    dataCriacao: new Date().toLocaleDateString('pt-BR')
  };
}

const novoUsuario = criarUsuario("João Silva", "JOAO@EXAMPLE.COM", 28);
console.log(novoUsuario);

// -------------------------------------------

// 5. VALIDAR DADOS (EXEMPLO REAL DE E-COMMERCE)
function validarDadosCompra(produto) {
  if (!produto.nome || produto.nome.trim() === "") {
    return { válido: false, erro: "Nome do produto é obrigatório" };
  }
  
  if (produto.preco <= 0) {
    return { válido: false, erro: "Preço deve ser maior que zero" };
  }
  
  if (produto.estoque < 1) {
    return { válido: false, erro: "Produto sem estoque" };
  }
  
  return { válido: true, mensagem: "Produto validado com sucesso" };
}

const produto = { nome: "Notebook", preco: 3500, estoque: 5 };
console.log(validarDadosCompra(produto));

// -------------------------------------------

// 6. FUNÇÃO COM MÚLTIPLAS LINHAS DE LÓGICA
function calcularSalarioLiquido(salarioBruto, dependentes = 0) {
  // Cálculo do INSS (aprox. 8%)
  const inss = salarioBruto * 0.08;
  
  // Cálculo do IRPF (progressivo)
  let irpf = 0;
  if (salarioBruto > 2500) {
    irpf = (salarioBruto - 2500) * 0.15;
  }
  
  // Deduções por dependente (R$ 189,59 cada)
  const deducaoDependente = dependentes * 189.59;
  
  // Cálculo final
  const descontos = inss + irpf;
  const salarioLiquido = salarioBruto - descontos + deducaoDependente;
  
  return {
    salarioBruto: salarioBruto.toFixed(2),
    inss: inss.toFixed(2),
    irpf: irpf.toFixed(2),
    deducaoDependente: deducaoDependente.toFixed(2),
    salarioLiquido: salarioLiquido.toFixed(2)
  };
}

console.log(calcularSalarioLiquido(5000, 2));

// -------------------------------------------

// 7. FUNÇÃO QUE CHAMA OUTRA FUNÇÃO (COMPOSIÇÃO)
function aplicarDesconto(valor, percentual) {
  return valor - (valor * (percentual / 100));
}

function calcularPrecoFinal(preco, desconto, imposto) {
  const comDesconto = aplicarDesconto(preco, desconto);
  const precoFinal = comDesconto + (comDesconto * (imposto / 100));
  return precoFinal;
}

console.log(calcularPrecoFinal(100, 20, 15)); // 92

// -------------------------------------------

// 8. HOISTING - CHAMANDO ANTES DE DECLARAR (FUNCIONA!)
console.log("Resultado:", multiplicar(5, 3)); // Output: Resultado: 15

function multiplicar(a, b) {
  return a * b;
}

// -------------------------------------------

// 9. FILTRAR DADOS (EXEMPLO REAL)
function filtrarEstudantes(lista, minimo = 7) {
  const aprovados = [];
  
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nota >= minimo) {
      aprovados.push({
        nome: lista[i].nome,
        nota: lista[i].nota,
        status: "Aprovado"
      });
    }
  }
  
  return aprovados;
}

const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 9.0 }
];

console.log(filtrarEstudantes(alunos));

// -------------------------------------------

// 10. FUNÇÃO COM TRATAMENTO DE ERRO
function dividir(a, b) {
  if (b === 0) {
    return "Erro: Divisão por zero não é permitida";
  }
  return a / b;
}

console.log(dividir(10, 2));  // 5
console.log(dividir(10, 0));  // Erro: Divisão por zero não é permitida
