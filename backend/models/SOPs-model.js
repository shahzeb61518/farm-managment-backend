const mongoose = require('mongoose');

const sopsSchema = mongoose.Schema({
    SOP_Purpose_Description: { type: String},

    responsibilityList: [],

    requirmentList: [],

    adminstrativeTask: [],


    processStep: [],

    compeletion: [],

    categoryName: []


});

module.exports = mongoose.model('SOPs', sopsSchema);
