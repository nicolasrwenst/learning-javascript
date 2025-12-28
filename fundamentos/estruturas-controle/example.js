// if / else if / else
const nota = 75;
if (nota >= 90) {
  console.log('A');
} else if (nota >= 70) {
  console.log('B');
} else if (nota >= 50) {
  console.log('C');
} else {
  console.log('F');
}

// switch
const dia = 3;
switch (dia) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Segunda');
    break;
  case 2:
    console.log('Terça');
    break;
  case 3:
    console.log('Quarta');
    break;
  default:
    console.log('Outro dia');
}
