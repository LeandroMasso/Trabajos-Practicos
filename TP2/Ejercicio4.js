// TP 2 - Ejercicio 4
// 4) Escribir una función con el nombre "multiplicar" que me permita pasarle un número como párametro 
// y lo multiplique x **23** y retorne el resultado. 
// Usar esta funcion en otra variable y mostrar el resultado con el **console.log**

function multiplicar(num){
    return num * 23
}

const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

console.log(`La multplicación de ${numeroRandom} por 23 es igual a ${multiplicar(numeroRandom)}`)