// ============================================
// CRIAÇÃO DE OBJETOS - EXEMPLOS PRÁTICOS
// ============================================

// 1. OBJECT LITERAL - FORMA MAIS COMUM
const pessoa = {
  nome: "Ana Silva",
  idade: 25,
  email: "ana@email.com",
  ativo: true
};

console.log("--- Object Literal ---");
console.log(pessoa);
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);

// -------------------------------------------

// 2. OBJETO VAZIO E ADIÇÃO DE PROPRIEDADES
const vazio = {};
vazio.nome = "Bruno";
vazio["email"] = "bruno@email.com";
vazio.idade = 28;

console.log("\n--- Objeto Vazio e Adição ---");
console.log(vazio);

// -------------------------------------------

// 3. OBJETO COM PROPRIEDADES ANINHADAS
const usuario = {
  id: 1,
  nome: "Carlos",
  contato: {
    email: "carlos@email.com",
    telefone: "11-98765-4321",
    redes_sociais: {
      linkedin: "linkedin.com/in/carlos",
      github: "github.com/carlos"
    }
  },
  endereco: {
    rua: "Rua A",
    numero: 123,
    cidade: "São Paulo",
    cep: "01234-567"
  }
};

console.log("\n--- Objeto Aninhado ---");
console.log(usuario);
console.log("Email:", usuario.contato.email);
console.log("LinkedIn:", usuario.contato.redes_sociais.linkedin);
console.log("Cidade:", usuario.endereco.cidade);

// -------------------------------------------

// 4. OBJETO COM MÉTODOS
const calculadora = {
  numero1: 10,
  numero2: 5,
  somar: function() {
    return this.numero1 + this.numero2;
  },
  subtrair: function() {
    return this.numero1 - this.numero2;
  },
  multiplicar: function() {
    return this.numero1 * this.numero2;
  },
  dividir: function() {
    return this.numero1 / this.numero2;
  }
};

console.log("\n--- Objeto com Métodos ---");
console.log("10 + 5 =", calculadora.somar());
console.log("10 - 5 =", calculadora.subtrair());
console.log("10 * 5 =", calculadora.multiplicar());
console.log("10 / 5 =", calculadora.dividir());

// -------------------------------------------

// 5. PRODUTO EM E-COMMERCE (CASO REAL)
const produto = {
  id: 101,
  nome: "Notebook Dell",
  descricao: "Notebook de última geração com processador i7",
  preco: 2500,
  desconto: 10,
  precoComDesconto: function() {
    return this.preco * (1 - this.desconto / 100);
  },
  categoria: "Eletrônicos",
  estoque: 15,
  avaliacao: 4.5,
  comentarios: 127,
  tags: ["notebook", "computador", "portátil", "dell"],
  ativo: true,
  dataCriacao: new Date('2025-01-01')
};

console.log("\n--- Produto E-commerce ---");
console.log(produto.nome);
console.log("Preço original: R$", produto.preco);
console.log("Preço com desconto: R$", produto.precoComDesconto());
console.log("Em estoque:", produto.estoque, "unidades");
console.log("Avaliação:", produto.avaliacao, "(" + produto.comentarios + " comentários)");

// -------------------------------------------

// 6. OBJETO USUÁRIO COM MÉTODOS
const conta = {
  id: 1,
  titular: "Ana Silva",
  saldo: 1000,
  transacoes: [],
  
  depositar: function(valor) {
    if (valor > 0) {
      this.saldo += valor;
      this.transacoes.push({ tipo: "depósito", valor: valor, data: new Date() });
      return `Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    }
    return "Valor inválido";
  },
  
  sacar: function(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      this.transacoes.push({ tipo: "saque", valor: valor, data: new Date() });
      return `Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    }
    return "Saldo insuficiente";
  },
  
  consultarSaldo: function() {
    return `Saldo: R$ ${this.saldo}`;
  }
};

console.log("\n--- Conta Bancária ---");
console.log(conta.consultarSaldo());
console.log(conta.depositar(500));
console.log(conta.depositar(300));
console.log(conta.sacar(200));
console.log(conta.consultarSaldo());

// -------------------------------------------

// 7. PEDIDO COM MÚLTIPLOS ITENS
const pedido = {
  id: 5001,
  cliente: "Bruno Santos",
  data: new Date('2025-01-15'),
  itens: [
    { produto: "Notebook", quantidade: 1, preco_unitario: 2500 },
    { produto: "Mouse", quantidade: 2, preco_unitario: 50 },
    { produto: "Teclado", quantidade: 1, preco_unitario: 150 }
  ],
  cupom_desconto: 10,
  
  calcularSubtotal: function() {
    return this.itens.reduce((total, item) => {
      return total + (item.quantidade * item.preco_unitario);
    }, 0);
  },
  
  calcularDesconto: function() {
    return this.calcularSubtotal() * (this.cupom_desconto / 100);
  },
  
  calcularTotal: function() {
    return this.calcularSubtotal() - this.calcularDesconto();
  },
  
  resumo: function() {
    return `
      Pedido: ${this.id}
      Cliente: ${this.cliente}
      Subtotal: R$ ${this.calcularSubtotal().toFixed(2)}
      Desconto (${this.cupom_desconto}%): R$ ${this.calcularDesconto().toFixed(2)}
      Total: R$ ${this.calcularTotal().toFixed(2)}
    `;
  }
};

