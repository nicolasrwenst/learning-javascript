// ============================================
// ACESSAR PROPRIEDADES - EXEMPLOS PRÁTICOS
// ============================================

// 1. NOTAÇÃO DE PONTO (MAIS COMUM)
const pessoa = {
  nome: "Ana Silva",
  idade: 25,
  email: "ana@email.com",
  ativo: true
};

console.log("--- Notação de Ponto ---");
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Email:", pessoa.email);
console.log("Ativo:", pessoa.ativo);

// -------------------------------------------

// 2. NOTAÇÃO DE COLCHETES
const usuario = {
  nome: "Bruno",
  email: "bruno@email.com",
  telefone: "11-98765-4321"
};

console.log("\n--- Notação de Colchetes ---");
console.log("Nome:", usuario["nome"]);
console.log("Email:", usuario["email"]);
console.log("Telefone:", usuario["telefone"]);

// -------------------------------------------

// 3. ACESSAR COM PROPRIEDADES ESPECIAIS
const dados = {
  "primeiro nome": "Carlos",
  "data de nascimento": "1995-05-15",
  123: "número como chave",
  "tem espaço": true
};

console.log("\n--- Propriedades Especiais ---");
console.log(dados["primeiro nome"]);            // "Carlos"
console.log(dados["data de nascimento"]);       // "1995-05-15"
console.log(dados["123"]);                      // "número como chave"
console.log(dados["tem espaço"]);               // true

// -------------------------------------------

// 4. ACESSAR PROPRIEDADES ANINHADAS
const usuario2 = {
  id: 1,
  nome: "Diana",
  contato: {
    email: "diana@email.com",
    telefone: "11-99999-8888",
    redes_sociais: {
      linkedin: "linkedin.com/in/diana",
      github: "github.com/diana"
    }
  },
  endereco: {
    rua: "Rua A",
    numero: 123,
    cidade: "São Paulo",
    estado: "SP"
  }
};

console.log("\n--- Propriedades Aninhadas ---");
console.log("Email:", usuario2.contato.email);
console.log("Telefone:", usuario2.contato.telefone);
console.log("LinkedIn:", usuario2.contato.redes_sociais.linkedin);
console.log("Cidade:", usuario2.endereco.cidade);
console.log("Estado:", usuario2.endereco.estado);

// -------------------------------------------

// 5. ACESSAR COM VARIÁVEL (CHAVE DINÂMICA)
const produto = {
  id: 101,
  nome: "Notebook",
  preco: 2500,
  desconto: 10,
  estoque: 15
};

console.log("\n--- Acesso com Variável ---");
const chave = "nome";
console.log(`Produto ${chave}:`, produto[chave]);

const chave2 = "preco";
console.log(`Produto ${chave2}:`, produto[chave2]);

// Função que acessa propriedade dinâmica
function obterPropriedade(obj, prop) {
  return obj[prop];
}

console.log("Usando função:", obterPropriedade(produto, "estoque"));

// -------------------------------------------

// 6. VERIFICAR SE PROPRIEDADE EXISTE
const obj = { a: 1, b: 2, c: null };

console.log("\n--- Verificar Propriedades ---");
console.log("'a' in obj:", "a" in obj);        // true
console.log("'d' in obj:", "d" in obj);        // false
console.log("obj.hasOwnProperty('b'):", obj.hasOwnProperty("b"));  // true
console.log("obj.hasOwnProperty('d'):", obj.hasOwnProperty("d"));  // false

// -------------------------------------------

// 7. OPTIONAL CHAINING (?.)
const usuario3 = {
  nome: "Eduardo",
  contato: {
    email: "eduardo@email.com"
  }
};

console.log("\n--- Optional Chaining ---");
console.log("Email:", usuario3.contato?.email);        // "eduardo@email.com"
console.log("Telefone:", usuario3.contato?.telefone);  // undefined (sem erro)
console.log("Endereco:", usuario3.endereco?.rua);      // undefined (sem erro)

// -------------------------------------------

// 8. NULLISH COALESCING (??)
const usuario4 = {
  nome: "Fábio",
  email: null,
  telefone: undefined,
  ativo: false
};

console.log("\n--- Nullish Coalescing ---");
const email = usuario4.email ?? "sem-email@exemplo.com";
const fone = usuario4.telefone ?? "sem-telefone";
const ativo = usuario4.ativo ?? "desconhecido";

console.log("Email:", email);
console.log("Telefone:", fone);
console.log("Ativo:", ativo);

// -------------------------------------------

// 9. VALOR PADRÃO COM OR (||)
const usuario5 = {
  nome: "Gisele",
  email: "",
  telefone: null,
  cidade: "São Paulo"
};

console.log("\n--- Valor Padrão com OR (||) ---");
console.log("Email:", usuario5.email || "não preenchido");
console.log("Telefone:", usuario5.telefone || "não preenchido");
console.log("Cidade:", usuario5.cidade || "não preenchido");

