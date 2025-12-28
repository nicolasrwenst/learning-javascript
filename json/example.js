// ============================================
// JSON - EXEMPLOS PRÁTICOS
// ============================================

// 1. JSON.STRINGIFY BÁSICO
console.log("--- JSON.stringify Básico ---");
const usuario = {
  nome: "Ana",
  email: "ana@email.com",
  idade: 25
};

const jsonString = JSON.stringify(usuario);
console.log("JSON String:", jsonString);
console.log("Tipo:", typeof jsonString);

// -------------------------------------------

// 2. JSON.STRINGIFY COM FORMATAÇÃO
console.log("\n--- JSON com Formatação ---");
const jsonFormatado = JSON.stringify(usuario, null, 2);
console.log(jsonFormatado);

// -------------------------------------------

// 3. JSON.PARSE BÁSICO
console.log("\n--- JSON.parse Básico ---");
const jsonStr = '{"nome":"Bruno","email":"bruno@email.com","ativo":true}';
const usuarioParsed = JSON.parse(jsonStr);
console.log("Nome:", usuarioParsed.nome);
console.log("Email:", usuarioParsed.email);
console.log("Ativo:", usuarioParsed.ativo);

// -------------------------------------------

// 4. ROUND-TRIP (Stringify → Parse)
console.log("\n--- Round-trip ---");
const original = {
  id: 1,
  nome: "Carlos",
  ativo: true
};

const json = JSON.stringify(original);
const restaurado = JSON.parse(json);

console.log("Original:", original);
console.log("JSON:", json);
console.log("Restaurado:", restaurado);
console.log("São iguais?", JSON.stringify(original) === JSON.stringify(restaurado));

// -------------------------------------------

// 5. ARRAY EM JSON
console.log("\n--- Array em JSON ---");
const usuarios = [
  { id: 1, nome: "Diana" },
  { id: 2, nome: "Eduardo" },
  { id: 3, nome: "Fernanda" }
];

const jsonArray = JSON.stringify(usuarios, null, 2);
console.log(jsonArray);

// Parse de volta
const usuariosRestaurados = JSON.parse(jsonArray);
console.log("Primeiro usuário:", usuariosRestaurados[0].nome);

// -------------------------------------------

// 6. OBJETO ANINHADO
console.log("\n--- Objeto Aninhado ---");
const usuario2 = {
  id: 1,
  nome: "Gustavo",
  contato: {
    email: "gustavo@email.com",
    telefone: "11-98765-4321"
  },
  endereco: {
    rua: "Rua A",
    cidade: "São Paulo",
    estado: "SP"
  }
};

const jsonAninhado = JSON.stringify(usuario2, null, 2);
console.log(jsonAninhado);

// -------------------------------------------

// 7. TRATAMENTO DE ERRO
console.log("\n--- Tratamento de Erro ---");
const jsonInvalido = '{ nome: "Helena", idade: 28 }';  // Inválido (sem aspas)

try {
  const obj = JSON.parse(jsonInvalido);
  console.log("Parsado com sucesso");
} catch (erro) {
  console.log("Erro ao parsear JSON:", erro.message);
}

// -------------------------------------------

// 8. VALIDAR JSON
console.log("\n--- Validar JSON ---");
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (erro) {
    return false;
  }
}

console.log("JSON válido:", isValidJSON('{"nome":"Igor"}'));
console.log("JSON inválido:", isValidJSON("{ inválido }"));

// -------------------------------------------

// 9. JSON COM TIPOS
console.log("\n--- JSON com Diferentes Tipos ---");
const dados = {
  string: "texto",
  numero: 42,
  decimal: 3.14,
  booleanoTrue: true,
  booleanoFalse: false,
  nulo: null,
  array: [1, 2, 3],
  objeto: { chave: "valor" }
};

const jsonTipos = JSON.stringify(dados, null, 2);
console.log(jsonTipos);

// -------------------------------------------

// 10. REPLACER - FILTRAR PROPRIEDADES
console.log("\n--- Replacer Function ---");
const usuario3 = {
  id: 1,
  nome: "Joana",
  email: "joana@email.com",
  senha: "secreta123"
};

// Excluir senha
const jsonSeguro = JSON.stringify(usuario3, (chave, valor) => {
  if (chave === "senha") {
    return undefined;  // Omite a propriedade
  }
  return valor;
});

console.log("Com replacer:", jsonSeguro);

// -------------------------------------------

// 11. REPLACER - ARRAY DE CHAVES
console.log("\n--- Replacer Array ---");
const jsonSelecionado = JSON.stringify(usuario3, ["id", "nome", "email"], 2);
console.log("Apenas id, nome, email:");
console.log(jsonSelecionado);

// -------------------------------------------

// 12. DEEP COPY COM JSON
console.log("\n--- Deep Copy com JSON ---");
const original2 = {
  nome: "Keith",
  endereco: { cidade: "Rio", estado: "RJ" }
};

// Shallow copy (não funciona bem com objetos aninhados)
const shallow = { ...original2 };
shallow.endereco.cidade = "Brasília";

console.log("Original city:", original2.endereco.cidade);  // Mudou! (Brasília)

// Deep copy com JSON
const original3 = {
  nome: "Laura",
  endereco: { cidade: "Belo Horizonte", estado: "MG" }
};

