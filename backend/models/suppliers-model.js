const mongoose = require('mongoose');

const suppliersSchema = mongoose.Schema({
       // SUppliers
       suppliers_Name: { type: String, required: true },
       suppliers_Tax_Id: { type: String },
       suppliers_LicenseNo: { type: String },
       suppliers_Contact_1_Name: { type: String },
       suppliers_Contact_1_Mobile: { type: String },
       suppliers_Contact_2_Name: { type: String },
       suppliers_Contact_2_Mobile: { type: String },
       suppliers_Address_1: { type: String },
       suppliers_Address_2: { type: String },
       suppliers_City: { type: String },
       suppliers_State: { type: String },
       suppliers_Zip_Code: { type: String },
       supliersCategoryName: [],
       archieveRecord: { type: String },
       companyObjectId: { type: mongoose.Schema.ObjectId, ref: 'Company' },
       companyId: { type: String },
});

module.exports = mongoose.model('Suppliers', suppliersSchema);
