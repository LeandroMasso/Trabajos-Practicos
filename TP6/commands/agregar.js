const dataBase = require('../dataBase.js')
const fs = require("fs");
const path = require("path");

function agregar(id,nombre,descripcion,categoria,precio){
    const filePath = path.join(__dirname,"..","dataBase.js") 
    newProduct = {
        id,
        nombre,
        descripcion,
        categoria,
        precio
    };
    dataBase.push(newProduct);
    console.log('Se agregó el siguiente producto:\n', newProduct);
    // fs.writeFileSync(filePath, dataBase,function(err) {
    //     if (err) throw err;
    //     console.log('Se agregó el siguiente producto:\n', newProduct);
    //   });
}

module.exports = agregar;