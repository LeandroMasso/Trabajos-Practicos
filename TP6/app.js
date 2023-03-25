const dataBase = require('./dataBase.js')
const busqueda = require('./commands/busqueda.js')
const listar = require('./commands/listar.js')
const agregar = require('./commands/agregar.js')

let func = process.argv[2]; 

// ********* Functions ********** 

const cmdBuscarID = (id) => {
    if (id === undefined) {
      console.log('Error: No se ingresó ID de búsqueda');
    } else {
      console.log(`Producto con ID ${id}:\n`, busqueda.buscarPorId(parseInt(id)));
    }
};
  

const cmdBuscarPorPrecio = (price) => {
    if (price === undefined) {
        console.log('Error: No se ingresó precio de búsqueda');
      } else {
        console.log(`Producto/s con precio menor a ${price}:\n`, busqueda.buscarPorPrecio(parseInt(price)));
      }
};
  
const cmdListar = (cat) => {
    if (cat === undefined) {
        console.log('Error: No se ingresó categoría de búsqueda');
      } else {
        console.log(`Producto/s con categoría ${cat}:\n`, listar(cat));
      }
};
  
const cmdAgregar= (id,nombre,descripcion,categoria,precio) => {
    if ((id === undefined) | (descripcion === undefined) | (categoria === undefined)
    | (precio === undefined) | (nombre === undefined)){
        console.log('Error: No se ingresó la totalidad de las caracteristicas');
    } else {
        agregar(id,nombre,descripcion,categoria,precio);
    }
};
  
  
// ******** MAIN *********
const command = process.argv[2];
const param1 = process.argv[3];
const param2 = process.argv[4];
const param3 = process.argv[5];
const param4 = process.argv[6];
const param5 = process.argv[7];
  
switch (command) {
    case "buscarPorId":
        cmdBuscarID(param1);
      break;
    case "buscarPorPrecio":
      cmdBuscarPorPrecio(param1);
      break;
    case "listar":
      cmdListar(param1);
      break;
    case "agregar":
      cmdAgregar(param1,param2,param3,param4,param5);
      break;
    default:
      console.log('Comando incorrecto');
      break;
  }