const deep = JSON.parse(JSON.stringify(original3));
deep.endereco.cidade = "Brasília";

console.log("Original city:", original3.endereco.cidade);  // "Belo Horizonte"
console.log("Deep copy city:", deep.endereco.cidade);      // "Brasília"

// -------------------------------------------

// 13. REVIVER - CONVERTER TIPOS
console.log("\n--- Reviver Function ---");
const jsonData = '{"data":"2025-01-15","valor":1000}';

// Sem reviver
const obj1 = JSON.parse(jsonData);
console.log("Tipo de data:", typeof obj1.data);  // "string"

// Com reviver - converter string para Date
const obj2 = JSON.parse(jsonData, (chave, valor) => {
  if (chave === "data" && typeof valor === "string") {
    return new Date(valor);
  }
  return valor;
});

console.log("Tipo de data (reviver):", obj2.data instanceof Date);
console.log("Data formatada:", obj2.data.toLocaleDateString("pt-BR"));

// -------------------------------------------

// 14. API RESPONSE SIMULADA
console.log("\n--- API Response ---");
const apiResponseString = `{
  "status": 200,
  "success": true,
  "data": {
    "usuario": {
      "id": 1,
      "nome": "Monica",
      "email": "monica@email.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  }
}`;

const apiResponse = JSON.parse(apiResponseString);
console.log("Status:", apiResponse.status);
console.log("Token:", apiResponse.data.token.substring(0, 20) + "...");

// -------------------------------------------

// 15. COMPARAR OBJETOS
console.log("\n--- Comparar Objetos com JSON ---");
const obj_a = { nome: "Nicolas", idade: 30 };
const obj_b = { nome: "Nicolas", idade: 30 };
const obj_c = { nome: "Nicolas", idade: 31 };

console.log("obj_a === obj_b:", obj_a === obj_b);  // false (diferentes referências)
console.log("Iguais como JSON:", JSON.stringify(obj_a) === JSON.stringify(obj_b));  // true
console.log("obj_a igual a obj_c:", JSON.stringify(obj_a) === JSON.stringify(obj_c));  // false

// -------------------------------------------

// 16. SALVAR EM LOCALSTORAGE
console.log("\n--- localStorage Simulado ---");
// Simulando localStorage
const mockStorage = {};

const usuario4 = {
  id: 1,
  nome: "Olivia",
  email: "olivia@email.com"
};

// Salvar
mockStorage.usuario = JSON.stringify(usuario4);
console.log("Salvo em storage:", mockStorage.usuario);

// Recuperar
const usuarioSalvo = JSON.parse(mockStorage.usuario);
console.log("Recuperado:", usuarioSalvo.nome);

// -------------------------------------------

// 17. CONFIGURAÇÃO DE APLICAÇÃO
console.log("\n--- Configuração em JSON ---");
const configJson = `{
  "app": {
    "nome": "Meu App",
    "versao": "1.0.0",
    "debug": true
  },
  "database": {
    "host": "localhost",
    "porta": 27017,
    "nome": "mydb"
  },
  "api": {
    "url": "https://api.example.com",
    "timeout": 5000
  }
}`;

const config = JSON.parse(configJson);
console.log("App:", config.app.nome);
console.log("DB:", config.database.host);
console.log("API URL:", config.api.url);

// -------------------------------------------

// 18. FORMATAR PARA EXIBIÇÃO
console.log("\n--- Formatar para Exibição ---");
const dados2 = {
  titulo: "Dados Formatados",
  usuarios: ["Paulo", "Quentin", "Rita"],
  metadata: {
    total: 3,
    pagina: 1
  }
};

const formatado = JSON.stringify(dados2, null, 2);
console.log("Resultado formatado:");
console.log(formatado);

// -------------------------------------------

// 19. ARRAY DE OBJETOS - OPERAÇÕES
console.log("\n--- Array de Objetos em JSON ---");
const usuarios2Json = `[
  {"id": 1, "nome": "Samuel", "cidade": "SP"},
  {"id": 2, "nome": "Tania", "cidade": "RJ"},
  {"id": 3, "nome": "Ulisses", "cidade": "MG"}
]`;

const usuarios2 = JSON.parse(usuarios2Json);
console.log("Total de usuários:", usuarios2.length);
console.log("Primeiro usuário:", usuarios2[0].nome);

// Filtrar e converter de volta para JSON
const usuariosSP = usuarios2.filter(u => u.cidade === "SP");
console.log("Usuários de SP:", JSON.stringify(usuariosSP));

// -------------------------------------------

// 20. CONVERTER PARA CSV
console.log("\n--- Converter JSON para CSV ---");
const pessoas = [
  { id: 1, nome: "Vanessa", email: "vanessa@email.com" },
  { id: 2, nome: "Wagner", email: "wagner@email.com" },
  { id: 3, nome: "Ximena", email: "ximena@email.com" }
];

// Função para converter JSON array para CSV
function jsonParaCSV(arrayObjetos) {
  const colunas = Object.keys(arrayObjetos[0]);
  const cabecalho = colunas.join(",");
  const linhas = arrayObjetos.map(obj =>
    colunas.map(col => obj[col]).join(",")
  );
  return [cabecalho, ...linhas].join("\n");
}

const csv = jsonParaCSV(pessoas);
console.log("CSV:");
console.log(csv);

console.log("\n=== JSON concluído! ===");
