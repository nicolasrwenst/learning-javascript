// ============================================
// MÓDULOS - EXEMPLOS PRÁTICOS
// ============================================

// NOTA: Este arquivo demonstra os CONCEITOS de módulos.
// Na prática, você criaria arquivos separados e usaria require() ou import.
// Aqui vamos simular o comportamento.

// ============================================
// 1. COMMONJS - EXPORTAR FUNÇÃO
// ============================================

console.log("--- CommonJS - Exportar Função ---");

// Simulando: math.js
const math = {
  somar: (a, b) => a + b,
  subtrair: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => b !== 0 ? a / b : "Erro: Divisão por zero"
};

// Simulando: app.js (require)
const somar = math.somar;
console.log("5 + 3 =", somar(5, 3));

// -------------------------------------------

// 2. COMMONJS - EXPORTAR OBJETO
console.log("\n--- CommonJS - Exportar Objeto ---");

// Simulando: utils.js
const utils = {
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  reverse: (str) => str.split("").reverse().join(""),
  repeat: (str, n) => str.repeat(n)
};

// Simulando: app.js
console.log("Capitalize:", utils.capitalize("javascript"));
console.log("Reverse:", utils.reverse("hello"));
console.log("Repeat:", utils.repeat("ha", 3));

// -------------------------------------------

// 3. COMMONJS - EXPORTAR CLASSE
console.log("\n--- CommonJS - Exportar Classe ---");

// Simulando: usuario.js
class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
    this.criado = new Date();
  }
  
  apresentar() {
    return `Olá, sou ${this.nome}`;
  }
  
  enviarEmail(assunto) {
    return `Email enviado para ${this.email}: ${assunto}`;
  }
}

// Simulando: app.js
const usuario = new Usuario("Bruno", "bruno@email.com");
console.log(usuario.apresentar());
console.log(usuario.enviarEmail("Bem-vindo!"));

// -------------------------------------------

// 4. IMPORTAÇÃO DESTRUTIVA
console.log("\n--- Importação Destrutiva ---");

// Simulando: math.js exporta múltiplas funções
const mathModule = {
  somar: (a, b) => a + b,
  subtrair: (a, b) => a - b,
  multiplicar: (a, b) => a * b
};

// Simulando: require com desestruturação
const { somar: soma, subtrair: subtrai } = mathModule;

console.log("Soma:", soma(10, 5));
console.log("Subtração:", subtrai(10, 5));

// -------------------------------------------

// 5. MÓDULO COM ESTADO
console.log("\n--- Módulo com Estado ---");

// Simulando: contador.js
const contadorModule = (function() {
  let count = 0;
  
  return {
    incrementar: () => ++count,
    decrementar: () => --count,
    obterValor: () => count,
    resetar: () => { count = 0; }
  };
})();

// Simulando: app.js
console.log("Inicial:", contadorModule.obterValor());
console.log("Após incrementar:", contadorModule.incrementar());
console.log("Após incrementar:", contadorModule.incrementar());
console.log("Após decrementar:", contadorModule.decrementar());
console.log("Valor final:", contadorModule.obterValor());

// -------------------------------------------

// 6. MÓDULO COM CONFIGURAÇÃO
console.log("\n--- Módulo com Configuração ---");

// Simulando: config.js
const config = {
  apiUrl: "https://api.example.com",
  ambiente: "desenvolvimento",
  debug: true,
  timeout: 5000
};

// Simulando: app.js
console.log("API URL:", config.apiUrl);
console.log("Ambiente:", config.ambiente);
console.log("Debug ativo:", config.debug);

// -------------------------------------------

// 7. MÓDULO DE VALIDAÇÃO
console.log("\n--- Módulo de Validação ---");

// Simulando: validador.js
const validador = {
  email: (email) => {
    return email.includes("@") && email.includes(".");
  },
  
  senha: (senha) => {
    return senha.length >= 6;
  },
  
  cpf: (cpf) => {
    return cpf.length === 11 && cpf.match(/^\d+$/);
  },
  
  telefone: (telefone) => {
    return telefone.length >= 10;
  }
};

// Simulando: app.js
console.log("Email válido:", validador.email("carlos@email.com"));
console.log("Senha válida:", validador.senha("123456"));
console.log("CPF válido:", validador.cpf("12345678901"));
console.log("Telefone válido:", validador.telefone("11987654321"));

// -------------------------------------------

// 8. MÓDULO DE DATA/HORA
console.log("\n--- Módulo de Data/Hora ---");

// Simulando: dataUtil.js
const dataUtil = {
  agora: () => new Date(),
  
  formatarData: (data) => {
    return data.toLocaleDateString("pt-BR");
  },
  
  formatarHora: (data) => {
    return data.toLocaleTimeString("pt-BR");
  },
  
  diaSegundaDisso: (data, dias) => {
    const nova = new Date(data);
    nova.setDate(nova.getDate() + dias);
    return nova;
  }
};

