const Suppliers = require('../models/suppliers-model');

exports.create = (req, res, next) => {
  let archieveRecord = "false"

  const suppliers = new Suppliers({
    suppliers_Name: req.body.suppliers_Name,
    suppliers_Tax_Id: req.body.suppliers_Tax_Id,
    suppliers_LicenseNo: req.body.suppliers_LicenseNo,
    suppliers_Contact_1_Name: req.body.suppliers_Contact_1_Name,
    suppliers_Contact_1_Mobile: req.body.suppliers_Contact_1_Mobile,
    suppliers_Contact_2_Name: req.body.suppliers_Contact_2_Name,
    suppliers_Contact_2_Mobile: req.body.suppliers_Contact_2_Mobile,
    suppliers_Address_1: req.body.suppliers_Address_1,
    suppliers_Address_2: req.body.suppliers_Address_2,
    suppliers_City: req.body.suppliers_City,
    suppliers_State: req.body.suppliers_State,
    suppliers_Zip_Code: req.body.suppliers_Zip_Code,
    archieveRecord:archieveRecord
  });
  suppliers.save().then(createdObject => {
    console.log(createdObject);
    res.status(201).json({
      message: "Created successfully",
      suppliers: {
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
  Suppliers.find().then(documents => {
    // console.log(documents);
    // documents= documents.filter((el) => {
    //   if (el.archieveRecord) {
    //     return el.archieveRecord != "true"
    //   }
    // });
    res.status(200).json({
      message: 'Data fetched!!!',
      suppliersList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

// // Delete 
exports.delete = (req, res, next) => {
  Suppliers.deleteOne({ _id: req.body.id }).then(
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
  const suppliers = new Suppliers({
    _id: req.body.id,
    suppliers_Name: req.body.suppliers_Name,
    suppliers_Tax_Id: req.body.suppliers_Tax_Id,
    suppliers_LicenseNo: req.body.suppliers_LicenseNo,
    suppliers_Contact_1_Name: req.body.suppliers_Contact_1_Name,
    suppliers_Contact_1_Mobile: req.body.suppliers_Contact_1_Mobile,
    suppliers_Contact_2_Name: req.body.suppliers_Contact_2_Name,
    suppliers_Contact_2_Mobile: req.body.suppliers_Contact_2_Mobile,
    suppliers_Address_1: req.body.suppliers_Address_1,
    suppliers_Address_2: req.body.suppliers_Address_2,
    suppliers_City: req.body.suppliers_City,
    suppliers_State: req.body.suppliers_State,
    suppliers_Zip_Code: req.body.suppliers_Zip_Code,
    supliersCategoryName:req.body.supliersCategoryName,
  });
  console.log(req.body)
  Suppliers.updateOne({ _id: req.body.id }, suppliers)
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
  Suppliers.updateOne(
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