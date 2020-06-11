const SOPs = require('../models/SOPs-model');

// Create a SOPs
exports.createSOPs = (req, res, next) => {
  console.log("boody of sops>>", req.body)
  // console.log("boody of responsibilityList>>", req.body.responsibilityList)
  // console.log("boody of requirmentList>>", req.body.requirmentList)
  // console.log("boody of adminstrativeTask>>", req.body.adminstrativeTask)
  // console.log("boody of processStep>>", req.body.processStep)
  // console.log("boody of compeletion >>", req.body.compeletion)
  const sops = new SOPs({
    SOP_Purpose_Description: req.body.SOP_Purpose_Description,
    responsibilityList: req.body.responsibilityList,
    requirmentList: req.body.requirmentList,
    adminstrativeTask: req.body.adminstrativeTask,
    processStep: req.body.processStep,
    compeletion: req.body.compeletion,

  });
  sops.save().then(createdsops => {
    console.log("createdsops", createdsops);
    res.status(201).json({
      message: "Created successfully",
      sops: {
        ...createdsops,
        id: createdsops._id
      }
    });
  }).catch(error => {
    console.log("error>>>>>", error)
    res.status(500).json({
      message: "Creation failed!"
    })
  });
}


// Get SOPs 
exports.getSOPs = (req, res, next) => {
  SOPs.find().then(documents => {
    // console.log(documents);
    res.status(200).json({
      message: 'Data fetched!!!',
      sopsList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

// // Delete sops
exports.deleteSOPs = (req, res, next) => {
  SOPs.deleteOne({ _id: req.body.id }).then(
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

exports.updateSOPs = (req, res, next) => {
    // console.log(req.body)
    const sops = new SOPs({
        _id: req.body.id ,
        SOP_Purpose_Description: req.body.SOP_Purpose_Description,
        responsibilityList: req.body.responsibilityList,
        requirmentList: req.body.requirmentList,
        adminstrativeTask: req.body.adminstrativeTask,
        processStep: req.body.processStep,
        compeletion: req.body.compeletion
    });
    SOPs.updateOne({ _id: req.body.id }, sops)
        .then(result => {
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