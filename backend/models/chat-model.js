const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    message: { type: String, required: true },
    senderId: { type: String },
    recieverId: { type: String },
    check: { type: String },
    threadId: { type: String },
    date: { type: String }
});
module.exports = mongoose.model('Chat', chatSchema);