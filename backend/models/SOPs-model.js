const mongoose = require('mongoose');

const sopsSchema = mongoose.Schema({
    SOP_Purpose_Description: { type: String, required: true },

    responsibilityList: [
        {
            SOP_Responsibilities_Task_Descripion: { type: String },
            SOP_Responsibilities_User_First_Name: { type: String },
            SOP_Responsibilities_User_Last_Name: { type: String },
        }
    ],

    requirmentList: [
        {
            SOP_Requirements_Description: { type: String },
            SOP_Requirements_Inventory_Location: { type: String },
        }
    ],

    adminstrativeTask: [
        {
            SOP_Administrative_Tasks_Descripion: { type: String },
            SOP_Administrative_Tasks_User_First_Name: { type: String },
            SOP_Administrative_Tasks_User_Last_Name: { type: String },
        }
    ],


    processStep: [
        {
            SOP_Process_Steps_Dependency: { type: String },
            SOP_Process_Steps_Description: { type: String },
            SOP_Process_Steps_Frequency: { type: String },
            SOP_Process_Steps_Time_to_Complete: { type: String },
        }
    ],

    compeletion: [
        {
            SOP_Completion_Description: { type: String },
        }
    ],


});

module.exports = mongoose.model('SOPs', sopsSchema);
