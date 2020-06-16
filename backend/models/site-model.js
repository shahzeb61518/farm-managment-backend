const mongoose = require('mongoose');

const siteSchema = mongoose.Schema({
    site_Name:  { type: String, required: true },
    site_ID:  { type: String, required: true },
    site_CDFA_Lic:  { type: String, required: true },
    site_Purpose:  { type: String, required: true },
    site_Location:  { type: String, required: true },
    site_Structure:  { type: String, required: true },
    
});
module.exports = mongoose.model('Site', siteSchema);
