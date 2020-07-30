const mongoose = require('mongoose');

const sopCategorySchema = mongoose.Schema({
    SOP_Category: { type: String, required: true },
    sopsId: [{ type: mongoose.Schema.ObjectId, ref: 'SOPs' }],
    archieveRecord: { type: String },
    adminObjectId: { type: mongoose.Schema.ObjectId, ref: 'Users' },
    adminId: { type: String },
});
module.exports = mongoose.model('SOPsCategory', sopCategorySchema);
