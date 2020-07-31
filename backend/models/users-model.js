const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    user_Role: { type: String },
    user_Permission_Code: { type: String },
    user_Company_ID: { type: String },
    user_Password: { type: String, required: true },
    user_Email_Address: { type: String, required: true },
    user_First_Name: { type: String, required: true },
    user_Last_Name: { type: String, required: true },
    user_Mobile_Phone: { type: String },
    user_Office_Phone: { type: String },
    user_Job_Title: { type: String },
    archieveRecord: { type: String },
    companyObjectId: { type: mongoose.Schema.ObjectId, ref: 'Company' },
    companyId: { type: String },
    companyName: { type: String },
});
module.exports = mongoose.model('Users', usersSchema);
