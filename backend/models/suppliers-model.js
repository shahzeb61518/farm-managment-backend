const mongoose = require('mongoose');

const suppliersSchema = mongoose.Schema({
       // SUppliers
       suppliers_Name:  { type: String, required: true },
       suppliers_Tax_Id:  { type: String, required: true },
       suppliers_LicenseNo:  { type: String, required: true },
       suppliers_Contact_1_Name:  { type: String, required: true },
       suppliers_Contact_1_Mobile:  { type: String, required: true },
       suppliers_Contact_2_Name:  { type: String, required: true },
       suppliers_Contact_2_Mobile:  { type: String, required: true },
       suppliers_Address_1:  { type: String, required: true },
       suppliers_Address_2:  { type: String, required: true },
       suppliers_City:  { type: String, required: true },
       suppliers_State:  { type: String, required: true },
       suppliers_Zip_Code:  { type: String, required: true },
       supliersCategoryName: []
   
});

module.exports = mongoose.model('Suppliers', suppliersSchema);
