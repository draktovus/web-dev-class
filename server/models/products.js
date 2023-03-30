const data = require('../data/products.json');

function getProducts(){
    throw new Error("Something went wrong.")
    return data.products;
}

function getProductById(id){
    return data.products.find(product => product.id === id);
}

function addProduct(product){
    product.id = data.products.length + 1;
    data.products.push(product);
}

function updateProduct(product){
    const index = data.products.findIndex(p => p.id === product.id);
    data.products[index] = product;
}

function deleteProduct(product){
    const index = data.products.findIndex(p => p.id === product.id);
    data.products.splice(index, 1);
}

//search function for product in json
function searchProduct(searchTerm){
    const products = data.products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return products;
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    searchProduct,
}