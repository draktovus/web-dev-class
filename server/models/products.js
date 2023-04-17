const data = require('../data/products.json');
const { connect, ObjectId} = require('./mongo')

const COLLECTION_NAME = 'products'

async function collection(){
    const db = await connect();
    return db.collection(COLLECTION_NAME)
}

async function getProducts(){
    const col = await collection();
    const items = await col.find().toArray();

    return items
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
    collection,
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    searchProduct,
}