const mongoose = require('mongoose');

const SuppliersCategorySchema = mongoose.Schema({
    Suppliers_Category:  { type: String, required: true },
    archieveRecord: { type: String },

});
module.exports = mongoose.model('SuppliersCategory', SuppliersCategorySchema);
