const mongoose = require('mongoose');

const SuppliersCategorySchema = mongoose.Schema({
    Suppliers_Category: { type: String, required: true },
    archieveRecord: { type: String },
    adminObjectId: { type: mongoose.Schema.ObjectId, ref: 'Users' },
    adminId: { type: String },

});
module.exports = mongoose.model('SuppliersCategory', SuppliersCategorySchema);
