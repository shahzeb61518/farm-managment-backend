const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    message:  { type: String, required: true },
    senderId: { type: mongoose.Schema.ObjectId, ref: 'Users' },
    receiverId: { type: mongoose.Schema.ObjectId, ref: 'Users' },
    // archieveRecord: { type: String },
    // companyObjectId: { type: mongoose.Schema.ObjectId, ref: 'Company' },
    // companyId: { type: String },
});
module.exports = mongoose.model('Chat',  chatSchema);
