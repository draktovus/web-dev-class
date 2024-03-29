const data = require('../data/products.json');
const { connect, ObjectId } = require('./mongo')

const COLLECTION_NAME = 'products'

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getAll(page=1, pageSize=30) {
    const col = await collection();
    const items = await col.find().skip((page-1)*pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments();
    return {items,total};
}

async function getById(id) {
    const col = await collection();
    const item = await col.findOne({ id: id });
    return item;
}

async function add(item) {
    const col = await collection();
    const result = await col.insertOne(item);

    item._id = result.insertedId;
    return result;
}

async function update(item) {
    const col = await collection();
    const result = await col.findOneAndDelete(
        { _id: new ObjectId(item.id) },
        { $set: item },
        { returnDocument: 'after' }
    );
    return result.value;
}

async function deleteItem(id) {
    const col = await collection();
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount
}

//search function for product in json
async function search(searchTerm, page = 1, pageSize = 30) {
    const col = await collection();
    // option 'i' is case insensitive
    const query = {
        $or: [
            { title: { $regex: searchTerm, $options: 'i' } },
            { description: { $regex: searchTerm, $options: 'i' } },
            { brand: { $regex: searchTerm, $options: 'i' } }
        ]
    }
    const items = await col.find(query).skip((page-1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments(query);
    return { items, total };
}

async function seed(){
    const col = await collection();
    const result = await col.insertMany(data.products);
    return result.insertedCount;
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteItem,
    search,
    seed
}