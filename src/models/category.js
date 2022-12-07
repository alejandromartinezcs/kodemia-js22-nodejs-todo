const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: { type: String, required: true, unique: true},
    products: { type: [mongoose.ObjectId] },
});

module.exports = {
    schema,
    model,
};