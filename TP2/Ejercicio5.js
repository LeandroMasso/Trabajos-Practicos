// TP 2 - Ejercicio 5
// 5) Escribir un programa que inicie un array vacío y luego vaya almacenando números aleatorios. 
// Puede usar la variable "numeroRandom" del ejercicio 1. 

let lista = []

for(let i=1; i<=10; i++){
    const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    lista.push(numeroRandom)
}

console.log('Lista = '+lista)