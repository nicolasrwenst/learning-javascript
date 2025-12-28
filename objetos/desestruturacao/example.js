// ============================================
// DESESTRUTURAÇÃO - EXEMPLOS PRÁTICOS
// ============================================

// 1. DESESTRUTURAÇÃO BÁSICA DE OBJETO
const usuario = {
  nome: "Ana Silva",
  email: "ana@email.com",
  idade: 25,
  ativo: true
};

console.log("--- Desestruturação Básica ---");
const { nome, email, idade, ativo } = usuario;

console.log("Nome:", nome);
console.log("Email:", email);
console.log("Idade:", idade);
console.log("Ativo:", ativo);

// -------------------------------------------

// 2. DESESTRUTURAÇÃO PARCIAL
const pessoa = {
  id: 1,
  nome: "Bruno Costa",
  email: "bruno@email.com",
  telefone: "11-98765-4321",
  cidade: "São Paulo",
  estado: "SP"
};

console.log("\n--- Desestruturação Parcial ---");
const { id, nome: nomePessoa } = pessoa;  // Pega apenas id e nome

console.log("ID:", id);
console.log("Nome:", nomePessoa);
console.log("Telefone NÃO foi desestruturado");

// -------------------------------------------

// 3. RENOMEAR PROPRIEDADES
const produto = {
  id: 101,
  nome: "Notebook",
  valor: 2500,
  desconto: 10
};

console.log("\n--- Renomear Propriedades ---");
const { nome: nomeProduto, valor: preco, desconto: desconto_percentual } = produto;

console.log("Produto:", nomeProduto);
console.log("Preço:", preco);
console.log("Desconto (%):", desconto_percentual);

// -------------------------------------------

// 4. VALORES PADRÃO
const config = {
  tema: "dark",
  idioma: "pt-BR"
};

console.log("\n--- Valores Padrão ---");
const { tema, idioma, tamanhoFonte = 14, largoTela = 1920 } = config;

console.log("Tema:", tema);
console.log("Idioma:", idioma);
console.log("Tamanho da fonte (padrão):", tamanhoFonte);  // 14
console.log("Largura da tela (padrão):", largoTela);      // 1920

// -------------------------------------------

// 5. DESESTRUTURAÇÃO ANINHADA - SIMPLES
const usuario2 = {
  id: 1,
  nome: "Carlos",
  contato: {
    email: "carlos@email.com",
    telefone: "11-99999-8888"
  }
};

console.log("\n--- Desestruturação Aninhada Simples ---");
const { contato: { email: emailContato, telefone } } = usuario2;

console.log("Email de contato:", emailContato);
console.log("Telefone:", telefone);

// -------------------------------------------

// 6. DESESTRUTURAÇÃO ANINHADA - MÚLTIPLOS NÍVEIS
const empresa = {
  nome: "Tech Solutions",
  presidente: {
    nome: "Diana",
    contato: {
      email: "diana@tech.com",
      escritorio: {
        cidade: "São Paulo",
        estado: "SP"
      }
    }
  }
};

console.log("\n--- Desestruturação Aninhada Múltipla ---");
const { 
  nome: nomeEmpresa,
  presidente: {
    nome: nomePresidente,
    contato: {
      email: emailPresidente,
      escritorio: { cidade, estado }
    }
  }
} = empresa;

console.log("Empresa:", nomeEmpresa);
console.log("Presidente:", nomePresidente);
console.log("Email:", emailPresidente);
console.log("Localização:", `${cidade}, ${estado}`);

// -------------------------------------------

// 7. REST OPERATOR (...) EM OBJETOS
const pedido = {
  id: 5001,
  cliente: "Eduardo",
  email: "edu@email.com",
  status: "pendente",
  valor: 1250.50,
  desconto: 50,
  frete: 15
};

console.log("\n--- Rest Operator em Objetos ---");
const { id: pedidoId, cliente, ...detalhes } = pedido;

