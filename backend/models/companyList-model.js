const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    // company_ID: { type: String, required: true },
    // company_Permission_Code: { type: String, required: true },
    company_Tax_ID: { type: String, required: true },
    company_Name: { type: String, required: true },
    company_License_Number: { type: String },
    company_Address_One: { type: String },
    company_Address_Two: { type: String },
    company_City: { type: String },
    company_State: { type: String },
    company_Zip: { type: String },
    archieveRecord: { type: String },
});


module.exports = mongoose.model('Company', companySchema);
