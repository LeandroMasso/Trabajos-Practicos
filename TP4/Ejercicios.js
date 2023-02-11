const readlinesync = require("readline-sync");
// ---------------------------------
// Trabajo Practico 4 - Ejercicio 1
// ---------------------------------

function sayhello(word){
    console.log('Hola',word,'!');
}

const word = readlinesync.question('Ingrese su nombre: ');
sayhello(word);

// ---------------------------------
// Trabajo Practico 4 - Ejercicio 2
// ---------------------------------

const name = readlinesync.question('Ingrese su nombre: ');
const lastname = readlinesync.question('Ingrese su apellido: ');
const age = readlinesync.question('Ingrese su edad: ');

const objetc = {
    name,
    lastname,
    age
};

console.log(objetc);


// ---------------------------------
// Trabajo Practico 4 - Ejercicio 3
// ---------------------------------
const list1 = [2, "Eric", "Jarra"]
const list2 = ["Leche", "Café", "Chocolate"]

function whereis(list,element) {
    if (list.indexOf(element) != -1){
        console.log('El elemento '+element+' esta en la posicion '+list.indexOf(element));
    } else {
        console.log('El elemento no se encuentra dentro de la lista')
    }

}

whereis(list1, "Jarra");
whereis(list2, "Café");

// ---------------------------------
// Trabajo Practico 4 - Ejercicio 4
// ---------------------------------

const list2Invert = ['Elem 1', 'Elem 2', 'Elem3'];
console.log(list2Invert.reverse());