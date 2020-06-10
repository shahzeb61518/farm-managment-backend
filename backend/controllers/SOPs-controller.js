const SOPs = require('../models/SOPs-model');

// Create a SOPs
exports.createSOPs = (req, res, next) => {
  // console.log("boody of sops>>", req.body)
  const sops = new SOPs({
    SOP_Purpose_Description: req.body.SOP_Purpose_Description,
    responsibilityList: [
      {
        SOP_Responsibilities_Task_Descripion: req.body.SOP_Responsibilities_Task_Descripion,
        SOP_Responsibilities_User_First_Name: req.body.SOP_Responsibilities_User_First_Name,
        SOP_Responsibilities_User_Last_Name: req.body.SOP_Responsibilities_User_Last_Name,
      }
    ],

    requirmentList: [
      {
        SOP_Requirements_Description: req.body.SOP_Requirements_Description,
        SOP_Requirements_Inventory_Location: req.body.SOP_Requirements_Inventory_Location,
      }
    ],

    adminstrativeTask: [
      {
        SOP_Administrative_Tasks_Descripion: req.body.SOP_Administrative_Tasks_Descripion,
        SOP_Administrative_Tasks_User_First_Name: req.body.SOP_Administrative_Tasks_User_First_Name,
        SOP_Administrative_Tasks_User_Last_Name: req.body.SOP_Administrative_Tasks_User_Last_Name,
      }
    ],
    processStep: [
      {
        SOP_Process_Steps_Dependency: req.body.SOP_Process_Steps_Dependency,
        SOP_Process_Steps_Description: req.body.SOP_Process_Steps_Description,
        SOP_Process_Steps_Frequency: req.body.SOP_Process_Steps_Frequency,
        SOP_Process_Steps_Time_to_Complete: req.body.SOP_Process_Steps_Time_to_Complete,
      }
    ],
    compeletion: [
      {
        SOP_Completion_Description: req.body.SOP_Completion_Description,

      }
    ],
  });
  sops.save().then(createdsops => {
    // console.log(createdsops);
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
