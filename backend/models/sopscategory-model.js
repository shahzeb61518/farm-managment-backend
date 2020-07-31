const mongoose = require('mongoose');

const sopCategorySchema = mongoose.Schema({
    SOP_Category: { type: String, required: true },
    sopsId: [{ type: mongoose.Schema.ObjectId, ref: 'SOPs' }],
    archieveRecord: { type: String },
    companyObjectId: { type: mongoose.Schema.ObjectId, ref: 'Company' },
    companyId: { type: String },
});
module.exports = mongoose.model('SOPsCategory', sopCategorySchema);
