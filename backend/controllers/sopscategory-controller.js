const SOPSCategory = require('../models/sopscategory-model');

exports.create = (req, res, next) => {
  let archieveRecord = "false"

  const sopsCategory = new SOPSCategory({
    SOP_Category: req.body.SOP_Category,
    archieveRecord:archieveRecord,
    companyObjectId: req.body.companyId,
    companyId: req.body.companyId
  });
  sopsCategory.save().then(createdObject => {
    console.log(createdObject);
    res.status(201).json({
      message: "Created successfully",
      sopsCategory: {
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
  SOPSCategory.find().populate('sopsId').then(documents => {
    console.log(documents);
    documents= documents.filter((el) => {
      if (el.archieveRecord) {
        return el.archieveRecord != "true" && el.companyId === req.body.id
      }
    });
    res.status(200).json({
      message: 'Data fetched!!!',
      sopsCategoryList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

// // Delete 
exports.delete = (req, res, next) => {
  SOPSCategory.deleteOne({ _id: req.body.id }).then(
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
  const sopsCategory = new SOPSCategory({
    _id: req.body.id,
    SOP_Category: req.body.SOP_Category,
    sopsId: req.body.sopsId,
    archieveRecord:req.body.archieveRecord

  });
 console.log(req.body)
 SOPSCategory.updateOne({ _id: req.body.id }, sopsCategory)
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
  SOPSCategory.updateOne(
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