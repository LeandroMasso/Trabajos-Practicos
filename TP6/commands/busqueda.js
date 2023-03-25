const dataBase = require('../dataBase.js')

function buscarPorId(id) {
    const product = dataBase.find(element => element.id === id);
    return product || 'Producto no encontrado';
}

function buscarPorPrecio(maxPrice) {
    const product = dataBase.filter(element => element.precio <= maxPrice);
    return product.length > 0 ? product : 'No se encontraron productos';
}

module.exports = {buscarPorId, buscarPorPrecio};