console.log("ID do Pedido:", pedidoId);
console.log("Cliente:", cliente);
console.log("Detalhes:", detalhes);
// detalhes contém: { email, status, valor, desconto, frete }

// -------------------------------------------

// 8. DESESTRUTURAÇÃO DE ARRAYS BÁSICO
const cores = ["vermelho", "azul", "verde", "amarelo"];

console.log("\n--- Desestruturação de Arrays ---");
const [cor1, cor2, cor3, cor4] = cores;

console.log("Cor 1:", cor1);
console.log("Cor 2:", cor2);
console.log("Cor 3:", cor3);
console.log("Cor 4:", cor4);

// -------------------------------------------

// 9. PULAR ELEMENTOS EM ARRAYS
const numeros = [10, 20, 30, 40, 50];

console.log("\n--- Pular Elementos ---");
const [primeiro, , terceiro, , quinto] = numeros;

console.log("Primeiro:", primeiro);
console.log("Terceiro:", terceiro);
console.log("Quinto:", quinto);

// -------------------------------------------

// 10. REST OPERATOR (...) EM ARRAYS
const [primeiroNum, segundoNum, ...resto] = numeros;

console.log("\n--- Rest Operator em Arrays ---");
console.log("Primeiro:", primeiroNum);
console.log("Segundo:", segundoNum);
console.log("Resto:", resto);  // [30, 40, 50]

// -------------------------------------------

// 11. TROCAR VALORES (SWAP)
let a = 100;
let b = 200;

console.log("\n--- Trocar Valores ---");
console.log("Antes - a:", a, "b:", b);

[a, b] = [b, a];

console.log("Depois - a:", a, "b:", b);

// -------------------------------------------

// 12. DESESTRUTURAÇÃO EM PARÂMETRO DE FUNÇÃO
function exibirUsuario({ nome, email, idade = 0 }) {
  console.log(`${nome} (${email}) - ${idade} anos`);
}

console.log("\n--- Desestruturação em Parâmetro ---");
exibirUsuario({
  nome: "Fernanda",
  email: "fernanda@email.com",
  idade: 28
});

exibirUsuario({
  nome: "Gustavo",
  email: "gustavo@email.com"
  // idade não foi fornecida, usará valor padrão
});

// -------------------------------------------

// 13. ARRAY DE OBJETOS - DESESTRUTURAÇÃO
const usuarios = [
  { id: 1, nome: "Helena", email: "helena@email.com" },
  { id: 2, nome: "Igor", email: "igor@email.com" },
  { id: 3, nome: "Joana", email: "joana@email.com" }
];

console.log("\n--- Array de Objetos ---");
const [{ nome: nome1 }, { nome: nome2 }, { nome: nome3 }] = usuarios;

console.log("Primeiro:", nome1);
console.log("Segundo:", nome2);
console.log("Terceiro:", nome3);

// -------------------------------------------

// 14. COMBINAR ARRAY E OBJETO - DESESTRUTURAÇÃO
const dados = [
  1,
  "Keith",
  { email: "keith@email.com", telefone: "11-91234-5678" }
];

console.log("\n--- Combinar Array e Objeto ---");
const [idLog, nome_keith, { email: emailKeith, telefone: foneKeith }] = dados;

console.log("ID:", idLog);
console.log("Nome:", nome_keith);
console.log("Email:", emailKeith);
console.log("Telefone:", foneKeith);

// -------------------------------------------

// 15. RESPONSE DE API - CASO REAL
const responseApi = {
  status: 200,
  success: true,
  data: {
    usuario: {
      id: 1001,
      nome: "Laura",
      email: "laura@email.com",
      ativo: true
    },
    token: "eyJhbGc...",
    expiracaoToken: 3600
  }
};

console.log("\n--- Response de API ---");
const {
  status: statusCode,
  data: {
    usuario: { id: userId, nome: userName, email: userEmail },
    token: authToken,
    expiracaoToken: tokenExpiry
  }
} = responseApi;