// -------------------------------------------

// 10. OBJECT.KEYS() - OBTER TODAS AS CHAVES
const pessoa2 = {
  nome: "Helena",
  idade: 28,
  email: "helena@email.com",
  ativo: true
};

console.log("\n--- Object.keys() ---");
const chaves = Object.keys(pessoa2);
console.log("Chaves:", chaves);
console.log("Quantidade de chaves:", chaves.length);

// -------------------------------------------

// 11. OBJECT.VALUES() - OBTER TODOS OS VALORES
console.log("\n--- Object.values() ---");
const valores = Object.values(pessoa2);
console.log("Valores:", valores);

// -------------------------------------------

// 12. OBJECT.ENTRIES() - OBTER PARES CHAVE-VALOR
console.log("\n--- Object.entries() ---");
const entradas = Object.entries(pessoa2);
console.log("Entradas:", entradas);

// -------------------------------------------

// 13. ITERAR COM FOR...IN
const usuario6 = {
  id: 1,
  nome: "Igor",
  email: "igor@email.com",
  ativo: true
};

console.log("\n--- Iterar com for...in ---");
for (const chave in usuario6) {
  console.log(`${chave}: ${usuario6[chave]}`);
}

// -------------------------------------------

// 14. ITERAR COM OBJECT.KEYS().forEach()
console.log("\n--- forEach com keys ---");
Object.keys(usuario6).forEach(chave => {
  console.log(`${chave}: ${usuario6[chave]}`);
});

// -------------------------------------------

// 15. ITERAR COM OBJECT.ENTRIES().forEach()
console.log("\n--- forEach com entries ---");
Object.entries(usuario6).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

// -------------------------------------------

// 16. ACESSAR E TRANSFORMAR DADOS
const pedido = {
  id: 5001,
  cliente: "Joana",
  valor: 1250.50,
  desconto: 10,
  data: new Date('2025-01-15')
};

console.log("\n--- Acessar e Transformar ---");
const valorDesconto = pedido.valor * (pedido.desconto / 100);
const valorFinal = pedido.valor - valorDesconto;

console.log(`Pedido: ${pedido.id}`);
console.log(`Cliente: ${pedido.cliente}`);
console.log(`Valor original: R$ ${pedido.valor.toFixed(2)}`);
console.log(`Desconto (${pedido.desconto}%): R$ ${valorDesconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
console.log(`Data: ${pedido.data.toLocaleDateString('pt-BR')}`);

// -------------------------------------------

// 17. BUSCAR PROPRIEDADE DINAMICAMENTE
function buscarValor(obj, caminho) {
  const partes = caminho.split('.');
  let valor = obj;
  
  for (const parte of partes) {
    valor = valor?.[parte];
    if (valor === undefined) break;
  }
  
  return valor;
}

const dados2 = {
  usuario: {
    perfil: {
      email: "karl@email.com"
    }
  }
};

console.log("\n--- Busca Dinâmica ---");
console.log(buscarValor(dados2, "usuario.perfil.email"));
console.log(buscarValor(dados2, "usuario.endereco.cidade"));

// -------------------------------------------

// 18. COPIAR PROPRIEDADES SELETIVAS
const usuarioCompleto = {
  id: 1,
  nome: "Leandra",
  email: "leandra@email.com",
  senha: "secreta123",
  telefone: "11-98765-4321",
  ativo: true
};

console.log("\n--- Copiar Propriedades Seletivas ---");
const usuarioPublico = {
  nome: usuarioCompleto.nome,
  email: usuarioCompleto.email,
  ativo: usuarioCompleto.ativo
};

console.log("Completo:", usuarioCompleto);
console.log("Público:", usuarioPublico);  // Sem senha!

// -------------------------------------------

// 19. ACESSAR COM FALLBACK
const configuracao = {
  tema: "dark",
  idioma: "pt-BR"
};

function obterConfig(chave, padrao) {
  return configuracao[chave] ?? padrao;
}

console.log("\n--- Fallback ---");
console.log("Tema:", obterConfig("tema", "light"));
console.log("Idioma:", obterConfig("idioma", "en-US"));
console.log("Fonte:", obterConfig("fonte", "Arial"));

// -------------------------------------------

// 20. ARRAY DE OBJETOS - ACESSAR ELEMENTOS
const usuarios7 = [
  { id: 1, nome: "Monica", email: "monica@email.com" },
  { id: 2, nome: "Nicolas", email: "nicolas@email.com" },
  { id: 3, nome: "Olivia", email: "olivia@email.com" }
];

console.log("\n--- Array de Objetos ---");
console.log("Primeiro usuário:", usuarios7[0].nome);
console.log("Email do segundo:", usuarios7[1].email);
console.log("Nome do último:", usuarios7[usuarios7.length - 1].nome);

// Todos os nomes
const nomes = usuarios7.map(u => u.nome);
console.log("Todos os nomes:", nomes);
