const ItemsCategory = require('../models/itemscategory-model');

exports.create = (req, res, next) => {
  let archieveRecord = "false"

  const itemsCategory = new ItemsCategory({
    Items_Category: req.body.Items_Category,
    archieveRecord:archieveRecord,
    companyObjectId: req.body.companyId,
    companyId: req.body.companyId
  });
  itemsCategory.save().then(createdObject => {
    console.log(createdObject);
    res.status(201).json({
      message: "Created successfully",
      itemsCategory: {
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
  ItemsCategory.find().then(documents => {
    console.log(documents);
    documents= documents.filter((el) => {
        if (el.archieveRecord) {
          return el.archieveRecord != "true" && el.companyId === req.body.id
        }
      });
    res.status(200).json({
      message: 'Data fetched!!!',
      itemsCategoryList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

// // Delete 
exports.delete = (req, res, next) => {
  ItemsCategory.deleteOne({ _id: req.body.id }).then(
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
  const itemsCategory = new ItemsCategory({
    _id: req.body.id,
    Items_Category: req.body.Items_Category,
    archieveRecord:req.body.archieveRecord

    
  });
//  console.log(req.body)
 ItemsCategory.updateOne({ _id: req.body.id }, itemsCategory)
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
  ItemsCategory.updateOne(
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