// Simulando: app.js
const agora = dataUtil.agora();
console.log("Data:", dataUtil.formatarData(agora));
console.log("Hora:", dataUtil.formatarHora(agora));
console.log("Daqui a 7 dias:", dataUtil.formatarData(dataUtil.diaSegundaDisso(agora, 7)));

// -------------------------------------------

// 9. MÓDULO DE AUTENTICAÇÃO
console.log("\n--- Módulo de Autenticação ---");

// Simulando: auth.js
const auth = (function() {
  let usuarioLogado = null;
  
  return {
    login: (email, senha) => {
      if (email && senha) {
        usuarioLogado = { email, logadoEm: new Date() };
        return `Bem-vindo, ${email}!`;
      }
      return "Credenciais inválidas";
    },
    
    logout: () => {
      usuarioLogado = null;
      return "Deslogado com sucesso";
    },
    
    usuarioAtual: () => {
      return usuarioLogado ? usuarioLogado.email : "Não autenticado";
    },
    
    estaLogado: () => {
      return usuarioLogado !== null;
    }
  };
})();

// Simulando: app.js
console.log(auth.login("diana@email.com", "senha123"));
console.log("Usuário atual:", auth.usuarioAtual());
console.log("Está logado:", auth.estaLogado());
console.log(auth.logout());
console.log("Está logado:", auth.estaLogado());

// -------------------------------------------

// 10. MÓDULO FACTORY
console.log("\n--- Módulo Factory ---");

// Simulando: produtoFactory.js
const produtoFactory = {
  criarProduto: (nome, preco, categoria) => {
    return {
      id: Math.random().toString(36),
      nome,
      preco,
      categoria,
      criado: new Date(),
      aplicarDesconto: (percentual) => {
        return preco * (1 - percentual / 100);
      }
    };
  }
};

// Simulando: app.js
const produto1 = produtoFactory.criarProduto("Notebook", 3000, "Eletrônicos");
const produto2 = produtoFactory.criarProduto("Mouse", 50, "Periféricos");

console.log("Produto 1:", produto1.nome, "- R$", produto1.preco);
console.log("Com 10% desconto:", produto1.aplicarDesconto(10));
console.log("Produto 2:", produto2.nome, "- R$", produto2.preco);

// -------------------------------------------

// 11. RE-EXPORTAÇÃO (INDEX PATTERN)
console.log("\n--- Re-exportação (Index Pattern) ---");

// Simulando: utils/index.js que re-exporta tudo
const utilsIndex = {
  math: {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b
  },
  string: {
    capitalize: (s) => s.charAt(0).toUpperCase() + s.slice(1),
    reverse: (s) => s.split("").reverse().join("")
  },
  data: {
    agora: () => new Date(),
    formatada: () => new Date().toLocaleDateString("pt-BR")
  }
};

// Simulando: app.js
console.log("Soma:", utilsIndex.math.somar(5, 3));
console.log("Capitalize:", utilsIndex.string.capitalize("hello"));
console.log("Data formatada:", utilsIndex.data.formatada());

// -------------------------------------------

// 12. DEPENDÊNCIA ENTRE MÓDULOS
console.log("\n--- Dependência entre Módulos ---");

// Simulando: logger.js
const logger = {
  info: (msg) => console.log("[INFO]", msg),
  error: (msg) => console.log("[ERROR]", msg),
  warn: (msg) => console.log("[WARN]", msg)
};

// Simulando: usuario.js (que depende de logger)
const usuarioModule = {
  criar: (dados) => {
    logger.info(`Criando usuário: ${dados.email}`);
    return { ...dados, id: 1 };
  },
  
  deletar: (id) => {
    logger.warn(`Deletando usuário ${id}`);
    return true;
  }
};

// Simulando: app.js
usuarioModule.criar({ email: "eduardo@email.com", nome: "Eduardo" });
usuarioModule.deletar(1);

// -------------------------------------------

// 13. MÓDULO COM ENCAPSULAMENTO
console.log("\n--- Encapsulamento ---");

// Simulando: conta.js
const contaModule = (function() {
  let saldo = 1000;  // Privado
  
  return {
    depositar: (valor) => {
      saldo += valor;
      return `Depósito de R$ ${valor}. Novo saldo: R$ ${saldo}`;
    },
    
    sacar: (valor) => {
      if (valor <= saldo) {
        saldo -= valor;
        return `Saque de R$ ${valor}. Novo saldo: R$ ${saldo}`;
      }
      return "Saldo insuficiente";
    },
    
    consultarSaldo: () => `Saldo atual: R$ ${saldo}`
  };
})();

// Simulando: app.js
console.log(contaModule.depositar(500));
console.log(contaModule.sacar(200));
console.log(contaModule.consultarSaldo());
console.log("Saldo privado não é acessível:", typeof contaModule.saldo);

