// ============================================
// TRATAMENTO DE ERROS - EXEMPLOS PRÁTICOS
// ============================================

// 1. TRY/CATCH BÁSICO
console.log("--- Try/Catch Básico ---");
try {
  console.log("Tentando executar código");
  throw new Error("Erro simulado");
  console.log("Isto não executa");
} catch (erro) {
  console.log("Erro capturado:", erro.message);
}

// -------------------------------------------

// 2. ERRO NÃO TRATADO (COMENTADO PARA NÃO QUEBRAR)
console.log("\n--- Tipo de Erro (TypeError) ---");
try {
  const obj = null;
  obj.propriedade;  // TypeError
} catch (erro) {
  console.log("Tipo de erro:", erro.name);
  console.log("Mensagem:", erro.message);
}

// -------------------------------------------

// 3. TRY/FINALLY (SEM CATCH)
console.log("\n--- Try/Finally ---");
try {
  console.log("Executando código");
  // Sem erro
} finally {
  console.log("Finally sempre executa!");
}

// -------------------------------------------

// 4. THROW CUSTOMIZADO
console.log("\n--- Throw Customizado ---");
function validarIdade(idade) {
  if (idade < 18) {
    throw new Error("Deve ter pelo menos 18 anos");
  }
  return "Validação OK";
}

try {
  console.log(validarIdade(16));
} catch (erro) {
  console.log("Validação falhou:", erro.message);
}

// -------------------------------------------

// 5. THROW CUSTOMIZADO COM SUCESSO
console.log("\n--- Validação com Sucesso ---");
try {
  console.log(validarIdade(25));
} catch (erro) {
  console.log("Erro:", erro.message);
}

// -------------------------------------------

// 6. MÚLTIPLOS THROWS
console.log("\n--- Múltiplos Throws ---");
function validarEmail(email) {
  if (!email) {
    throw new Error("Email é obrigatório");
  }
  if (!email.includes("@")) {
    throw new Error("Email deve conter @");
  }
  if (!email.includes(".")) {
    throw new Error("Email deve conter ponto");
  }
  return "Email válido";
}

try {
  console.log(validarEmail("ana"));
} catch (erro) {
  console.log("Erro:", erro.message);
}

// -------------------------------------------

// 7. OBJETO ERROR
console.log("\n--- Objeto Error ---");
const erro = new Error("Teste de erro");
console.log("Nome:", erro.name);
console.log("Mensagem:", erro.message);
console.log("Stack:", erro.stack.split("\n")[0]);  // Primeira linha

// -------------------------------------------

// 8. TYPES OF ERRORS
console.log("\n--- Tipos de Erros ---");

// TypeError
try {
  const arr = null;
  arr.map(x => x);
} catch (erro) {
  console.log("TypeError:", erro.name);
}

// ReferenceError (comentado)
// try {
//   console.log(varivelQueNaoExiste);
// } catch (erro) {
//   console.log("ReferenceError:", erro.name);
// }

// -------------------------------------------

// 9. THROW STRING (NÃO RECOMENDADO)
console.log("\n--- Throw String ---");
try {
  throw "Erro como string";
} catch (erro) {
  console.log("Erro capturado:", erro);
}

// -------------------------------------------

// 10. FINALLY COM CLEANUP
console.log("\n--- Finally com Limpeza ---");
let arquivo = "arquivo.txt";

try {
  console.log("Abrindo:", arquivo);
  throw new Error("Erro ao processar");
} catch (erro) {
  console.log("Erro:", erro.message);
} finally {
  console.log("Fechando:", arquivo);
}

// -------------------------------------------

// 11. RELANÇAR ERRO
console.log("\n--- Relançar Erro ---");
function processarDados(dados) {
  try {
    if (!dados) {
      throw new Error("Dados ausentes");
    }
    return dados.toUpperCase();
  } catch (erro) {
    console.log("Erro no processamento:", erro.message);
    throw erro;  // Relança para quem chamou
  }
}

try {
  processarDados(null);
} catch (erro) {
  console.log("Erro capturado no nível superior");
}

// -------------------------------------------

// 12. JSON.PARSE COM ERRO
console.log("\n--- JSON.parse com Try/Catch ---");
const jsonString = '{ "nome": "Bruno" }';
const jsonInvalido = '{ nome: "Bruno" }';  // Inválido

try {
  const dados = JSON.parse(jsonString);
  console.log("JSON válido:", dados);
} catch (erro) {
  console.log("Erro ao parsear JSON");
}

try {
  const dados = JSON.parse(jsonInvalido);
} catch (erro) {
  console.log("Erro capturado:", erro.message);
}

