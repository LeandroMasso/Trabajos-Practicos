const readlinesync = require("readline-sync");
// ---------------------------------
// Trabajo Practico 2 - Ejercicio 1
// ---------------------------------
const word = readlinesync.question('Ingrese una palabra: ');

for (i=1; i<=10; i++ ){
    console.log("Hola", word, "!");
}

// ---------------------------------
// Trabajo Practico 2 - Ejercicio 2
// ---------------------------------
const edad = readlinesync.question("Ingrese su edad:")

console.log("Muestro todos sus años:")
for(let i=1; i<=edad; i++){
    console.log(i)
};

// ---------------------------------
// Trabajo Practico 2 - Ejercicio 3 
// ---------------------------------
let num = Number(readlinesync.question("Ingrese numero entero positivo:"));

while(num<0 || Number.isInteger(num) == false){
    num = Number(readlinesync.question("Ingrese numero entero positivo:"));
}
for(let i=1; i<=num; i++){
    if((i % 2) !== 0){
        console.log(i);
    }
}

// ---------------------------------
// Trabajo Practico 2 - Ejercicio 4
// ---------------------------------
let num2 = Number(readlinesync.question("Ingrese numero entero positivo:"));

while(num2<0 || Number.isInteger(num2) == false){
    num2 = Number(readlinesync.question("Ingrese numero entero positivo:"));
}
let triangulo = "*";
for(let i=1; i<=num2; i++){
    console.log(triangulo);
    triangulo += "*";
}

// ---------------------------------
// Trabajo Practico 2 - Ejercicio 5
// ---------------------------------

let input = readlinesync.question("Ingrese una palabra:");

for (let i = input.length - 1; i >= 0; i--) {
    console.log(input[i]);
}
