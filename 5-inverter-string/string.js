const string = "casca de banana";
const arrayOfString = string.split("");
let newString = "";

for(let i = arrayOfString.length-1; i>=0; i--){
    newString += arrayOfString[i];
}

console.log("String original: " + string);
console.log("String invertida: " + newString);

