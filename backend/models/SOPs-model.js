const mongoose = require('mongoose');

const sopsSchema = mongoose.Schema({
    SOP_Purpose_Description: { type: String},

    responsibilityList: [],

    requirmentList: [],

    adminstrativeTask: [],


    processStep: [],

    compeletion: [],

    categoryName: [],

    checkIDs: [],
    archieveRecord: { type: String },
});

module.exports = mongoose.model('SOPs', sopsSchema);
