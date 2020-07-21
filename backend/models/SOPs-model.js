const mongoose = require('mongoose');

const sopsSchema = mongoose.Schema({
    SOP_Purpose_Description: { type: String},

    responsibilityList: [],

    requirmentList: [],

    adminstrativeTask: [],


    processStep: [],

    compeletion: [],

    categoryName: [],

    checkIDs: []

});

module.exports = mongoose.model('SOPs', sopsSchema);
