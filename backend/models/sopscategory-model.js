const mongoose = require('mongoose');

const sopCategorySchema = mongoose.Schema({
    SOP_Category:  { type: String, required: true },
    sopsId: [{ type:  mongoose.Schema.ObjectId, ref: 'SOPs' }],
    checkIDs: []
});
module.exports = mongoose.model('SOPsCategory', sopCategorySchema);
