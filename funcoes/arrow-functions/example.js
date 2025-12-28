// ============================================
// ARROW FUNCTIONS - EXEMPLOS PRÁTICOS
// ============================================

// 1. ARROW FUNCTION SIMPLES (SEM PARÂMETROS)
const saudacao = () => console.log("Bem-vindo!");

saudacao(); // Output: Bem-vindo!

// -------------------------------------------

// 2. ARROW FUNCTION COM UM PARÂMETRO
const quadrado = x => x * x;

console.log(quadrado(5)); // 25

// -------------------------------------------

// 3. ARROW FUNCTION COM MÚLTIPLOS PARÂMETROS
const soma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Divisão inválida";

console.log(soma(10, 5));          // 15
console.log(multiplicar(4, 3));    // 12
console.log(dividir(10, 2));       // 5

// -------------------------------------------

// 4. ARROW FUNCTION COM RETORNO EXPLÍCITO
const calcularIMC = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
};

console.log(calcularIMC(70, 1.75)); // 22.86

// -------------------------------------------

// 5. RETORNAR OBJETO (PARÊNTESES NECESSÁRIOS)
const criarUsuario = (nome, email) => ({ 
  nome, 
  email, 
  ativo: true,
  dataCriacao: new Date().toLocaleDateString('pt-BR')
});

console.log(criarUsuario("João", "joao@email.com"));

// -------------------------------------------

// 6. MAP - TRANSFORMAR ARRAY (USO MUITO COMUM)
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);
console.log("Dobrados:", dobrados); // [2, 4, 6, 8, 10]

// -------------------------------------------

// 7. FILTER - FILTRAR ARRAY (MUITO USADO)
const usuarios = [
  { nome: "Ana", idade: 25, premium: true },
  { nome: "Bruno", idade: 17, premium: false },
  { nome: "Carlos", idade: 30, premium: true },
  { nome: "Diana", idade: 22, premium: false }
];

const premiums = usuarios.filter(u => u.premium === true);
console.log("Usuários Premium:", premiums);

// -------------------------------------------

// 8. FIND - ENCONTRAR UM ELEMENTO
const produtos = [
  { id: 1, nome: "Notebook", preco: 2500 },
  { id: 2, nome: "Mouse", preco: 50 },
  { id: 3, nome: "Teclado", preco: 150 }
];

const produtoEncontrado = produtos.find(p => p.id === 2);
console.log("Produto encontrado:", produtoEncontrado);

// -------------------------------------------

// 9. REDUCE - SOMAR/ACUMULAR VALORES
const precos = [100, 200, 150, 300];
const total = precos.reduce((soma, preco) => soma + preco, 0);
console.log("Total:", total); // 750

// -------------------------------------------

// 10. REDUCE - CALCULAR TOTAL DE COMPRA (REAL)
const carrinho = [
  { nome: "Notebook", preco: 2500, qtd: 1 },
  { nome: "Mouse", preco: 50, qtd: 2 },
  { nome: "Teclado", preco: 150, qtd: 1 }
];

const totalCompra = carrinho.reduce((total, item) => {
  return total + (item.preco * item.qtd);
}, 0);

console.log("Total da compra:", totalCompra); // 2850

// -------------------------------------------

// 11. SORT - ORDENAR ARRAY
const nomes = ["Zoe", "Ana", "Bruno", "Carlos"];
const ordenados = nomes.sort((a, b) => a.localeCompare(b));
console.log("Ordenados:", ordenados);

// -------------------------------------------

// 12. SORT - ORDENAR POR NÚMERO
const produtosPorPreco = produtos.sort((a, b) => a.preco - b.preco);
console.log("Produtos ordenados por preço:", produtosPorPreco);

// -------------------------------------------

// 13. SOME - VERIFICAR SE ALGUM ATENDE CRITÉRIO
const temsPermium = usuarios.some(u => u.premium);
console.log("Tem usuário premium?", temsPermium); // true

// -------------------------------------------

// 14. EVERY - VERIFICAR SE TODOS ATENDEM CRITÉRIO
const todosAdultos = usuarios.every(u => u.idade >= 18);
console.log("Todos adultos?", todosAdultos); // false

// -------------------------------------------

// 15. VALIDAR EMAIL COM ARROW FUNCTION
const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

