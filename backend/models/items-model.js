const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema({
    // item
    items_Name: { type: String, required: true },
    items_Id: { type: String},
    items_Description: { type: String},
    items_Brand_ID: { type: String},
    items_Part_No: { type: String},
    items_Unit_of_Measure: { type: String },
    items_Unit_Size: { type: String },
    itemsAddToSupplierList: [],
    archieveRecord: { type: String },
});
module.exports = mongoose.model('Items', itemsSchema);