// -------------------------------------------

// 13. TRY/CATCH EM FUNÇÃO
console.log("\n--- Try/Catch em Função ---");
function operacaoSegura(valor) {
  try {
    const resultado = valor / 2;
    if (isNaN(resultado)) {
      throw new Error("Resultado inválido");
    }
    return resultado;
  } catch (erro) {
    console.log("Erro:", erro.message);
    return null;
  }
}

console.log("10 / 2 =", operacaoSegura(10));
console.log("'abc' / 2 =", operacaoSegura("abc"));

// -------------------------------------------

// 14. ASYNC/AWAIT COM TRY/CATCH
console.log("\n--- Async/Await com Try/Catch ---");
async function buscarDadosSeguro() {
  try {
    const dados = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Erro na busca");
      }, 500);
    });
    return dados;
  } catch (erro) {
    console.log("Erro capturado:", erro);
    return null;
  }
}

buscarDadosSeguro();

// -------------------------------------------

// 15. PROMISE COM CATCH
console.log("\n--- Promise com .catch() ---");
new Promise((resolve, reject) => {
  reject("Erro na promise");
})
  .then(resultado => {
    console.log("Sucesso:", resultado);
  })
  .catch(erro => {
    console.log("Erro capturado:", erro);
  });

// -------------------------------------------

// 16. ERRO CUSTOMIZADO COM CLASSE
console.log("\n--- Classe de Erro Customizado ---");
class ErroValidacao extends Error {
  constructor(mensagem, campo) {
    super(mensagem);
    this.name = "ErroValidacao";
    this.campo = campo;
  }
}

try {
  throw new ErroValidacao("Email inválido", "email");
} catch (erro) {
  if (erro instanceof ErroValidacao) {
    console.log(`Erro no campo '${erro.campo}': ${erro.message}`);
  }
}

// -------------------------------------------

// 17. VALIDAÇÃO COM MÚLTIPLOS ERROS
console.log("\n--- Múltiplas Validações ---");
function validarFormulario(dados) {
  const erros = [];
  
  if (!dados.nome) {
    erros.push("Nome é obrigatório");
  }
  
  if (!dados.email) {
    erros.push("Email é obrigatório");
  } else if (!dados.email.includes("@")) {
    erros.push("Email inválido");
  }
  
  if (!dados.senha || dados.senha.length < 6) {
    erros.push("Senha deve ter pelo menos 6 caracteres");
  }
  
  if (erros.length > 0) {
    throw new Error(`Validação falhou: ${erros.join(", ")}`);
  }
  
  return true;
}

try {
  validarFormulario({ nome: "Carlos", email: "carlos" });
} catch (erro) {
  console.log(erro.message);
}

// -------------------------------------------

// 18. OPERAÇÃO COM FALLBACK
console.log("\n--- Fallback em Erro ---");
function buscarDadosComFallback() {
  try {
    const dados = JSON.parse("{ inválido }");
    return dados;
  } catch (erro) {
    console.log("Erro, usando dados padrão");
    return { padrao: true, dados: [] };
  }
}

const resultado = buscarDadosComFallback();
console.log("Resultado:", resultado);

// -------------------------------------------

// 19. TRATAMENTO EM CASCATA
console.log("\n--- Tratamento em Cascata ---");
async function processoCompleto() {
  try {
    // Etapa 1
    const dados = await new Promise(resolve => {
      setTimeout(() => resolve({ id: 1 }), 100);
    });
    console.log("Etapa 1: OK");
    
    // Etapa 2
    if (!dados.id) {
      throw new Error("ID ausente");
    }
    console.log("Etapa 2: OK");
    
    // Etapa 3
    const processado = await new Promise(resolve => {
      setTimeout(() => resolve("Processado"), 100);
    });
    console.log("Etapa 3: OK");
    
    return processado;
  } catch (erro) {
    console.log("Erro no processo:", erro.message);
    return "Processo falhou";
  }
}

processoCompleto().then(resultado => {
  console.log("Resultado final:", resultado);
});

// -------------------------------------------

// 20. ERRO COM CONTEXTO
console.log("\n--- Erro com Contexto ---");
function buscarDadoComContexto(id) {
  try {
    if (id < 0) {
      const erro = new Error(`ID inválido: ${id}`);
      erro.statusCode = 400;
      erro.campo = "id";
      throw erro;
    }
    return { id, dados: "Sucesso" };
  } catch (erro) {
    console.log("Erro:", erro.message);
    console.log("Status Code:", erro.statusCode);
    console.log("Campo:", erro.campo);
  }
}

buscarDadoComContexto(-1);
