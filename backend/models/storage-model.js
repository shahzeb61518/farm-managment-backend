const mongoose = require('mongoose');

const storageSchema = mongoose.Schema({
    // list of Storage
    storage_Name: { type: String, required: true },
    storage_ID: { type: String, required: true },
    storage_Location: { type: String, required: true },
    storage_Purpose: { type: String, required: true },
});
module.exports = mongoose.model('Storage', storageSchema);
