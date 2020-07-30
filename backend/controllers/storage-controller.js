const Storage = require('../models/storage-model');

exports.create = (req, res, next) => {
  let archieveRecord = "false"

  const storage = new Storage({
    storage_Name: req.body.storage_Name,
    storage_ID: req.body.storage_ID,
    storage_Location: req.body.storage_Location,
    storage_Purpose: req.body.storage_Purpose,
    archieveRecord:archieveRecord,
    adminObjectId:  req.body.adminId,
    adminId: req.body.adminId
  });
  storage.save().then(createdObject => {
    console.log(createdObject);
    res.status(201).json({
      message: "Created successfully",
      storage: {
        ...createdObject,
        id: createdObject._id
      }
    });
  }).catch(error => {
    console.log(error)
    res.status(500).json({
      message: "Creation failed!"
    })
  });
}


// Get  
exports.get = (req, res, next) => {
  Storage.find().then(documents => {
    console.log(documents);
    documents= documents.filter((el) => {
      if (el.archieveRecord) {
        return el.archieveRecord != "true" && el.adminId === req.body.id
      }
    });
    res.status(200).json({
      message: 'Data fetched!!!',
      storageList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

// // Delete 
exports.delete = (req, res, next) => {
  Storage.deleteOne({ _id: req.body.id }).then(
    result => {
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not deleted!" });
      }
    }
  ).catch(error => {
    res.status(500).json({
      message: "Deletion failed!"
    })
  });
}


exports.update = (req, res, next) => {
  // console.log(req.body)
  const storage = new Storage({
    _id: req.body.id,
    storage_Name: req.body.storage_Name,
    storage_ID: req.body.storage_ID,
    storage_Location: req.body.storage_Location,
    storage_Purpose: req.body.storage_Purpose,
    archieveRecord:req.body.archieveRecord

  });
  console.log(req.body)
  Storage.updateOne({ _id: req.body.id }, storage)
    .then(result => {
      console.log(result)

      if (result.nModified > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(err => {
      console.log(err)
      return res.status(401).json({
        message: "No updated!"
      });
    });
}

exports.archieved = (req, res, next) => {
  // console.log(req.body)
  Storage.updateOne(
    { _id: req.body.id },
    { $set: { "archieveRecord": req.body.archieveRecord } })
    .then(result => {
      // console.log(result)
      if (result.nModified > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(err => {
      console.log(err)
      return res.status(401).json({
        message: "No updated!"
      });
    });
}