const mongoose = require('mongoose');

const sopsSchema = mongoose.Schema({
    SOP_Purpose_Description: { type: String },

    responsibilityList: [],

    requirmentList: [],

    adminstrativeTask: [],


    processStep: [],

    compeletion: [],

    categoryName: [],

    checkIDs: [],
    archieveRecord: { type: String },
    companyObjectId: { type: mongoose.Schema.ObjectId, ref: 'Company' },
    companyId: { type: String },
});

module.exports = mongoose.model('SOPs', sopsSchema);
