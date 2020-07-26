const mongoose = require('mongoose');

const ItemsCategorySchema = mongoose.Schema({
    Items_Category:  { type: String, required: true },
    archieveRecord: { type: String },
});
module.exports = mongoose.model('ItemsCategory', ItemsCategorySchema);