console.log(validarEmail("user@gmail.com"));   // true
console.log(validarEmail("email-invalido"));   // false

// -------------------------------------------

// 16. FORMATAR MOEDA
const emReais = (valor) => {
  return valor.toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  });
};

console.log("Preço:", emReais(1299.90)); // R$ 1.299,90

// -------------------------------------------

// 17. APLICAR DESCONTO
const aplicarDesconto = (preco, percentual) => preco * (1 - percentual / 100);

console.log("Com desconto:", aplicarDesconto(100, 20)); // 80

// -------------------------------------------

// 18. ENCADEAMENTO DE OPERAÇÕES (CHAINING)
const dados = [
  { id: 1, valor: 100, ativo: true },
  { id: 2, valor: 50, ativo: false },
  { id: 3, valor: 200, ativo: true },
  { id: 4, valor: 150, ativo: true }
];

const resultado = dados
  .filter(d => d.ativo)           // Apenas ativos
  .map(d => ({ ...d, valor: d.valor * 2 })) // Dobrar valor
  .reduce((total, d) => total + d.valor, 0); // Somar

console.log("Resultado final:", resultado); // 900

// -------------------------------------------

// 19. TRANSFORMAR OBJETO EM NOVO FORMATO
const usuariosSimples = usuarios.map(u => ({
  nome: u.nome,
  tipo: u.premium ? "Premium" : "Comum"
}));

console.log("Usuários simplificados:", usuariosSimples);

// -------------------------------------------

// 20. BUSCAR E FORMATAR DADOS
const buscarUsuariopremium = () => {
  const usuario = usuarios.find(u => u.premium);
  return usuario ? `${usuario.nome} é premium` : "Nenhum premium encontrado";
};

console.log(buscarUsuariopremium());

// -------------------------------------------

// 21. CONVERTER PARA MAIÚSCULAS/MINÚSCULAS
const nomesMaiusculos = usuarios
  .map(u => u.nome.toUpperCase())
  .filter(nome => nome.includes('A'));

console.log("Nomes com A (maiúsculos):", nomesMaiusculos);

// -------------------------------------------

// 22. CALCULAR MÉDIA
const notas = [7, 8, 9, 6, 8.5];
const media = notas.reduce((a, b) => a + b) / notas.length;
console.log("Média:", media.toFixed(2));

// -------------------------------------------

// 23. AGRUPAR DADOS
const agruparPorTipo = (lista) => {
  return lista.reduce((grupos, usuario) => {
    const tipo = usuario.premium ? "premium" : "comum";
    if (!grupos[tipo]) grupos[tipo] = [];
    grupos[tipo].push(usuario);
    return grupos;
  }, {});
};

console.log("Agrupados:", agruparPorTipo(usuarios));

// -------------------------------------------

// 24. CONTAR OCORRÊNCIAS
const contar = (lista, propriedade, valor) => {
  return lista.filter(item => item[propriedade] === valor).length;
};

console.log("Usuários premium:", contar(usuarios, 'premium', true));

// -------------------------------------------

// 25. REMOVER DUPLICATAS
const numerosDuplicados = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const semDuplicatas = [...new Set(numerosDuplicados)];
console.log("Sem duplicatas:", semDuplicatas);

// -------------------------------------------

// 26. OPERAÇÃO COM TIMEOUT
const buscarDadosComDelay = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ mensagem: "Dados carregados!", timestamp: new Date() });
    }, 2000);
  });
};

buscarDadosComDelay().then(dados => console.log(dados));

// -------------------------------------------

// 27. COMPOSIÇÃO DE FUNÇÕES
const adicionarTaxa = (valor) => valor * 1.10;     // +10%
const aplicarDesconto2 = (valor) => valor * 0.85;  // -15%
const arredondar = (valor) => parseFloat(valor.toFixed(2));

const preco = 100;
const precoFinal = arredondar(aplicarDesconto2(adicionarTaxa(preco)));
console.log("Preço final:", precoFinal); // 93.5

// -------------------------------------------

// 28. FILTRAR E MAPEAR JUNTOS
const relatorio = usuarios
  .filter(u => u.idade >= 18)
  .map(u => `${u.nome} (${u.idade} anos) - ${u.premium ? '⭐ Premium' : 'Regular'}`);

console.log("\nRelatório:");
relatorio.forEach(linha => console.log(linha));
