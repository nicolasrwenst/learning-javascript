// Exemplo: var, let, const

// var: escopo de função e hoisting
console.log('antesVar =', antesVar); // undefined (hoisting)
var antesVar = 'sou var';
console.log('depoisVar =', antesVar);

// let: escopo de bloco, sem inicialização antes da declaração
try {
  console.log('antesLet =', antesLet); // ReferenceError
} catch (e) {
  console.log('antesLet ->', e.name);
}
let antesLet = 'sou let';
console.log('depoisLet =', antesLet);

// const: não pode reatribuir
const pi = 3.14;
console.log('pi =', pi);
// pi = 3.1415; // TypeError se descomentado

// const com objetos: a referência é constante, propriedades podem mudar
const pessoa = { nome: 'Ana' };
console.log('pessoa antes =', pessoa);vs
pessoa.nome = 'Maria';
console.log('pessoa depois =', pessoa);
