var salario = 2000.00;
var aumento = 0.15;
var inflacao = 0.07;
var novosalario = salario + (aumento*salario);
var novosalarioinflacao = novosalario - (inflacao*novosalario);      

console.log = (novosalario);
console.log = (novosalarioinflacao);

var strnovosalario = `O novo Salário é:\n R$\t${novosalario}`;
var strnovosalarioinflacao = `O novo Salário aplicada inflação é: \n R$ ${novosalarioinflacao}`;
console.log( strnovosalario );
console.log( strnovosalarioinflacao );