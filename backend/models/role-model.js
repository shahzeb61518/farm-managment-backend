const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    role_Name:  { type: String, required: true },
});
module.exports = mongoose.model('Role', roleSchema);
