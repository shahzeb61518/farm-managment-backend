const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    role_Name:  { type: String, required: true },
    archieveRecord: { type: String },
    adminObjectId: { type: mongoose.Schema.ObjectId, ref: 'Users' },
    adminId: { type: String },
});
module.exports = mongoose.model('Role', roleSchema);
