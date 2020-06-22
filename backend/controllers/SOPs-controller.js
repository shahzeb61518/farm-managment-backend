const SOPs = require('../models/SOPs-model');

// Create a SOPs
exports.createSOPs = (req, res, next) => {
  // console.log("boody of sops>>", req.body)
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
    // console.log("createdsops", createdsops);
    res.status(201).json({
      message: "Created successfully",
      sops: {
        ...createdsops,
        id: createdsops._id
      }
    });
  }).catch(error => {
    // console.log("error>>>>>", error)
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
    _id: req.body.id,
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
      // console.log(err)
      return res.status(401).json({
        message: "No updated!"
      });
    });
}


// SUBARRAY FUCTION

// sops sub array updates
exports.updateSOPsResponsibility = (req, res, next) => {
  console.log(req.body)
  const sops = new SOPs({
    _id: req.body.id,
    SOP_Responsibilities_User_First_Name: req.body.SOP_Responsibilities_User_First_Name,
    SOP_Responsibilities_User_Last_Name: req.body.SOP_Responsibilities_User_Last_Name,
    SOP_Responsibilities_Task_Descripion: req.body.SOP_Responsibilities_Task_Descripion,
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
      // console.log(err)
      return res.status(401).json({
        message: "No updated!"
      });
    });
}
exports.updateSOPsAdminstrative = (req, res, next) => {
  console.log(req.body)
  const sops = new SOPs({
    _id: req.body.id,
    SOP_Administrative_Tasks_User_First_Name: req.body.SOP_Administrative_Tasks_User_First_Name,
    SOP_Administrative_Tasks_User_Last_Name: req.body.SOP_Administrative_Tasks_User_Last_Name,
    SOP_Administrative_Tasks_Descripion: req.body.SOP_Administrative_Tasks_Descripion,
  });


  SOPs.updateOne({ _id: req.body.id, }, sops)
    .then(result => {
      console.log("result>>", result)

      if (result.nModified > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(err => {
      console.log("err>>", err)
      return res.status(401).json({
        message: "No updated!"
      });
    });
}
exports.updateSOPsRequirment = (req, res, next) => {
  console.log(req.body)
  const sops = new SOPs({
    _id: req.body.id,
    SOP_Requirements_Description: req.body.SOP_Requirements_Description,
    SOP_Requirements_Inventory_Location: req.body.SOP_Requirements_Inventory_Location,
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
      // console.log(err)
      return res.status(401).json({
        message: "No updated!"
      });
    });
}
exports.updateSOPsPorcess = (req, res, next) => {
  console.log(req.body)
  const sops = new SOPs({
    _id: req.body.id,
    SOP_Process_Steps_Description: req.body.SOP_Process_Steps_Description,
    SOP_Process_Steps_Dependency: req.body.SOP_Process_Steps_Dependency,
    SOP_Process_Steps_Time_to_Complete: req.body.SOP_Process_Steps_Time_to_Complete,
    SOP_Process_Steps_Frequency: req.body.SOP_Process_Steps_Frequency,
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
      // console.log(err)
      return res.status(401).json({
        message: "No updated!"
      });
    });
}
exports.updateSOPsCompeletion = (req, res, next) => {
  console.log(req.body)
  const sops = new SOPs({
    _id: req.body.id,
    SOP_Completion_Description: req.body.SOP_Completion_Description
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
      // console.log(err)
      return res.status(401).json({
        message: "No updated!"
      });
    });
}