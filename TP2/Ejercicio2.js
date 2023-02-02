// TP 2 - Ejercicio 2
// 2) Dada dos palabras, "tren" y "edificio", hacer un programa que nos permita calcular cuál palabra es más larga. Usar la función **length** 

let p1 = "tren"
let p2 = "edificio"

if (p1.length < p2.length){
    console.log(`La palabra ${p2} tiene más caractéres que la palabra ${p1}`)
}
else if (p1.length > p2.length){
    console.log(`La palabra ${p1} tiene más caractéres que la palabra ${p2}`)
    }
else {
    console.log(`La palabra ${p1} tiene la misma cantidad de caractéres que la palabra ${p2}`)
}