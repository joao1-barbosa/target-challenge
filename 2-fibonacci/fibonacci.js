let previousNum = 0;
let currentNum = 1;
let nextNum = 0;

// Valor que será verificado
const input = 55;

while(nextNum < input){
    nextNum = previousNum + currentNum;
    previousNum = currentNum;
    currentNum = nextNum;
}

if((nextNum === input)){
    console.log(input + " pertence a sequência de Fibonacci");
}else{
    console.log(input + " não pertence a sequência de Fibonacci");
}