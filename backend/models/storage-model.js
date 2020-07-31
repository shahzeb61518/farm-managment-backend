const mongoose = require('mongoose');

const storageSchema = mongoose.Schema({
    // list of Storage
    storage_Name: { type: String , required: true },
    storage_ID: { type: String  },
    storage_Location: { type: String  },
    storage_Purpose: { type: String  },
    archieveRecord: { type: String },
    companyObjectId: { type: mongoose.Schema.ObjectId, ref: 'Company' },
    companyId: { type: String },
});
module.exports = mongoose.model('Storage', storageSchema);
