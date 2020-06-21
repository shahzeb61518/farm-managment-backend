const mongoose = require('mongoose');

const sopCategorySchema = mongoose.Schema({
    SOP_Category:  { type: String, required: true },
});
module.exports = mongoose.model('SOPsCategory', sopCategorySchema);
