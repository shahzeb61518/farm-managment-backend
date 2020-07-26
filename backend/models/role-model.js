const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    role_Name:  { type: String, required: true },
    archieveRecord: { type: String },
});
module.exports = mongoose.model('Role', roleSchema);
