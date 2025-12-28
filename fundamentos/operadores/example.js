// Operadores aritméticos
console.log('2 + 3 =', 2 + 3);
console.log("'2' + 3 =", '2' + 3); // concatenação: '23'
console.log('5 / 2 =', 5 / 2);
console.log('2 ** 3 =', 2 ** 3);

// Comparação
console.log('2 == "2" ->', 2 == '2');
console.log('2 === "2" ->', 2 === '2');
console.log('null == undefined ->', null == undefined); // true
console.log('null === undefined ->', null === undefined); // false

// Lógicos e curto-circuito
console.log('true && "ok" ->', true && 'ok');
console.log('false && "ok" ->', false && 'ok');
console.log('null || "default" ->', null || 'default');
console.log('"" || "fallback" ->', '' || 'fallback');

// Negação
console.log('!true =', !true);
