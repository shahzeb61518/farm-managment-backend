const WorkAssignment = require('../models/workAssignment-model');

exports.create = (req, res, next) => {
  let archieveRecord = "false"
  const workAssignment = new WorkAssignment({
    SOP_ID: req.body.SOP_ID,
    SOP_Description: req.body.SOP_Description,
    assignment_assignToUserId: req.body.assignment_assignToUserId,
    assignment_UserId: req.body.assignment_assignToUserId,
    assignment_workSiteId: req.body.assignment_workSiteId,
    assignment_When_Assigned: req.body.assignment_When_Assigned,
    assignment_When_Started: req.body.assignment_When_Started,
    assignment_When_Completed: req.body.assignment_When_Completed,
    assignment_Elapsed_Start_Finish: req.body.assignment_Elapsed_Start_Finish,
    assignment_Allocated: req.body.assignment_Allocated,
    assignment_Percent_Over_Under: req.body.assignment_Percent_Over_Under,
    assignment_Status: req.body.assignment_Status,
    assignment_Notes: req.body.assignment_Notes,
    archieveRecord: archieveRecord,
    adminObjectId: req.body.adminId,
    adminId: req.body.adminId
  });
  workAssignment.save().then(createdObject => {
    console.log(createdObject);
    res.status(201).json({
      message: "Created successfully",
      workAssignment: {
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
  WorkAssignment.find()
    .populate('SOP_ID')
    .populate('assignment_assignToUserId')
    .populate('assignment_workSiteId').then(documents => {
      // console.log(documents);
      documents = documents.filter((el) => {
        if (el.archieveRecord) {
          return el.archieveRecord != "true"
        }
      });
      res.status(200).json({
        message: 'Data fetched!!!',
        workAssignmentList: documents
      });
    }).catch(error => {
      res.status(500).json({
        message: "Getting data failed!"
      })
    });
}

// // Delete 
exports.delete = (req, res, next) => {
  WorkAssignment.deleteOne({ _id: req.body.id }).then(
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
  const workAssignment = new WorkAssignment({
    _id: req.body.id,
    assignment_When_Started: req.body.assignment_When_Started,
    assignment_When_Completed: req.body.assignment_When_Completed,
    assignment_Status: req.body.assignment_Status,
  });
  console.log(req.body)
  WorkAssignment.updateOne({ _id: req.body.id }, workAssignment)
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
  WorkAssignment.updateOne(
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


// exports.getWorkByUserId = (req, res, next) => {
//   console.log("req.body.assignment_UserId", req.body.assignment_UserId);
//   WorkAssignment.find({}, { projection: { _id: 0, name: 1, address: 1 } }).then(workAssignment => {
//     if (workAssignment) {
//       console.log("workAssignment", workAssignment);
//       res.status(200).json(workAssignment);
//     } else {
//       res.status(404).json({
//         message: "workAssignment not found!",
//         workAssignment: workAssignment
//       });
//     }
//   })
//     .catch(error => {
//       res.status(500).json({
//         message: "Fetching workAssignment failed!"
//       });
//     });
// }
exports.getWorkByUserId = (req, res, next) => {
  console.log("req.body.assignment_UserId", req.body.assignment_UserId);

  WorkAssignment.find().then(documents => {
    // console.log(documents);
    documents = documents.filter((el) => {
      if (el.archieveRecord) {
        return el.archieveRecord != "true" && el.assignment_UserId === req.body.assignment_UserId
      }
    });
    res.status(200).json({
      message: 'Data fetched!!!',
      workAssignmentList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}