//////////////////  Ejercicio 1 ////////////////// 

let array1 = ["Juan", "Dani"]
let array2 = ["Leo", "Monica", "Juliana"]

const conctArrays = (a, b) =>  a.concat(b)
console.log(conctArrays(array1, array2));

////////////////// Ejercicio 2 ////////////////// 

function isVowel(letter) {
  return letter.match(/[aeiou]/i) ? 'Es vocal' : 'Es consonante'
}

console.log(isVowel('A'))

////////////////// Ejercicio 3 ////////////////// 

const generar_caracteres = (n, a) => a.repeat(n)

console.log(generar_caracteres(15, 'x'))

////////////////// Ejercicio 4 ///////////////////

function sumaArreglo(arreglo){
  let suma = 0;
  for(i=0; i<arreglo.length; i++){
        suma = suma + arreglo[i]
  }
  return suma
}

console.log(sumaArreglo([1, 2, 3, 4]))

////////////////// Ejercicio 5////////////////// 

//const numeroMayor = (x, y) => Math.max(x, y)

function numeroMayor(a, b, c){
    let maximo = Math.max(a, b, c)
    if(maximo === a && maximo === b && maximo === c){
        return 'Son iguales'
    }
    return maximo 
}
console.log(numeroMayor(17, -5, 3))
console.log(numeroMayor(3, 3, 3))