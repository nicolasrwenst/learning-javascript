// Exemplos de tipos e typeof

const s = 'Olá, mundo';
const n = 42;
const f = 3.14;
const b = true;
const vazio = null;
let indefinido;
const arr = [1, 2, 3];
const obj = { a: 1 };
function soma(a, b) { return a + b; }

console.log('s', s, typeof s);
console.log('n', n, typeof n);
console.log('f', f, typeof f);
console.log('b', b, typeof b);
console.log('vazio', vazio, typeof vazio); // atenção: 'object'
console.log('indefinido', indefinido, typeof indefinido);
console.log('arr', arr, typeof arr); // 'object'
console.log('obj', obj, typeof obj);
console.log('soma', soma, typeof soma); // 'function'
