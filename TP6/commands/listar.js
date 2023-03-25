const dataBase = require('../dataBase.js')

function listar(cat) {
    const product = dataBase.filter(element => element.categoria === cat);
    return product.length > 0 ? product : 'No se encontraron productos';
}

module.exports = listar; 