console.log("\n--- Pedido com Itens ---");
console.log(pedido.resumo());

// -------------------------------------------

// 8. CONFIGURAÇÃO DE APLICAÇÃO
const config = {
  app: "Meu App",
  versao: "1.0.0",
  ambiente: "production",
  debug: false,
  
  api: {
    baseUrl: "https://api.exemplo.com",
    timeout: 5000,
    versao: "v1",
    endpoints: {
      usuarios: "/usuarios",
      produtos: "/produtos",
      pedidos: "/pedidos"
    }
  },
  
  temas: ["light", "dark", "auto"],
  temaAtual: "light",
  
  database: {
    host: "localhost",
    port: 5432,
    nome: "meu_app",
    usuario: "admin"
  }
};

console.log("\n--- Configuração ---");
console.log("App:", config.app);
console.log("Versão:", config.versao);
console.log("API URL:", config.api.baseUrl);
console.log("Endpoint usuários:", config.api.endpoints.usuarios);

// -------------------------------------------

// 9. OBJETO COM GETTERS E SETTERS
const carro = {
  _modelo: "Corolla",
  _ano: 2022,
  _velocidade: 0,
  
  get modelo() {
    return this._modelo;
  },
  
  get ano() {
    return this._ano;
  },
  
  get velocidade() {
    return `${this._velocidade} km/h`;
  },
  
  set velocidade(valor) {
    if (valor >= 0 && valor <= 200) {
      this._velocidade = valor;
    }
  },
  
  info: function() {
    return `${this._modelo} (${this._ano}) - Velocidade: ${this.velocidade}`;
  }
};

console.log("\n--- Getters e Setters ---");
console.log(carro.info());
carro.velocidade = 80;
console.log(carro.info());

// -------------------------------------------

// 10. CONSTRUCTOR FUNCTION
function Usuario(nome, email, idade) {
  this.nome = nome;
  this.email = email;
  this.idade = idade;
  this.ativo = true;
  this.dataCriacao = new Date();
  
  this.apresentar = function() {
    return `${this.nome} (${this.email})`;
  };
}

const user1 = new Usuario("Ana", "ana@email.com", 25);
const user2 = new Usuario("Bruno", "bruno@email.com", 28);

console.log("\n--- Constructor Function ---");
console.log(user1.apresentar());
console.log(user2.apresentar());

// -------------------------------------------

// 11. CLASS (ES6)
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
  
  comprar(quantidade) {
    if (quantidade <= this.estoque) {
      this.estoque -= quantidade;
      return `Compra realizada! ${this.estoque} restantes`;
    }
    return "Estoque insuficiente";
  }
  
  obterPreco() {
    return `R$ ${this.preco.toFixed(2)}`;
  }
}

const notebook = new Produto("Notebook", 2500, 10);
const mouse = new Produto("Mouse", 50, 30);

console.log("\n--- Class ---");
console.log(notebook.nome, "-", notebook.obterPreco());
console.log(notebook.comprar(2));
console.log("Restam:", notebook.estoque, "unidades");

// -------------------------------------------

// 12. OBJECT.KEYS, VALUES, ENTRIES
const pessoa2 = {
  nome: "Carlos",
  idade: 30,
  email: "carlos@email.com",
  ativo: true
};

console.log("\n--- Object.keys/values/entries ---");
console.log("Keys:", Object.keys(pessoa2));
console.log("Values:", Object.values(pessoa2));
console.log("Entries:", Object.entries(pessoa2));

// -------------------------------------------

// 13. SPREAD OPERATOR PARA COPIAR OBJETOS
const original = { a: 1, b: 2, c: 3 };
const copia = { ...original };
const modificada = { ...original, d: 4, a: 99 };

console.log("\n--- Spread Operator ---");
console.log("Original:", original);
console.log("Cópia:", copia);
console.log("Modificada:", modificada);

// -------------------------------------------

// 14. OBJECT.ASSIGN PARA MESCLAR
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { a: 99, e: 5 };
const mesclado = Object.assign({}, obj1, obj2, obj3);

console.log("\n--- Object.assign ---");
console.log("Mesclado:", mesclado);

// -------------------------------------------

// 15. VERIFICAR PROPRIEDADES
const obj = { nome: "Ana", idade: 25 };

console.log("\n--- Verificar Propriedades ---");
console.log("'nome' in obj:", "nome" in obj);
console.log("'email' in obj:", "email" in obj);
console.log("hasOwnProperty('nome'):", obj.hasOwnProperty("nome"));
console.log("hasOwnProperty('email'):", obj.hasOwnProperty("email"));