// -------------------------------------------

// 14. MÓDULO COM MIDDLEWARE PATTERN
console.log("\n--- Middleware Pattern ---");

// Simulando: middlewares.js
const middlewares = {
  autenticacao: (usuario) => {
    return usuario && usuario.token ? true : false;
  },
  
  autorizacao: (usuario, permissao) => {
    return usuario && usuario.permissoes.includes(permissao);
  },
  
  validarDados: (dados, schema) => {
    return Object.keys(schema).every(key => key in dados);
  }
};

// Simulando: app.js
const usuario_teste = {
  token: "abc123",
  permissoes: ["ler", "escrever"]
};

console.log("Autenticado:", middlewares.autenticacao(usuario_teste));
console.log("Autorizado para escrever:", middlewares.autorizacao(usuario_teste, "escrever"));
console.log("Autorizado para deletar:", middlewares.autorizacao(usuario_teste, "deletar"));

// -------------------------------------------

// 15. MÓDULO DE TRANSFORMAÇÃO
console.log("\n--- Módulo de Transformação ---");

// Simulando: transformer.js
const transformer = {
  paraEmail: (usuario) => ({
    ...usuario,
    email: usuario.email.toLowerCase(),
    verificado: false
  }),
  
  paraJSON: (objeto) => JSON.stringify(objeto, null, 2),
  
  paraCSV: (dados) => {
    return dados.map(d => `${d.id},${d.nome},${d.email}`).join("\n");
  }
};

// Simulando: app.js
const usuarioParaEmail = transformer.paraEmail({
  id: 1,
  nome: "Fernanda",
  email: "FERNANDA@EMAIL.COM"
});
console.log("Para email:", usuarioParaEmail);

// -------------------------------------------

// 16. MÓDULO COM CACHE
console.log("\n--- Módulo com Cache ---");

// Simulando: cache.js
const cacheModule = (function() {
  const cache = {};
  
  return {
    set: (chave, valor) => {
      cache[chave] = valor;
    },
    
    get: (chave) => {
      return cache[chave] || null;
    },
    
    existe: (chave) => {
      return chave in cache;
    },
    
    limpar: () => {
      Object.keys(cache).forEach(k => delete cache[k]);
    },
    
    tamanho: () => Object.keys(cache).length
  };
})();

// Simulando: app.js
cacheModule.set("usuario:1", { id: 1, nome: "Gustavo" });
console.log("Cache tamanho:", cacheModule.tamanho());
console.log("Valor em cache:", cacheModule.get("usuario:1"));
console.log("Existe?", cacheModule.existe("usuario:1"));

// -------------------------------------------

// 17. MÓDULO COM SINGLETON
console.log("\n--- Singleton Pattern ---");

// Simulando: database.js
const database = (function() {
  let instancia = null;
  
  function criarInstancia() {
    return {
      conectado: true,
      conectar: () => console.log("Conectado ao banco"),
      desconectar: () => console.log("Desconectado")
    };
  }
  
  return {
    obterInstancia: () => {
      if (!instancia) {
        instancia = criarInstancia();
      }
      return instancia;
    }
  };
})();

// Simulando: app.js
const db1 = database.obterInstancia();
const db2 = database.obterInstancia();
console.log("Mesma instância:", db1 === db2);  // true

// -------------------------------------------

// 18. MÓDULO COM PROXY
console.log("\n--- Módulo com Proxy ---");

// Simulando: userService.js
const userService = {
  usuarios: [
    { id: 1, nome: "Helena" },
    { id: 2, nome: "Igor" }
  ],
  
  buscar: (id) => {
    return userService.usuarios.find(u => u.id === id);
  }
};

// Simulando: app.js
console.log("Usuário 1:", userService.buscar(1));
console.log("Usuário 3:", userService.buscar(3));

// -------------------------------------------

// 19. MÓDULO COM PROMESSAS
console.log("\n--- Módulo com Promises ---");

// Simulando: api.js
const apiModule = {
  fetch: (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ status: 200, data: "Dados da API" });
      }, 500);
    });
  }
};

// Simulando: app.js
apiModule.fetch("https://api.example.com").then(response => {
  console.log("Response:", response);
});

// -------------------------------------------

// 20. MÓDULO COM ASYNC/AWAIT
console.log("\n--- Módulo com Async/Await ---");

// Simulando: fileSystem.js
const fileSystemModule = {
  ler: async (arquivo) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Conteúdo de ${arquivo}`);
      }, 300);
    });
  },
  
  escrever: async (arquivo, dados) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`${arquivo} escrito com sucesso`);
      }, 300);
    });
  }
};

// Simulando: app.js
async function operarArquivos() {
  const conteudo = await fileSystemModule.ler("arquivo.txt");
  console.log(conteudo);
  
  const resultado = await fileSystemModule.escrever("novo.txt", "Dados");
  console.log(resultado);
}

operarArquivos();
