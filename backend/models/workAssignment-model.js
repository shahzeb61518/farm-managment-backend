const mongoose = require('mongoose');

const workAssignmentSchema = mongoose.Schema({
    SOP_ID: { type: mongoose.Schema.ObjectId, ref: 'SOPs', required: true },
    SOP_Description: { type: String, required: true },
    assignment_assignToUserId: { type: mongoose.Schema.ObjectId, ref: 'Users', required: true },
    assignment_workSiteId: { type: mongoose.Schema.ObjectId, ref: 'Site', required: true },
    assignment_When_Assigned: { type: String, required: true },
    assignment_When_Started: { type: String, required: true },
    assignment_When_Completed: { type: String, required: true },
    assignment_Elapsed_Start_Finish: { type: String },
    assignment_Allocated: { type: String },
    assignment_Percent_Over_Under: { type: String },
    assignment_Status: { type: String, required: true },
    assignment_Notes: { type: String },
});
module.exports = mongoose.model('WorkAssignment', workAssignmentSchema);
