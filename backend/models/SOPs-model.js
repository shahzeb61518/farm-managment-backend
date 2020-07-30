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
    adminObjectId: { type: mongoose.Schema.ObjectId, ref: 'Users' },
    adminId: { type: String },
});

module.exports = mongoose.model('SOPs', sopsSchema);
