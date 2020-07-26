const Items = require('../models/items-model');

exports.create = (req, res, next) => {
  let archieveRecord = "false"
  const items = new Items({
    items_Name: req.body.items_Name,
    items_Id: req.body.items_Id,
    items_Description: req.body.items_Description,
    items_Brand_ID: req.body.items_Brand_ID,
    items_Part_No: req.body.items_Part_No,
    items_Unit_of_Measure: req.body.items_Unit_of_Measure,
    items_Unit_Size: req.body.items_Unit_Size,
    archieveRecord:archieveRecord
  });
  items.save().then(createdObject => {
    console.log(createdObject);
    res.status(201).json({
      message: "Created successfully",
      items: {
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
  Items.find().then(documents => {
    // console.log(documents);
    // documents= documents.filter((el) => {
    //   if (el.archieveRecord) {
    //     return el.archieveRecord != "true"
    //   }
    // });
    res.status(200).json({
      message: 'Data fetched!!!',
      itemsList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

// // Delete 
exports.delete = (req, res, next) => {
  Items.deleteOne({ _id: req.body.id }).then(
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
  const items = new Items({
    _id: req.body.id,
    items_Name: req.body.items_Name,
    items_Id: req.body.items_Id,
    items_Description: req.body.items_Description,
    items_Brand_ID: req.body.items_Brand_ID,
    items_Part_No: req.body.items_Part_No,
    items_Unit_of_Measure: req.body.items_Unit_of_Measure,
    items_Unit_Size: req.body.items_Unit_Size,
    itemsAddToSupplierList: req.body.itemsAddToSupplierList,
    archieveRecord:req.body.archieveRecord

  });
  console.log(req.body)
  Items.updateOne({ _id: req.body.id }, items)
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
  Items.updateOne(
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