const mongoose = require('mongoose');

const siteSchema = mongoose.Schema({
    site_Name:  { type: String, required: true },
    site_ID:  { type: String},
    site_CDFA_Lic:  { type: String},
    site_Purpose:  { type: String },
    site_Location:  { type: String },
    site_Structure:  { type: String },
    
});
module.exports = mongoose.model('Site', siteSchema);
