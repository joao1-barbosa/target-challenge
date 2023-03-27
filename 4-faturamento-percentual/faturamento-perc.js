const fatutamento = [
    {state: "SP", value: 67836.43},
    {state: "RJ", value: 36678.66},
    {state: "MG", value: 29229.88},
    {state: "ES", value: 27165.48},
    {state: "Outros", value: 19849.53}
];

const total  = fatutamento.reduce((accumulator, value) => {
    accumulator += value.value;

    return accumulator;
},0);

let percentage;

fatutamento.forEach((value) => {
    percentage = (value.value / total) * 100;
    console.log(value.state + " teve participação de "+ percentage.toFixed(2)
    +"% no total mensal do faturamento");
})