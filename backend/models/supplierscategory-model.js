const mongoose = require('mongoose');

const SuppliersCategorySchema = mongoose.Schema({
    Suppliers_Category: { type: String, required: true },
    archieveRecord: { type: String },
    companyObjectId: { type: mongoose.Schema.ObjectId, ref: 'Company' },
    companyId: { type: String },

});
module.exports = mongoose.model('SuppliersCategory', SuppliersCategorySchema);
