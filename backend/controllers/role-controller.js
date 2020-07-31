const Role = require('../models/role-model');

exports.create = (req, res, next) => {
    console.log("req.body>>Role>",req.body);

  let archieveRecord = "false"

  const role = new Role({
    role_Name: req.body.role_Name,
    archieveRecord:archieveRecord,
    companyObjectId: req.body.companyId,
    companyId: req.body.companyId
  });
  role.save().then(createdObject => {
    console.log(createdObject);
    res.status(201).json({
      message: "Created successfully",
      role: {
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
  Role.find().then(documents => {
    console.log(documents);
    documents= documents.filter((el) => {
      if (el.archieveRecord) {
        return el.archieveRecord != "true" && el.companyId === req.body.id
      }
    });
    res.status(200).json({
      message: 'Data fetched!!!',
      roleList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

// // Delete 
exports.delete = (req, res, next) => {
  Role.deleteOne({ _id: req.body.id }).then(
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
  const role = new Role({
    _id: req.body.id,
    role_Name: req.body.role_Name,
    archieveRecord:req.body.archieveRecord
    
  });
 console.log(req.body)
 Role.updateOne({ _id: req.body.id }, role)
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
  Role.updateOne(
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