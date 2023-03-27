const jsonData = require('./dados.json');

// retira os dias em que o faturamento foi 0
const dataNotNull = jsonData.filter((value) => {
    return value.valor > 0;
});

let minValue = dataNotNull[1];
let maxValue = dataNotNull[1];

// faz a soma de todos os faturamentos diários
const total  = dataNotNull.reduce((accumulator, value) => {
    accumulator += value.valor;

    if (value.valor < minValue.valor) minValue = value;
    if (value.valor > maxValue.valor) maxValue = value;

    return accumulator;
},0);

// média mensal dos faturamentos
const average = total / dataNotNull.length;

//contagem de dias com faturamento maior que a média mensal
let counter = 0;

dataNotNull.forEach((value) => {
    if (value.valor > average) counter++;
});

console.log("Menor faturamento ocorreu no dia " + minValue.dia + ", no valor de " + minValue.valor);
console.log("Maior faturamento ocorreu no dia " + maxValue.dia + ", no valor de " + maxValue.valor);
console.log("Dias com faturamento maior que a média mensal: " + counter);