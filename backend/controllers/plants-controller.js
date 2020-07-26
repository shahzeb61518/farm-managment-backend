const Plants = require('../models/plants-model');

exports.create = (req, res, next) => {
  let archieveRecord = "false"

  const plants = new Plants({
    plant_Name: req.body.plant_Name,
    plant_Id: req.body.plant_Id,
    plant_Strain: req.body.plant_Strain,
    plant_Source: req.body.plant_Source,
    plant_percent_Sativa: req.body.plant_percent_Sativa,
    plant_percent_Indica: req.body.plant_percent_Indica,
    plant_THC_mg_g: req.body.plant_THC_mg_g,
    plant_CBD_mg_g: req.body.plant_CBD_mg_g,
    plant_Germ_Time: req.body.plant_Germ_Time,
    plant_Seed_Time: req.body.plant_Seed_Time,
    plant_Veg_Time: req.body.plant_Veg_Time,
    plant_Flower_Time: req.body.plant_Flower_Time,
    plant_Total_Time: req.body.plant_Total_Time,
    plant_Light_Sched: req.body.plant_Light_Sched,
    archieveRecord:archieveRecord
  });
  plants.save().then(createdObject => {
    console.log(createdObject);
    res.status(201).json({
      message: "Created successfully",
      plants: {
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
  Plants.find().then(documents => {
    // documents= documents.filter((el) => {
    //     if (el.archieveRecord) {
    //       return el.archieveRecord != "true"
    //     }
    //   });
    // console.log(documents);
    res.status(200).json({
      message: 'Data fetched!!!',
      plantsList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

// // Delete 
exports.delete = (req, res, next) => {
  Plants.deleteOne({ _id: req.body.id }).then(
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
  const plants = new Plants({
    _id: req.body.id,
    plant_Name: req.body.plant_Name,
    plant_Id: req.body.plant_Id,
    plant_Strain: req.body.plant_Strain,
    plant_Source: req.body.plant_Source,
    plant_percent_Sativa: req.body.plant_percent_Sativa,
    plant_percent_Indica: req.body.plant_percent_Indica,
    plant_THC_mg_g: req.body.plant_THC_mg_g,
    plant_CBD_mg_g: req.body.plant_CBD_mg_g,
    plant_Germ_Time: req.body.plant_Germ_Time,
    plant_Seed_Time: req.body.plant_Seed_Time,
    plant_Veg_Time: req.body.plant_Veg_Time,
    plant_Flower_Time: req.body.plant_Flower_Time,
    plant_Total_Time: req.body.plant_Total_Time,
    plant_Light_Sched: req.body.plant_Light_Sched,
    archieveRecord:req.body.archieveRecord

  });
  console.log(req.body)
  Plants.updateOne({ _id: req.body.id }, plants)
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
  Plants.updateOne(
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