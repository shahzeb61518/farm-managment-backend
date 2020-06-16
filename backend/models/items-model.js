const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema({
    // item
    items_Name: { type: String, required: true },
    items_Id: { type: String, required: true },
    items_Description: { type: String, required: true },
    items_Brand_ID: { type: String, required: true },
    items_Part_No: { type: String, required: true },
    items_Unit_of_Measure: { type: String, required: true },
    items_Unit_Size: { type: String, required: true },
});
module.exports = mongoose.model('Items', itemsSchema);
