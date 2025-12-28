// ============================================
// PROMISES - EXEMPLOS PRÁTICOS
// ============================================

// 1. PROMISE BÁSICA
console.log("--- Promise Básica ---");
const minhaPromise = new Promise((resolve, reject) => {
  resolve("Sucesso!");
});

minhaPromise.then(resultado => {
  console.log(resultado);
});

// -------------------------------------------

// 2. PROMISE COM TIMEOUT
console.log("\n--- Promise com Timeout ---");
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Executado após 1 segundo");
  }, 1000);
});

promise2.then(resultado => {
  console.log(resultado);
});

// -------------------------------------------

// 3. PROMISE REJEITADA
console.log("\n--- Promise Rejeitada ---");
const promise3 = new Promise((resolve, reject) => {
  reject("Algo deu errado!");
});

promise3
  .then(resultado => {
    console.log("Sucesso:", resultado);
  })
  .catch(erro => {
    console.log("Erro capturado:", erro);
  });

// -------------------------------------------

// 4. PROMISE COM CONDIÇÃO
console.log("\n--- Promise com Condição ---");
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    if (id > 0) {
      const usuario = { id, nome: "Ana", email: "ana@email.com" };
      resolve(usuario);
    } else {
      reject("ID inválido");
    }
  });
}

buscarUsuario(1)
  .then(usuario => {
    console.log("Usuário encontrado:", usuario.nome);
  })
  .catch(erro => {
    console.log("Erro:", erro);
  });

// -------------------------------------------

// 5. .FINALLY() - SEMPRE EXECUTA
console.log("\n--- Finally ---");
const promise5 = new Promise((resolve, reject) => {
  resolve("Concluído");
});

promise5
  .then(resultado => {
    console.log("Então:", resultado);
  })
  .finally(() => {
    console.log("Sempre executa!");
  });

// -------------------------------------------

// 6. ENCADEAMENTO DE PROMISES
console.log("\n--- Encadeamento ---");
const promise6 = new Promise((resolve, reject) => {
  resolve(10);
});

promise6
  .then(valor => {
    console.log("Valor inicial:", valor);
    return valor * 2;
  })
  .then(valor => {
    console.log("Após dobrar:", valor);
    return valor + 5;
  })
  .then(valor => {
    console.log("Resultado final:", valor);
  });

// -------------------------------------------

// 7. PROMISE.RESOLVE()
console.log("\n--- Promise.resolve() ---");
Promise.resolve("Valor direto")
  .then(valor => {
    console.log("Promise.resolve:", valor);
  });

// -------------------------------------------

// 8. PROMISE.REJECT()
console.log("\n--- Promise.reject() ---");
Promise.reject("Erro direto")
  .catch(erro => {
    console.log("Promise.reject capturado:", erro);
  });

// -------------------------------------------

// 9. PROMISE.ALL() - TODAS AS PROMISES
console.log("\n--- Promise.all() ---");
const promise9a = Promise.resolve("Resultado 1");
const promise9b = Promise.resolve("Resultado 2");
const promise9c = Promise.resolve("Resultado 3");

Promise.all([promise9a, promise9b, promise9c])
  .then(resultados => {
    console.log("Todos os resultados:", resultados);
  });

// -------------------------------------------

// 10. PROMISE.ALL() COM ERRO
console.log("\n--- Promise.all() com Erro ---");
const promise10a = Promise.resolve("Ok");
const promise10b = Promise.reject("Erro aqui");
const promise10c = Promise.resolve("Ok");

Promise.all([promise10a, promise10b, promise10c])
  .then(resultados => {
    console.log("Todos resolvidos:", resultados);
  })
  .catch(erro => {
    console.log("Uma promise falhou:", erro);
  });

// -------------------------------------------

// 11. PROMISE.RACE() - PRIMEIRA A RESOLVER
console.log("\n--- Promise.race() ---");
const promise11a = new Promise((resolve) => {
  setTimeout(() => resolve("A"), 100);
});

const promise11b = new Promise((resolve) => {
  setTimeout(() => resolve("B"), 50);
});

Promise.race([promise11a, promise11b])
  .then(resultado => {
    console.log("Primeira a resolver:", resultado);  // "B"
  });

// -------------------------------------------

// 12. PROMISE.ALLSETTLED() - TODAS COM STATUS
console.log("\n--- Promise.allSettled() ---");
const promise12a = Promise.resolve("Sucesso");
const promise12b = Promise.reject("Erro");
const promise12c = Promise.resolve("OK");

