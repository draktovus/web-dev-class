require('dotenv').config()
const jwt = require('jsonwebtoken')
const brcypt = require('bcrypt')
const { connect, ObjectId } = require('./mongo')

const COLLECTION_NAME = 'users'

const data = [
    {
        "name": "John Doe",
        "email": "john@doe.com",
        "password": "password",
        "role": "admin",
        "photo": "https://robohash.org/hicveldicta.png"
    },
    {
        "name": "Jane Doe",
        "email": "jane@doe.com",
        "password": "password",
        "role": "user",
        "photo": "https://robohash.org/janedoethegoatedbasketballplayer.png"
    }
]

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getAll(page = 1, pageSize = 30) {
    const col = await collection();
    const items = await col.find().skip((page - 1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments();
    return { items, total };
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
            { name: { $regex: searchTerm, $options: 'i' } },
            { email: { $regex: searchTerm, $options: 'i' } },
        ]
    }
    const items = await col.find(query).skip((page - 1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments(query);
    return { items, total };
}

async function seed() {
    const col = await collection();
    const result = await col.insertMany(data);
    return result.insertedCount;
}

async function login(email, password) {
    const col = await collection();
    const user = await col.findOne({ email });
    if (!user) {
        throw new Error('User not found.')
    }
    if (user.password !== password) {
        throw new Error('Invalid password.')
    }

    //synchronous encryption is shared key

    //public key encryption: public key, private key
    // public key, anybody can have it
    // private key, dont share with anybody
    // use public to share/store private
    const cleanUser = {...user, password: undefined}
    const token = await generateTokenAsync(cleanUser, '1d')

    return {user:cleanUser, token}
}

async function oAuthLogin(provider, accessToken) {
    // validate the access token
    // if valid, return the user
    // if not, create a new user
    // return the user
}

function generateTokenAsync(user,expiresIn) {
    return new Promise((resolve, reject) => {
        jwt.sign(user, process.env.JWT_SECRET, { expiresIn }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

function verifyTokenAsync(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}
module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteItem,
    search,
    seed,
    login,
    oAuthLogin,
    verifyTokenAsync,
    generateTokenAsync,
}