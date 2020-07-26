const mongoose = require('mongoose');

const adminstrationSchema = mongoose.Schema({
    user_Role: { type: String, required: true },
    // user_Permission_Code: { type: String, required: true },
    user_Password: { type: String, required: true },
    user_Email_Address: { type: String, required: true },
    user_First_Name: { type: String, required: true },
    user_Last_Name: { type: String, required: true },
    user_Mobile_Phone: { type: String, required: true },
    user_Office_Phone: { type: String, required: true },
    archieveRecord: { type: String },
});

module.exports = mongoose.model('Admin', adminstrationSchema);