Promise.allSettled([promise12a, promise12b, promise12c])
  .then(resultados => {
    console.log("Todos os statuses:");
    resultados.forEach((resultado, index) => {
      console.log(`  ${index}: ${resultado.status}`, resultado.value || resultado.reason);
    });
  });

// -------------------------------------------

// 13. PROMISE.ANY() - PRIMEIRA RESOLVIDA
console.log("\n--- Promise.any() ---");
const promise13a = Promise.reject("Erro 1");
const promise13b = new Promise((resolve) => {
  setTimeout(() => resolve("Sucesso"), 100);
});
const promise13c = Promise.reject("Erro 2");

Promise.any([promise13a, promise13b, promise13c])
  .then(resultado => {
    console.log("Primeira resolvida:", resultado);
  })
  .catch(erro => {
    console.log("Todas rejeitadas");
  });

// -------------------------------------------

// 14. CONVERSOR DE CALLBACK PARA PROMISE
console.log("\n--- Converter Callback para Promise ---");
function lerArquivoCallback(callback) {
  setTimeout(() => {
    callback(null, "Conteúdo do arquivo");
  }, 500);
}

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    lerArquivoCallback((erro, dados) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(dados);
      }
    });
  });
}

lerArquivoPromise()
  .then(dados => {
    console.log("Arquivo lido:", dados);
  });

// -------------------------------------------

// 15. PROCESSAMENTO DE DADOS COM PROMISES
console.log("\n--- Processamento com Promises ---");
function buscarDados() {
  return Promise.resolve([
    { id: 1, nome: "Bruno" },
    { id: 2, nome: "Carlos" }
  ]);
}

function buscarDetalhes(id) {
  return Promise.resolve({ email: `user${id}@email.com`, ativo: true });
}

buscarDados()
  .then(usuarios => {
    console.log("Usuários:", usuarios);
    return buscarDetalhes(usuarios[0].id);
  })
  .then(detalhes => {
    console.log("Detalhes:", detalhes);
  });

// -------------------------------------------

// 16. TRATAMENTO DE ERRO EM CADEIA
console.log("\n--- Erro em Cadeia ---");
new Promise((resolve, reject) => {
  reject("Erro inicial");
})
  .then(resultado => {
    console.log("Nunca executará");
    return resultado;
  })
  .catch(erro => {
    console.log("Erro capturado:", erro);
    return "Recuperado";
  })
  .then(resultado => {
    console.log("Continuando com:", resultado);
  });

// -------------------------------------------

// 17. SIMULAR REQUISIÇÃO HTTP COM PROMISE
console.log("\n--- Simular Requisição HTTP ---");
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes("users")) {
        resolve({
          status: 200,
          data: [
            { id: 1, name: "Diana" },
            { id: 2, name: "Eduardo" }
          ]
        });
      } else {
        reject("URL inválida");
      }
    }, 500);
  });
}

fetchData("https://api.example.com/users")
  .then(response => {
    console.log("Status:", response.status);
    console.log("Dados:", response.data);
  })
  .catch(erro => {
    console.log("Erro na requisição:", erro);
  });

// -------------------------------------------

// 18. PROMISE COM MÚLTIPLOS THEN
console.log("\n--- Múltiplos Then ---");
const promise18 = Promise.resolve(5);

promise18
  .then(n => {
    console.log("Valor:", n);
    return n + 10;
  })
  .then(n => {
    console.log("Após +10:", n);
    return n * 2;
  })
  .then(n => {
    console.log("Após *2:", n);
    return n - 5;
  })
  .then(n => {
    console.log("Resultado final:", n);
  });

// -------------------------------------------

// 19. PROMISE COM TIMEOUT CUSTOMIZADO
console.log("\n--- Timeout Customizado ---");
function comTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((resolve, reject) =>
      setTimeout(() => reject("Timeout!"), ms)
    )
  ]);
}

comTimeout(
  new Promise(resolve => setTimeout(() => resolve("Ok"), 2000)),
  1000
)
  .then(resultado => console.log(resultado))
  .catch(erro => console.log("Erro:", erro));

// -------------------------------------------

// 20. PROMISE CRIANDO SEQUÊNCIA
console.log("\n--- Sequência de Promises ---");
function etapa1() {
  return Promise.resolve("Etapa 1 completa");
}

function etapa2(msg1) {
  return Promise.resolve(msg1 + " → Etapa 2 completa");
}

function etapa3(msg2) {
  return Promise.resolve(msg2 + " → Etapa 3 completa");
}

etapa1()
  .then(etapa2)
  .then(etapa3)
  .then(resultado => {
    console.log(resultado);
  });