console.log("Status:", statusCode);
console.log("ID do Usuário:", userId);
console.log("Nome:", userName);
console.log("Token:", authToken.substring(0, 15) + "...");
console.log("Expira em:", tokenExpiry, "segundos");

// -------------------------------------------

// 16. FORMULÁRIO - VALORES COM FALLBACK
const formData = {
  nome: "Marcelo",
  email: "marcelo@email.com",
  // telefone não preenchido
  // cidade não preenchida
  estado: "RJ"
};

console.log("\n--- Formulário com Fallback ---");
const {
  nome: nomeForm,
  email: emailForm,
  telefone: telForm = "não preenchido",
  cidade: cidadeForm = "não informada",
  estado: estadoForm = "não selecionado"
} = formData;

console.log("Nome:", nomeForm);
console.log("Email:", emailForm);
console.log("Telefone:", telForm);
console.log("Cidade:", cidadeForm);
console.log("Estado:", estadoForm);

// -------------------------------------------

// 17. PROCESSAR LISTA DE PEDIDOS
const pedidos = [
  {
    id: 1001,
    cliente: "Nina",
    valor: 500,
    status: "entregue"
  },
  {
    id: 1002,
    cliente: "Oscar",
    valor: 1200,
    status: "pendente"
  },
  {
    id: 1003,
    cliente: "Paula",
    valor: 350,
    status: "entregue"
  }
];

console.log("\n--- Processar Lista de Pedidos ---");
pedidos.forEach(({ id, cliente, valor, status }) => {
  console.log(`Pedido ${id}: ${cliente} - R$ ${valor} (${status})`);
});

// -------------------------------------------

// 18. EXTRAIR E TRANSFORMAR
const transacao = {
  id: "TX001",
  tipo: "transferencia",
  valor: 1000,
  origem: {
    banco: "Banco A",
    agencia: "0001",
    conta: "123456-7"
  },
  destino: {
    banco: "Banco B",
    agencia: "0002",
    conta: "987654-3"
  }
};

console.log("\n--- Extrair e Transformar ---");
const {
  id: transId,
  valor: valor_transacao,
  origem: { banco: bancoOrigem, conta: contaOrigem },
  destino: { banco: bancoDestino, conta: contaDestino }
} = transacao;

console.log("Transferência:");
console.log(`  De: ${bancoOrigem} ${contaOrigem}`);
console.log(`  Para: ${bancoDestino} ${contaDestino}`);
console.log(`  Valor: R$ ${valor_transacao}`);

// -------------------------------------------

// 19. DESESTRUTURAÇÃO COM REDUCE
const usuarios_com_idades = [
  { nome: "Quentin", idade: 25 },
  { nome: "Rita", idade: 30 },
  { nome: "Samuel", idade: 28 }
];

console.log("\n--- Desestruturação com Reduce ---");
const listaIdades = usuarios_com_idades
  .map(({ nome, idade }) => `${nome}: ${idade} anos`)
  .join(", ");

console.log("Idades:", listaIdades);

// -------------------------------------------

// 20. CRIAR OBJETO A PARTIR DE DESESTRUTURAÇÃO
const configuracaoCompleta = {
  tema: "dark",
  idioma: "pt-BR",
  tamanhoFonte: 14,
  alturaPainel: 600,
  larguraPainel: 800,
  notificacoes: true,
  som: false
};

console.log("\n--- Separar Configurações ---");
const { tema: temaSalvo, idioma: idiomaSalvo, ...outrasConfigs } = configuracaoCompleta;

console.log("Tema:", temaSalvo);
console.log("Idioma:", idiomaSalvo);
console.log("Outras configurações:", outrasConfigs);

// Usar as outras configs em um sub-objeto
const configDisplay = {
  tema: temaSalvo,
  idioma: idiomaSalvo,
  display: outrasConfigs
};

console.log("Estrutura reorganizada:", configDisplay);
